from django.urls import path

urlpatterns = [
    path('', JokeView.as_view()),
    path('<int:pk>/', SingleJokeView.as_view()),
    path('search/', SearchJokeView.as_view()),
    path('random/', RandomJokeView.as_view()),
    ]
