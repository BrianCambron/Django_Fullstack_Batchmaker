# Generated by Django 3.1.2 on 2020-10-26 17:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_auto_20201026_1700'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='notes',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='category',
            field=models.CharField(choices=[('BKFT', 'Breakfast'), ('DSSRT', 'Dessert'), ('DNR', 'Dinner'), ('LNCH', 'Lunch')], default='DSSRT', max_length=255),
        ),
    ]
