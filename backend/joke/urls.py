from django.urls import path

from joke.views import ListCreateJokeView, SearchJokeView, RetrieveUpdateDestroyJokeView, RandomJokeView

urlpatterns = [
    path('', ListCreateJokeView.as_view()),
    path('<int:pk>/', RetrieveUpdateDestroyJokeView.as_view()),
    path('search/', SearchJokeView.as_view()),
    path('random/', RandomJokeView.as_view()),
    ]
