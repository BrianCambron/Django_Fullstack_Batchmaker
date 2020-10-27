from django.conf import settings
from django.db import models




class Recipe(models.Model):
    BREAKFAST = 'BKFT'
    LUNCH = 'LNCH'
    DINNER = 'DNR'
    DESSERT = 'DSSRT'

    FAHRENHEIT = 'F'
    CELCIUS = 'C'

    CATEGORY_CHOICES = {
        (BREAKFAST, 'Breakfast'),
        (LUNCH, 'Lunch'),
        (DINNER, 'Dinner'),
        (DESSERT, 'Dessert'),
    }
    TEMP_SCALE = {
        (FAHRENHEIT, 'Fahrenheit'),
        (CELCIUS, 'Celcius'),
    }

    name = models.CharField(max_length = 255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ingredients = models.TextField()
    instructions = models.TextField()
    notes = models.TextField(blank=True)
    isPublic = models.BooleanField(default = False)
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES, default=DESSERT,)
    amount = models.IntegerField(null=True)
    prep_time = models.IntegerField(null=True)
    cook_time = models.IntegerField(null=True)
    cook_temp = models.IntegerField(null=True)
    temperature = models.CharField(max_length=255, choices=TEMP_SCALE, default=FAHRENHEIT,)

    def __str__(self):
        return self.name
