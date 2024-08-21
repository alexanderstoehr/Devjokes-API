from django.db.models import Q
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView

from joke.models import Joke
from joke.serializers import JokeSerializer


# Create your views here.

# create a view to list all the jokes
# create a view to post a joke
class ListCreateJokeView(ListCreateAPIView):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer


# create a view to delete a joke
# create a view to patch a joke
# create a view to get a single joke
class RetrieveUpdateDestroyJokeView(RetrieveUpdateDestroyAPIView):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer


# create a view to search for a joke
class SearchJokeView(ListAPIView):
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer

    def get_queryset(self, *args, **kwargs):
        search_term = self.kwargs['search_term']
        return Joke.objects.filter(Q(punchline__icontains=search_term) | Q(question__icontains=search_term))  # icontains is case insensitive


# create a view to get a random joke
class RandomJokeView(ListCreateAPIView):
    pass

# deleting is for the author or the superuser only
# post and patch is allowed for authenticated users only
# if not authenticated, one custom response message for post patch (saying that authentication is needed) and one for delete (saying that only the author can delete it)
