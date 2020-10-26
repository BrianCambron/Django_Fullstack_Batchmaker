from rest_framework import serializers


from .models import Recipe



class RecipeSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Recipe
        fields = ('id', 'name', 'instructions', 'user', 'isPublic', 'category', 'ingredients', 'notes')
