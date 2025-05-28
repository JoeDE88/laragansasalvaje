from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin
from .models import Perfil

# Register your models here.

class ReadOnlyUserAdmin(DefaultUserAdmin):
    add_fieldsets = DefaultUserAdmin.add_fieldsets

    def has_add_permission(self, request):
        return request.user.is_superuser
    
    def has_change_permission(self, request, obj = None):
        return request.user.is_superuser
    
    def has_delete_permission(self, request, obj = None):
        return False
    

admin.site.unregister(User)
admin.site.register(User,ReadOnlyUserAdmin)

class ReadOnlyPerfilAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return request.user.is_superuser

    def has_change_permission(self, request, obj=None):
        return request.user.is_superuser

    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Perfil, ReadOnlyPerfilAdmin)