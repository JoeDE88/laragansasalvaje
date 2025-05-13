from django.shortcuts import render
import json
from django.http import JsonResponse
from .models import Evento

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#from django.views.decorators.csrf import csrf_exempt

#descomenta la siguiente linea si quieres hacer POST DE PRUEBA DESDE POSTMAN
#@csrf_exempt
def eventos_list(request):
    if request.method == 'GET':
        eventos = Evento.objects.all()
        data = []

        for evento in eventos:
            data.append({
                'id': evento.id,
                'nombre': evento.nombre,
                'descripcion': evento.descripcion,
                'imagen': evento.imagen.url,
                'creado_en': evento.creado_en,
                'slug': evento.slug
            })
            
        return JsonResponse(data, safe=False)