from django.shortcuts import render
import json
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django_back.utils import generate_jwt

@csrf_exempt
@require_POST
def login_view(request):
    try:
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

    except json.JSONDecodeError:
        return JsonResponse({'error':'JSON inválido'},status=400)
    
    if not username or not password:
        return JsonResponse({'error':'Faltan credenciales'}, status=400)
    
    user = authenticate(username=username,password=password)
    if user is None:
        return JsonResponse({'error':'Credenciales incorrectas'}, status=401)
    
    token = generate_jwt(user)
    return JsonResponse({'token':token})

User = get_user_model()

@csrf_exempt
def create_superuser(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if not username or not email or not password:
                return JsonResponse({'error': 'Faltan datos.'}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'El usuario ya existe.'}, status=400)

            User.objects.create_superuser(username=username, email=email, password=password)
            return JsonResponse({'message': 'Superuser creado correctamente.'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Solo se permiten peticiones POST.'}, status=405)