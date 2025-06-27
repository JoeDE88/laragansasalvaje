from django.urls import path

from .views import publicacion_list, detalles_pub_slug,detalles_pub_id,create_publicacion, manage_publicacion

urlpatterns = [
    path("lista-publicaciones/", publicacion_list, name='lista_publicaciones'),
    path('detalles-publicacion-slug/<slug:slug>', detalles_pub_slug, name='detalle_pub_slug'),
    path('detalles-publicacion-id/<int:pub_id>', detalles_pub_id, name='detalle_pub_id'),
    path('nueva-publicacion/',create_publicacion,name='crear_publicacion'),
    path('publicacion/<int:pub_id>',manage_publicacion,name='manage_publicacion')
]