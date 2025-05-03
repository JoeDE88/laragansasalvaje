from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify
from django_back.utils import resize_image


# Create your models here.
class Articulo(models.Model):
    titulo = models.CharField(max_length=75)
    slug = models.SlugField(unique=True, blank=True)
    contenido = models.TextField()
    imagen_destacada = models.ImageField(upload_to='blog/',blank=True,null=True)
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
            while Articulo.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{contador}"
                contador += 1
            self.slug = slug
        super().save(*args, **kwargs)

        if self.imagen_destacada:
            resize_image(self.imagen_destacada.path)

class Comentario(models.Model):
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE,related_name='comentarios')
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    contenido = models.TextField()
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.autor.username} - {self.articulo.titulo}'