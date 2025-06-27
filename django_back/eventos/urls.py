from django.urls import path
from .views import eventos_list, create_event,manage_event,detalles_evento_id

urlpatterns = [
    path("lista-eventos/", eventos_list, name='eventos_list'),
    path('nuevo-evento/', create_event, name='crear_evento'),
    path('evento/<int:evento_id>',manage_event,name='manage_event'),
    path('detalles-evento-id/<int:evento_id>', detalles_evento_id,name='detalles_evento_id')
]