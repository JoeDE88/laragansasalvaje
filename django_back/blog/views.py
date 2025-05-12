#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from .models import Publicacion

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#from django.views.decorators.csrf import csrf_exempt

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#@csrf_exempt
def lista_publicaciones(request):
    if request.method == 'GET':
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

    elif request.method == 'POST':
        if request.content_type.startswith('multipart/form-data'):
            return HttpResponseBadRequest("Debe ser una solicitud multipart/form-data")
        
        titulo = request.POST.get('titulo')
        tipo = request.POST.get('tipo','articulo')
        contenido = request.POST.get('contenido')
        url_video = request.POST.get('url_video')
        imagen_destacada = request.FILES.get('imagen_destacada')
        etiqueta = request.POST.get('etiqueta')
        archivo_video = request.POST.get('archivo_video')

        nueva_pub = Publicacion.objects.create(
            titulo=titulo,
            tipo=tipo,
            contenido=contenido,
            url_video=url_video,
            imagen_destacada=imagen_destacada,
            etiqueta=etiqueta,
            archivo_video=archivo_video
        )

        return JsonResponse({
            "message": "Publicación creada",
            "pub_id": nueva_pub.id
        }, status=201)

def detalle_pub(request, slug):
    try:
        pub = Publicacion.objects.get(slug=slug)
        data = {
            'id' : pub.id,
            'titulo' : pub.titulo,
            'contenido' : pub.contenido,
            'imagen_destacada' : pub.imagen_destacada.url if pub.imagen_destacada else None,
            'etiqueta' : pub.etiqueta,
            'creado_en' : pub.creado_en
        }
        return JsonResponse(data)
    except pub.DoesNotExist:
        return JsonResponse({'error':'pub no encontrando'}, status=404)