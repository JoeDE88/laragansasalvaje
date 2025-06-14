from django.urls import path

from .views import publicacion_list, detalle_pub,create_publicacion, manage_publicacion

urlpatterns = [
    path("publicaciones/", publicacion_list, name='lista_publicaciones'),
    path('publicaciones/<slug:slug>', detalle_pub, name='detalle_pub'),
    path('nueva/',create_publicacion,name='crear_publicacion'),
    path('publicacion/<int:pub_id>',manage_publicacion,name='manage_publicacion')
]