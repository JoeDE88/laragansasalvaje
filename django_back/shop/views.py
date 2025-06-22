#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from django.core.exceptions import ValidationError
from .models import Producto
from django.views.decorators.csrf import csrf_exempt
from django_back.utils import jwt_required
from django.views.decorators.http import require_GET, require_POST, require_http_methods

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
    

@csrf_exempt
@require_http_methods(['PUT','DELETE'])
@jwt_required
def manage_producto(request,prod_id):
    try:
        producto = Producto.objects.get(id=prod_id)
    except Producto.DoesNotExist:
        return JsonResponse({"error":"Producto no encontrado"},status=404)
    
    if request.method == 'PUT':
        if not request.content_type.startswith('multipart/form-data'):
            return JsonResponse({"error":"Debe ser multipart/form-data"},status=400)
        
        nombre = request.POST.get("nombre",producto.nombre)
        descripcion = request.POST.get("descripcion",producto.descripcion)
        precio = request.POST.get("precio",producto.precio)
        stock = request.POST.get("stock",producto.stock)
        
        if 'imagen' in request.FILES:
            producto.imagen = request.FILES['imagen']

        producto.nombre = nombre
        producto.descripcion = descripcion
        producto.precio = precio
        producto.stock = stock

        try:
            producto.save()
        except ValidationError as e:
            return JsonResponse({'errors': e.message_dict}, status=400)
    
    elif request.method == 'DELETE':
        producto.delete()
        return JsonResponse({'message':'Producto eliminado'},status=200)
    
    else:
        return HttpResponseNotAllowed(['PUT','DELETE'])