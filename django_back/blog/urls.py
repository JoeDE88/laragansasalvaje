from django.urls import path

from .views import articulos_list, detalle_articulo

urlpatterns = [
    path("articulos/", articulos_list, name='articulos_list'),
    path('articulos/<slug:slug>', detalle_articulo, name='detalle_articulo'),
]