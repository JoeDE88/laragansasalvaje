import jwt
from datetime import datetime,timedelta
from django.conf import settings
from django.contrib.auth.models import User
from django.http import JsonResponse
from functools import wraps
from PIL import Image

def generate_access_token(user):
    payload = {
        'user_id': user.id,
        'username': user.username,
        'exp': datetime.utcnow() + timedelta(seconds=settings.JWT_EXP_DELTA_SECONDS),
        'iat': datetime.utcnow(),
        'token_type': 'access'
    }
    token = jwt.encode(payload,settings.JWT_SECRET,algorithm=settings.JWT_ALGORITHM)

    return token if isinstance(token,str) else token.decode('utf-8')

def generate_refresh_token(user):
    payload = {
        'user_id': user.id,
        'username': user.username,
        'exp': datetime.utcnow() + timedelta(days=30),
        'iat': datetime.utcnow(),
        'token_type': 'refresh'
    }

    token = jwt.encode(payload, settings.JWT_SECRET, algorithm=settings.JWT_ALGORITHM)

    return token if isinstance(token, str) else token.decode('utf-8')

def get_user_from_token(token,expected_type='access'):
    try:
        payload = jwt.decode(token, settings.JWT_SECRET, algorithms=[settings.JWT_ALGORITHM])

        if payload.get("token_type") != expected_type:
            return None
        
        user = User.objects.get(id=payload['user_id'])
        return user
    
    except (jwt.ExpiredSignatureError, jwt.InvalidTokenError, User.DoesNotExist):
        return None
    
def jwt_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return JsonResponse({'error':'Token no proporcionado'}, status=401)
        
        token = auth_header.split(' ')[1]
        user = get_user_from_token(token)
        if not user :
            return JsonResponse({'error':'Token inválido o expirado'},status=401)
        
        request.user = user
        return view_func(request, *args, **kwargs)
    return wrapper

def resize_image(image_path, max_width=640,max_height=480):
    img = Image.open(image_path)
    if img.width > max_width or img.height > max_height:
        img = img.resize((max_width,max_height), Image.LANCZOS)
        img.save(image_path)