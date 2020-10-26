# Generated by Django 3.1.2 on 2020-10-26 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0005_auto_20201026_2108'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='item',
        ),
        migrations.AlterField(
            model_name='recipe',
            name='category',
            field=models.CharField(choices=[('DNR', 'Dinner'), ('LNCH', 'Lunch'), ('BKFT', 'Breakfast'), ('DSSRT', 'Dessert')], default='DSSRT', max_length=255),
        ),
    ]
