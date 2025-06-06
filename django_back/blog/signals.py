import cloudinary.uploader
from django.db.models.signals import post_delete
from django.dispatch import receiver
from cloudinary.models import CloudinaryField
import cloudinary

from .models import Publicacion

@receiver(post_delete,sender=Publicacion)
def eliminar_imagen_cloudinary(sender,instance, **kwargs):
    try:
        if instance.imagen_destacada:
            public_id = instance.imagen_destacada.public_id
            if public_id:
                cloudinary.uploader.destroy(public_id)
    except Exception as e:
        print(f'Error al eliminar imagen de Cloudinary: {e}')