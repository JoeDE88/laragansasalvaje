from django.shortcuts import render
import json
from django.views.decorators.http import require_GET,require_POST
from django_back.utils import jwt_required
from django.http import JsonResponse
from .models import Evento
from django.views.decorators.csrf import csrf_exempt

@require_GET
def eventos_list(request):
    eventos = Evento.objects.all()
    data = []

    for evento in eventos:
        data.append({
            'id': evento.id,
            'nombre': evento.nombre,
            'descripcion': evento.descripcion,
            'imagen': evento.imagen.url if evento.imagen else None,
            'creado_en': evento.creado_en,
            'slug': evento.slug
        })
        
    return JsonResponse(data, safe=False)
    
@csrf_exempt
@require_POST
@jwt_required
def create_event(request):
    nombre = request.POST.get('nombre')
    descripcion = request.POST.get('descripcion')
    imagen = request.FILES.get('imagen')

    new_event = Evento.objects.create(
        nombre=nombre,
        descripcion=descripcion,
        imagen=imagen
    )

    return JsonResponse({
        'message': 'Evento creado',
        'evento_id': new_event.id
    }, status=201)