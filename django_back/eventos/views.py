from django.shortcuts import render, get_object_or_404
import json
from django.views.decorators.http import require_GET,require_POST,require_http_methods
from django.core.exceptions import ValidationError
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
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

@require_GET
def detalles_evento_id(request,evento_id):
    evento = get_object_or_404(Evento, id=evento_id)

    data = {
        'id': evento.id,
        'nombre': evento.nombre,
        'descripcion': evento.descripcion,
        'imagen': evento.imagen.url,
    }

    return JsonResponse(data,safe=False)

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

@csrf_exempt
@require_http_methods(['POST','DELETE'])
@jwt_required
def manage_event(request,evento_id):
    try:
        evento = Evento.objects.get(id=evento_id)
    except Evento.DoesNotExist:
        return JsonResponse({"error":"Evento no encontrado"},status=404)
    
    if request.method == 'POST':
        if not request.content_type.startswith('multipar/form-data'):
            return JsonResponse({"error":"Debe ser una petición con multipart/form-data"},status=400)
        
        nombre = request.POST.get('nombre',evento.nombre)
        descripcion = request.POST.get('descripcion',evento.descripcion)

        if 'imagen' in request.FILES:
            evento.imagen = request.FILES['imagen']

        evento.nombre = nombre
        evento.descripcion = descripcion

        try:
            evento.save()
            return JsonResponse({'message': 'Evento actualizado correctamente'},status=200)
        except ValidationError as e:
            return JsonResponse({'errors':e.message_dict},status=400)
    
    elif request.method == 'DELETE':
        evento.delete()
        return JsonResponse({'message':'Evento eliminado'},status=200)
    
    else:
        return HttpResponseNotAllowed(['PUT','DELETE'])