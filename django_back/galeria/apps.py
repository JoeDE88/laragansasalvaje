from django.apps import AppConfig


class GaleriaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'galeria'

    def ready(self):
        import galeria.signals