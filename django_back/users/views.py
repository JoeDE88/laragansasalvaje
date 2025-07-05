from django.shortcuts import render
import json
from django.http import JsonResponse
from django.contrib.auth import get_user_model
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django_back.utils import generate_access_token,generate_refresh_token,get_user_from_token

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
    
    access_token = generate_access_token(user)
    refresh_token = generate_refresh_token(user)
    return JsonResponse({
        'access': access_token,
        'refresh': refresh_token
        })

@csrf_exempt
@require_POST
def refresh_token_view(request):
    try:
        data = json.loads(request.body)
        refresh_token = data.get('refresh')
    except json.JSONDecodeError:
        return JsonResponse({'error': 'JSON inválido'}, status=400)

    if not refresh_token:
        return JsonResponse({'error': 'Falta refresh token'}, status=400)

    user = get_user_from_token(refresh_token, expected_type="refresh")
    if user is None:
        return JsonResponse({'error': 'Refresh token inválido o expirado'}, status=401)

    new_access_token = generate_access_token(user)
    return JsonResponse({'access': new_access_token})
