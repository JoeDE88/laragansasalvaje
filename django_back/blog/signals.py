import cloudinary.uploader
from django.db.models.signals import post_delete
from django.dispatch import receiver
from cloudinary.models import CloudinaryField
import cloudinary
from cloudinary.uploader import destroy

from .models import Publicacion

@receiver(post_delete,sender=Publicacion)
def eliminar_file_cloudinary(sender,instance, **kwargs):
    if instance.imagen_destacada:
        destroy(instance.imagen_destacada.public_id)

    if instance.tipo == 'video' and instance.url_video and 'res.cloudinary.com' in instance.url_video:
        from urllib.parse import urlparse
        path = urlparse(instance.url_video).path
        path_parts = path.split('/')
        if 'upload' in path_parts:
            index = path_parts.index('upload')
            public_id_with_ext = '/'.join(path_parts[index+2:])
            public_id = '.'.join(public_id_with_ext.split('.')[:-1])
            destroy(public_id, resource_type='video')