#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from django.core.exceptions import ValidationError
from .models import Publicacion
from django_back.utils import jwt_required
from django.views.decorators.http import require_GET, require_POST, require_http_methods
from django.views.decorators.csrf import csrf_exempt

@require_GET
def publicacion_list(request):
    publicaciones = Publicacion.objects.all().order_by('creado_en')
    data = []

    for pub in publicaciones:

        data.append({
            'id': pub.id,
            'titulo': pub.titulo,
            'slug': pub.slug,
            'contenido': pub.contenido,
            'imagen_destacada': pub.imagen_destacada.url if pub.imagen_destacada else None,
            'url_video': pub.url_video,
            'etiqueta': pub.etiqueta,
            'creado_en': pub.creado_en,
            'tipo':pub.tipo
        })
        
    return JsonResponse(data, safe=False)

@require_GET
def detalle_pub(request, slug):
    try:
        pub = Publicacion.objects.get(slug=slug)
        data = {
            'id' : pub.id,
            'titulo' : pub.titulo,
            'tipo': pub.tipo,
            'slug': pub.slug,
            'contenido' : pub.contenido,
            'imagen_destacada' : pub.imagen_destacada.url if pub.imagen_destacada else None,
            'url_video': pub.url_video if pub.url_video else None,
            'etiqueta' : pub.etiqueta,
            'creado_en' : pub.creado_en
        }
        return JsonResponse(data)
    except pub.DoesNotExist:
        return JsonResponse({'error':'pub no encontrando'}, status=404)

@csrf_exempt
@require_POST
@jwt_required
def create_publicacion(request):
    if not request.content_type.startswith('multipart/form-data'):
        return HttpResponseBadRequest("Debe ser una solicitud multipart/form-data")
    
    titulo = request.POST.get('titulo')
    tipo = request.POST.get('tipo','articulo')
    contenido = request.POST.get('contenido')
    url_video = request.POST.get('url_video')
    imagen_destacada = request.FILES.get('imagen_destacada')
    etiqueta = request.POST.get('etiqueta')

    nueva_pub = Publicacion(
        titulo=titulo,
        tipo=tipo,
        contenido=contenido,
        url_video=url_video,
        imagen_destacada=imagen_destacada,
        etiqueta=etiqueta
    )

    try:
        nueva_pub.full_clean()
        nueva_pub.save()
    except ValidationError as e:
        return JsonResponse({'errors': e.message_dict}, status=400)

    return JsonResponse({
        "message": "Publicación creada",
        "pub_id": nueva_pub.id
    }, status=201)

@csrf_exempt
@require_http_methods(['PUT','DELETE'])
@jwt_required
def manage_publicacion(request,pub_id):
    try:
        publicacion = Publicacion.objects.get(id=pub_id)
    except Publicacion.DoesNotExist:
        return JsonResponse({"error":"Publicación no encontrada"},status=404)
    
    if request.method == 'PUT':
        if not request.content_type.startswith('multipart/form-data'):
            return JsonResponse({"error":"Debe ser multipart/form-data"},status=400)
        
        titulo = request.POST.get('titulo', publicacion.titulo)
        tipo = request.POST.get('tipo',publicacion.tipo)
        contenido = request.POST.get('contenido',publicacion.contenido)
        url_video = request.POST.get('url_video',publicacion.url_video)
        etiqueta = request.POST.get('etiqueta',publicacion.etiqueta)

        if 'imagen_destacada' in request.FILES:
            publicacion.imagen_destacada = request.FILES['imagen_destacada']
        if 'archivo_video' in request.FILES:
            publicacion.archivo_video = request.FILES['archivo_video']

        publicacion.titulo = titulo
        publicacion.tipo = tipo
        publicacion.contenido = contenido
        publicacion.url_video = url_video
        publicacion.etiqueta = etiqueta

        try:
            publicacion.full_clean()
            publicacion.save()
        except ValidationError as e:
            return JsonResponse({'errors': e.message_dict}, status=400)
        
    elif request.method == 'DELETE':
        publicacion.delete()
        return JsonResponse({'message':'Publicación eliminada'})
    
    else:
        return HttpResponseNotAllowed(['PUT','DELETE'])