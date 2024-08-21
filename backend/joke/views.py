from django.db.models import Q
from django.shortcuts import render
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.response import Response

from joke.models import Joke
from joke.serializers import JokeSerializer, CreateJokeSerializer


# Create your views here.

# view to list all the jokes
# view to post a joke
class ListCreateJokeView(ListCreateAPIView):
    '''
    get:
    Get a list of all jokes.

    post:
    Post a new joke.
    '''
    queryset = Joke.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return CreateJokeSerializer
        return JokeSerializer


# view to delete a joke
# view to patch a joke
# view to get a single joke
class RetrieveUpdateDestroyJokeView(RetrieveUpdateDestroyAPIView):
    '''
    get:
    Get a single joke.

    put:
    Update a single joke with all fields.

    patch:
    Update a single joke with partial fields.

    delete:
    Delete a single joke.
    '''
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer


# view to search for a joke
class SearchJokeView(ListAPIView):
    '''
    get:
    Search for a string in punchline and question fields.
    '''
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer

    def get_queryset(self, *args, **kwargs):
        search_term = self.kwargs['search_term']
        return Joke.objects.filter(Q(punchline__icontains=search_term) | Q(question__icontains=search_term))  # icontains is case insensitive

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response({"message": "Your search does not return any jokes. Sorry."}, status=status.HTTP_204_NO_CONTENT)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


# view to get a random joke
class RandomJokeView(RetrieveAPIView):
    '''
    get:
    Get a random joke.
    '''

    # get queryset length, get a random number, get the joke with that number
    queryset = Joke.objects.all()
    serializer_class = JokeSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        if not queryset.exists():
            return Response({"message": "Currently there are no jokes available."}, status=status.HTTP_204_NO_CONTENT)
        import random
        random_number = random.randint(0, queryset.count() - 1)
        joke = queryset[random_number]
        serializer = self.get_serializer(joke)
        return Response(serializer.data)

# todo: Version2
#   deleting is for the author or the superuser only
#   post and patch is allowed for authenticated users only
#   if not authenticated, one custom response message for post patch (saying that authentication is needed) and one for delete (saying that only the author can delete it)
