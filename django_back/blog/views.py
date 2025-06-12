#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from django.core.exceptions import ValidationError
from .models import Publicacion
from django_back.utils import jwt_required
from django.views.decorators.http import require_GET, require_POST
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
            'archivo_video': pub.archivo_video.url if pub.archivo_video else None,
            'url_video': pub.url_video,
            'etiqueta': pub.etiqueta,
            'creado_en': pub.creado_en,
            'tipo':pub.tipo
        })
        
    return JsonResponse(data, safe=False)

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
    archivo_video = request.FILES.get('archivo_video')

    nueva_pub = Publicacion(
        titulo=titulo,
        tipo=tipo,
        contenido=contenido,
        url_video=url_video,
        imagen_destacada=imagen_destacada,
        etiqueta=etiqueta,
        archivo_video=archivo_video
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
            'creado_en' : pub.creado_en,
            'archivo_video': pub.archivo_video.url if pub.archivo_video else None
        }
        return JsonResponse(data)
    except pub.DoesNotExist:
        return JsonResponse({'error':'pub no encontrando'}, status=404)