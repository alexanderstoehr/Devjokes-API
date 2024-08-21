from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView


# Create your views here.

# create a view to list all the jokes
# create a view to post a joke
class ListCreateJokeView(ListCreateAPIView):
    pass


# create a view to delete a joke
# create a view to patch a joke
# create a view to get a single joke
class RetrieveUpdateDestroyJokeView(RetrieveUpdateDestroyAPIView):
    pass


# create a view to search for a joke
class SearchJokeView(ListCreateAPIView):
    pass


# create a view to get a random joke
class RandomJokeView(ListCreateAPIView):
    pass

# deleting is for the author or the superuser only
# post and patch is allowed for authenticated users only
# if not authenticated, one custom response message for post patch (saying that authentication is needed) and one for delete (saying that only the author can delete it)
