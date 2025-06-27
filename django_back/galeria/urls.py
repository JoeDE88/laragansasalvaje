from django.urls import path

from .views import obras_list, obras_list_por_categoria, create_obra, first_obra_por_categoria,manage_obra,detalles_obra_id

urlpatterns = [
    path("lista-obras/", obras_list, name='lista_obras'),
    path("<slug:categoria_slug>", obras_list_por_categoria, name='obras_por_tema'),
    path("primeras-por-categoria/", first_obra_por_categoria,name='primeras_obras_por_categoria'),
    path("nueva-obra/", create_obra,name='crear_obra'),
    path("obra/<int:obra_id>",manage_obra,name='manage_obra'),
    path("detalles-obra-id/<int:obra_id>",detalles_obra_id,name="detalles_obra_id")
]