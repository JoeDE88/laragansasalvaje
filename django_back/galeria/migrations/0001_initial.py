# Generated by Django 5.2 on 2025-05-28 18:36

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Obra',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('descripción', models.TextField(blank=True)),
                ('tecnica', models.CharField(max_length=100)),
                ('dimensiones', models.CharField(max_length=50)),
                ('imagen', models.ImageField(upload_to='galeria/')),
                ('creado_en', models.PositiveIntegerField(help_text='Utiliza este formato: YYYY', validators=[django.core.validators.MinValueValidator(1900), django.core.validators.MaxValueValidator(2025)])),
                ('categoria', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='obras', to='galeria.categoria')),
            ],
            options={
                'ordering': ['creado_en'],
            },
        ),
    ]
