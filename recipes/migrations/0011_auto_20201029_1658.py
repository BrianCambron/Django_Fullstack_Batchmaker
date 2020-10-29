# Generated by Django 3.1.2 on 2020-10-29 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0010_auto_20201028_2028'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='recipes/'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='category',
            field=models.CharField(choices=[('DSSRT', 'Dessert'), ('LNCH', 'Lunch'), ('DNR', 'Dinner'), ('BKFT', 'Breakfast')], default='DSSRT', max_length=255),
        ),
    ]
