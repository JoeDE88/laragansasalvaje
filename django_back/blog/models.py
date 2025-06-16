from django.db import models
from django.utils.text import slugify
from django_back.utils import resize_image
from django.core.validators import FileExtensionValidator
from django.core.exceptions import ValidationError
from cloudinary.models import CloudinaryField

# Create your models here.
class Publicacion(models.Model):
    TIPOS_CONTENIDO = [
        ('articulo','Articulo'),
        ('video','Video')
    ]

    titulo = models.CharField(max_length=75)
    slug = models.SlugField(unique=True, blank=True)
    tipo = models.CharField(max_length=10,choices=TIPOS_CONTENIDO,default='articulo')
    contenido = models.TextField(blank=True,null=True)
    imagen_destacada = CloudinaryField('image', blank=True, null=True)
    url_video = models.URLField(blank=True, null=True)
    etiqueta = models.CharField(max_length=20)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['creado_en']

    def __str__(self):
        return self.titulo

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.titulo)
            slug = base_slug
            contador = 1
            while Publicacion.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{contador}"
                contador += 1
            self.slug = slug
        super().save(*args, **kwargs)

        if hasattr(self.imagen_destacada, 'path'):
            resize_image(self.imagen_destacada.path)

    def clean(self):
        if self.tipo == 'video':
            if not self.url_video:
                raise ValidationError({
                    'url_video': "Debes proporcionar la URL del video subido a Cloudinary o una URL de YouTube."
                })
        if self.tipo == 'articulo':
            if not self.contenido and not self.imagen_destacada:
                raise ValidationError({
                    'contenido': "El artículo debe tener contenido o al menos una imagen destacada.",
                    'imagen_destacada': "El artículo debe tener contenido o al menos una imagen destacada."
                })