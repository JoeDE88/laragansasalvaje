from django.urls import path

from .views import listado_obras_por_tema, crear_obra, primeras_obras_por_categoria

urlpatterns = [
    path("<slug:categoria_slug>", listado_obras_por_tema, name='obras_por_tema'),
    path("nueva/", crear_obra,name='crear_obra'),
    path("primeras/", primeras_obras_por_categoria,name='primeras_obras')
]