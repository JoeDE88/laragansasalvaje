from django.urls import path
from .views import login_view,create_superuser

urlpatterns = [
     path('create-superuser/', create_superuser),
    path('login/', login_view, name='login')
]