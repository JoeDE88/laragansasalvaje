# Generated by Django 5.2 on 2025-06-13 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_publicacion_archivo_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicacion',
            name='tipo',
            field=models.CharField(choices=[('articulo', 'Articulo'), ('video', 'Video')], default='articulo', max_length=10),
        ),
    ]
