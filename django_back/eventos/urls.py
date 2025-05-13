from django.urls import path
from .views import eventos_list

urlpatterns = [
    path("todos/", eventos_list, name='eventos_list')
]