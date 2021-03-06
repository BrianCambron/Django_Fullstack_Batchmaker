# Generated by Django 3.1.2 on 2020-10-26 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0004_auto_20201026_1712'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='amount',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='cook_temp',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='cook_time',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='item',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='prep_time',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='temperature',
            field=models.CharField(choices=[('F', 'Fahrenheit'), ('C', 'Celcius')], default='F', max_length=255),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='category',
            field=models.CharField(choices=[('LNCH', 'Lunch'), ('DSSRT', 'Dessert'), ('DNR', 'Dinner'), ('BKFT', 'Breakfast')], default='DSSRT', max_length=255),
        ),
    ]
