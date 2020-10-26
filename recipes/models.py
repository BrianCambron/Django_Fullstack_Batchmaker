from django.conf import settings
from django.db import models




class Recipe(models.Model):
    BREAKFAST = 'BKFT'
    LUNCH = 'LNCH'
    DINNER = 'DNR'
    DESSERT = 'DSSRT'

    CATEGORY_CHOICES = {
        (BREAKFAST, 'Breakfast'),
        (LUNCH, 'Lunch'),
        (DINNER, 'Dinner'),
        (DESSERT, 'Dessert'),
    }

    name = models.CharField(max_length = 255)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    ingredients = models.TextField()
    instructions = models.TextField()
    notes = models.TextField(blank=True)
    isPublic = models.BooleanField(default = False)
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES, default=DESSERT,)

    def __str__(self):
        return self.name
