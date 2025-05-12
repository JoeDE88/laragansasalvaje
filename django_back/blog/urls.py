from django.urls import path

from .views import lista_publicaciones, detalle_pub

urlpatterns = [
    path("publicaciones/", lista_publicaciones, name='lista_publicaciones'),
    path('publicaciones/<slug:slug>', detalle_pub, name='detalle_pub'),
]