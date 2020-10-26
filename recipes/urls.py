from django.urls import path

from .views import RecipeListCreateView, RecipeRetrieveUpdateDestroyView


urlpatterns = [
    path('<int:pk>/', RecipeRetrieveUpdateDestroyView.as_view()),
    path('', RecipeListCreateView.as_view()),
]
