from django.db import models
from django.utils.text import slugify
from django_back.utils import resize_image
from cloudinary.models import CloudinaryField

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    descripcion = models.TextField(blank=True)
    precio = models.DecimalField(max_digits=10,decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    imagen = imagen = CloudinaryField('image', blank=True, null=True)
    activo = models.BooleanField(default=True)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['creado_en']

    def __str__(self):
        return self.nombre

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.nombre)
            slug = base_slug
            contador = 1
            while Producto.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{contador}"
                contador += 1
            self.slug = slug
        super().save(*args, **kwargs)

        if hasattr(self.imagen, 'path'):
            resize_image(self.imagen.path)

    