from django.shortcuts import render
import json
from django.http import JsonResponse, Http404
from .models import Obra, Categoria
from django_back.utils import jwt_required, get_user_from_token

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
from django.views.decorators.csrf import csrf_exempt

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
@csrf_exempt
def listado_obras(request):
    if request.method == 'GET':
        data = []
        obras = Obra.objects.all()

        for obra in obras:
            data.append({
                'nombre':obra.nombre,
                'imagen':obra.imagen.url
            })

        return JsonResponse(data,safe=False)


def listado_obras_por_tema(request, categoria_slug):
    try:
        categoria = Categoria.objects.get(slug=categoria_slug)
    except Categoria.DoesNotExist:
        raise Http404("Categoria no encontrada")

    obras = Obra.objects.filter(categoria=categoria)
    data = [
        {
            'imagen': obra.imagen.url,
            'nombre': obra.nombre,
            'slug': obra.slug,
            'descripción': obra.descripción,
            'tecnica': obra.tecnica,
            'dimensiones': obra.dimensiones,
            'creado_en': obra.creado_en,
            'categoria': categoria.nombre,
            'categoria_slug': categoria.slug
        }
        for obra in obras
    ]
    return JsonResponse(data, safe=False)

def primeras_obras_por_categoria(request):
    if request.method == 'GET':
        data = []
        categorias = Categoria.objects.all()

        for categoria in categorias:
            primera_obra = categoria.obras.order_by('creado_en').first()
            if primera_obra:
                data.append({
                    'categoria': categoria.nombre,
                    'categoria_slug': categoria.slug,
                    'obra_nombre': primera_obra.nombre,
                    'obra_slug': primera_obra.slug,
                    'imagen': primera_obra.imagen.url
                })
        return JsonResponse(data, safe=False)

@csrf_exempt
@jwt_required
def crear_obra(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        descripción = request.POST.get('descripcion')
        tecnica = request.POST.get('tecnica')
        dimensiones = request.POST.get('dimensiones')
        imagen = request.FILES.get('imagen')
        categoria_nombre = request.POST.get('categoria')
        creado_en = request.POST.get('creado_en')

        try:
            categoria = Categoria.objects.get(nombre=categoria_nombre)
        except Categoria.DoesNotExist:
            categoria = Categoria.objects.create(nombre=categoria_nombre)

        nueva_obra = Obra.objects.create(
            nombre=nombre,
            descripción=descripción,
            tecnica=tecnica,
            dimensiones=dimensiones,
            imagen=imagen,
            categoria=categoria,
            creado_en=creado_en
        )

        return JsonResponse({
            'message':'Obra creada',
            'obra_id':nueva_obra.id
        }, status=201)