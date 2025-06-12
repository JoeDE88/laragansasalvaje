from django.shortcuts import render
import json
from django.http import JsonResponse, Http404
from .models import Obra, Categoria
from django_back.utils import jwt_required
from django.views.decorators.http import require_GET, require_POST
from django.views.decorators.csrf import csrf_exempt

# @csrf_exempt
@require_GET
def obras_list(request):
    obras = Obra.objects.all()
    data = []

    for obra in obras:
        data.append({
            'nombre':obra.nombre,
            'imagen':obra.imagen.url
        })

    return JsonResponse(data,safe=False)

@require_GET
def obras_list_por_categoria(request, categoria_slug):
    try:
        categoria = Categoria.objects.get(slug=categoria_slug)
    except Categoria.DoesNotExist:
        raise Http404("Categoria no encontrada")

    obras = Obra.objects.filter(categoria=categoria)
    data = []
    for obra in obras:
        data.append({
                'nombre': obra.nombre,
                'slug': obra.slug,
                'descripcion': obra.descripcion,
                'tecnica': obra.tecnica,
                'dimensiones': obra.dimensiones,
                'imagen': obra.imagen.url,
                'creado_en': obra.creado_en,
                'categoria': categoria.nombre,
                'categoria_slug': categoria.slug
            })

    return JsonResponse(data, safe=False)

@require_GET
def first_obra_por_categoria(request):
    categorias = Categoria.objects.all()
    data = []

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
@require_POST
@jwt_required
def create_obra(request):
    nombre = request.POST.get('nombre')
    descripcion = request.POST.get('descripcion')
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
        descripcion=descripcion,
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