from django.contrib import admin
from joke.models import Joke


# Register your models here.
@admin.register(Joke)
class JokeAdmin(admin.ModelAdmin):
    list_display = ('id', 'question', 'punchline', 'author', 'likes', 'created_at', 'updated_at')
