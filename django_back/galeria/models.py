from django.db import models
from django.utils.text import slugify
from django.core.validators import MinValueValidator, MaxValueValidator
from datetime import datetime
from cloudinary.models import CloudinaryField

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    slug = models.SlugField(unique=True,blank=True)

    def __str__(self):
        return self.nombre
    
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.nombre)
            slug = base_slug
            contador = 1
            while Categoria.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{contador}"
                contador += 1
            self.slug = slug
        super().save(*args, **kwargs)

class Obra(models.Model):
    nombre = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True)
    descripción = models.TextField(blank=True)
    tecnica = models.CharField(max_length=100)
    dimensiones = models.CharField(max_length=50)
    imagen = CloudinaryField('image')
    creado_en = models.PositiveIntegerField(
        validators=[
            MinValueValidator(1900),
            MaxValueValidator(datetime.now().year)],
            help_text="Utiliza este formato: YYYY"
    )
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE,related_name='obras',null=True)

    class Meta:
        ordering = ['creado_en']

    def __str__(self):
        return self.nombre
    
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.nombre)
            slug = base_slug
            contador = 1
            while Obra.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{contador}"
                contador += 1
            self.slug = slug
        super().save(*args, **kwargs)

