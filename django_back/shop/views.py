#from django.shortcuts import render
import json
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Producto

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#from django.views.decorators.csrf import csrf_exempt

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#@csrf_exempt
def productos_list(request):
    if request.method == 'GET':
        productos = Producto.objects.all().values()
        return JsonResponse(list(productos), safe=False)

    elif request.method == 'POST':
        nombre = request.POST.get('nombre')
        descripción = request.POST.get('descripción')
        precio = request.POST.get('precio')
        stock = request.POST.get('stock')
        imagen = request.FILES.get('imagen')

        nuevo_producto = Producto.objects.create(
            nombre=nombre,
            descripción=descripción,
            precio=precio,
            stock=stock,
            imagen=imagen
        )

    return JsonResponse({
        'message':'Producto creado',
        'producto_id':nuevo_producto.id
    }, status=201)

def detalle_producto(request, slug):
    try:
        producto = Producto.objects.get(slug=slug)
        data = {
            'nombre': producto.nombre,
            'descripción': producto.descripción,
            'precio': str(producto.precio),
            'stock': producto.stock,
            'imagen': producto.imagen.url if producto.imagen else None,
        }
        return JsonResponse(data)
    except Producto.DoesNotExist:
        return JsonResponse({'error':'Producto no encontrando'}, status=404)