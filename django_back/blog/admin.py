from django.contrib import admin
from .models import Publicacion

# Register your models here.
@admin.register(Publicacion)
class PublicacionAdmin(admin.ModelAdmin):
    list_display = ('titulo','tipo','etiqueta','creado_en')
    list_filter = ('tipo','etiqueta','creado_en')
    search_fields = ('titulo','contenido')
    readonly_fields = ('slug','creado_en','actualizado_en')

    fieldsets = (
        (None,{
            'fields':('titulo','slug','tipo','etiqueta','contenido')
        }),
        ('Multimedia', {
            'fields': ('imagen_destacada', 'archivo_video', 'url_video'),
            'description': 'Agrega una imagen, un archivo de video o una URL de YouTube/Instagram.'
        }),
        ('Tiempos', {
            'fields': ('creado_en', 'actualizado_en')
        }),
    )