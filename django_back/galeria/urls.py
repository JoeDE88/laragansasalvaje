from django.urls import path

from .views import listado_obras_por_tema, crear_obra,obras_completas

urlpatterns = [
    path("<slug:categoria_slug>", listado_obras_por_tema, name='obras_por_tema'),
    path("nueva/", crear_obra,name='crear_obra'),
    path("todas/", obras_completas,name='obras')
]