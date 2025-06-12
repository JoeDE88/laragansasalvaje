#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Producto
from django.views.decorators.csrf import csrf_exempt
from django_back.utils import jwt_required
from django.views.decorators.http import require_GET, require_POST

@require_GET
def productos_list(request):
    productos = Producto.objects.all()
    data = []

    for producto in productos:
        data.append({
            'id': producto.id,
            'nombre': producto.nombre,
            'precio': producto.precio,
            'imagen': producto.imagen.url if producto.imagen else None,
            'slug': producto.slug
        })

    return JsonResponse(data, safe=False)

@csrf_exempt
@require_POST
@jwt_required
def create_product(request):
    nombre = request.POST.get('nombre')
    descripcion = request.POST.get('descripcion')
    precio = request.POST.get('precio')
    stock = request.POST.get('stock')
    imagen = request.FILES.get('imagen')

    nuevo_producto = Producto.objects.create(
        nombre=nombre,
        descripcion=descripcion,
        precio=precio,
        stock=stock,
        imagen=imagen
    )

    return JsonResponse({
        'message':'Producto creado',
        'producto_id':nuevo_producto.id
    }, status=201)

@require_GET
def detalle_producto(request, slug):
    try:
        producto = Producto.objects.get(slug=slug)
        data = {
            'id': producto.id,
            'nombre': producto.nombre,
            'descripcion': producto.descripcion,
            'precio': str(producto.precio),
            'stock': producto.stock,
            'imagen': producto.imagen.url if producto.imagen else None,
        }
        return JsonResponse(data)
    except Producto.DoesNotExist:
        return JsonResponse({'error':'Producto no encontrando'}, status=404)