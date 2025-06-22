from django.urls import path

from .views import productos_list, detalle_producto,create_product,manage_producto

urlpatterns = [
    path("productos/", productos_list, name='productos_list'),
    path("productos/<slug:slug>", detalle_producto,name='detalle_producto'),
    path("nuevo/", create_product,name='crear_producto'),
    path("producto/<int:prod_id>",manage_producto,name='manage_producto')
]