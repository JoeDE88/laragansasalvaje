from django.urls import path

from .views import productos_list, detalles_producto_slug,create_product,manage_producto, detalles_producto_id

urlpatterns = [
    path("lista-productos/", productos_list, name='productos_list'),
    path("detalles-producto-slug/<slug:slug>", detalles_producto_slug, name='detalle_producto_slug'),
    path("detalles-producto-id/<int:prod_id>", detalles_producto_id, name="detalles_producto_id" ),
    path("nuevo-producto/", create_product,name='crear_producto'),
    path("producto/<int:prod_id>",manage_producto,name='manage_producto'),
]