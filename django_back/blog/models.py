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
    archivo_video = CloudinaryField('video',blank=True,null=True)

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
            if not self.url_video and not self.archivo_video:
                raise ValidationError("Para contenido de tipo 'video', debes subir un archivo o indicar una URL")
            if self.url_video and self.archivo_video:
                raise ValidationError("No puedes subir un archivo video y una URL de video al mismo tiempo.")