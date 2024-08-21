from rest_framework import serializers

from joke.models import Joke
from user.serializers import UserSerializer


class JokeSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['author'] = UserSerializer(instance.author).data
        return representation

    class Meta:
        model = Joke
        fields = '__all__'
        read_only_fields = ['likes']


class CreateJokeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Joke
        fields = ['question', 'punchline']
