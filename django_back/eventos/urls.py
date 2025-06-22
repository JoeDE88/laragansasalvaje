from django.urls import path
from .views import eventos_list, create_event,manage_event

urlpatterns = [
    path("lista-eventos/", eventos_list, name='eventos_list'),
    path('nuevo-evento/', create_event, name='new_event'),
    path('evento/<int:evento_id>',manage_event,name='manage_event')
]