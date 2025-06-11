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