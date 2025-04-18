from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Articulo(models.Model):
    titulo = models.CharField(max_length=75)
    contenido = models.TextField()
    imagen_destacada = models.ImageField(upload_to='blog/',blank=True,null=True)
    etiqueta = models.CharField(max_length=20)
    creado_en = models.DateTimeField(auto_now_add=True)
    actualizado_en = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['creado_en']

        def __str__(self):
            return self.titulo

class Comentario(models.Model):
    articulo = models.ForeignKey(Articulo, on_delete=models.CASCADE,related_name='comentarios')
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    contenido = models.TextField()
    creado_en = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.autor.username} - {self.articulo.titulo}'