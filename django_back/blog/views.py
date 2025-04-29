#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Articulo, Comentario

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#from django.views.decorators.csrf import csrf_exempt

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#@csrf_exempt
def articulos_list(request):
    if request.method == 'GET':
        articulos = Articulo.objects.all()
        data = []

        for articulo in articulos:
            comentarios = Comentario.objects.filter(articulo=articulo)

            data.append({
                'id': articulo.id,
                'titulo': articulo.titulo,
                'contenido': articulo.contenido,
                'imagen_destacada': articulo.imagen_destacada.url if articulo.imagen_destacada else None,
                'etiqueta': articulo.etiqueta,
                'creado_en': articulo.creado_en,
                'slug': articulo.slug,
                'comentarios': [
                    {
                        'id': comentario.id,
                        'autor': comentario.autor,
                        'contenido': comentario.contenido,
                        'creado_en': comentario.creado_en,
                    } for comentario in comentarios
                ]
            })

        return JsonResponse(data, safe=False)

    elif request.method == 'POST':
        titulo = request.POST.get('titulo')
        contenido = request.POST.get('contenido')
        imagen_destacada = request.FILES.get('imagen_destacada')
        etiqueta = request.POST.get('etiqueta')

        nuevo_articulo = Articulo.objects.create(
            titulo=titulo,
            contenido=contenido,
            imagen_destacada=imagen_destacada,
            etiqueta=etiqueta
        )

        return JsonResponse({
            "message": "Artículo creado",
            "articulo_id": nuevo_articulo.id
        }, status=201)


def detalle_articulo(request, slug):
    try:
        articulo = Articulo.objects.get(slug=slug)
        data = {
            'id' : articulo.id,
            'titulo' : articulo.titulo,
            'contenido' : articulo.contenido,
            'imagen_destacada' : articulo.imagen_destacada.url if articulo.imagen_destacada else None,
            'etiqueta' : articulo.etiqueta,
            'creado_en' : articulo.creado_en
        }
        return JsonResponse(data)
    except Articulo.DoesNotExist:
        return JsonResponse({'error':'Articulo no encontrando'}, status=404)