import cloudinary.uploader
from django.db.models.signals import post_delete
from django.dispatch import receiver
from cloudinary.models import CloudinaryField
import cloudinary

from .models import Obra

@receiver(post_delete,sender=Obra)
def eliminar_imagen_cloudinary(sender,instance, **kwargs):
    if instance.imagen:
        public_id = instance.imagen.public_id
        if public_id:
            cloudinary.uploader.destroy(public_id)