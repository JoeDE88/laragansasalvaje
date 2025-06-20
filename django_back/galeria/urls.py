from django.urls import path

from .views import obras_list, obras_list_por_categoria, create_obra, first_obra_por_categoria

urlpatterns = [
    path("obras/", obras_list, name='listado_obras'),
    path("<slug:categoria_slug>", obras_list_por_categoria, name='obras_por_tema'),
    path("primeras/", first_obra_por_categoria,name='primeras_obras'),
    path("nueva/", create_obra,name='crear_obra')
]