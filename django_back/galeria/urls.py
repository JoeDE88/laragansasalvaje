from django.urls import path

from .views import listado_obras, listado_obras_por_tema, crear_obra, primeras_obras_por_categoria,verificar_storage

urlpatterns = [
    path("obras/", listado_obras, name='listado_obras'),
    path("<slug:categoria_slug>", listado_obras_por_tema, name='obras_por_tema'),
    path("nueva/", crear_obra,name='crear_obra'),
    path("primeras/", primeras_obras_por_categoria,name='primeras_obras'),
    path("verificar-storage/", verificar_storage),

]