from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Joke(models.Model):
    question = models.CharField(max_length=1000, null=True, blank=True)
    punchline = models.CharField(max_length=1000)
    author = models.ForeignKey(to=User, related_name='jokes', on_delete=models.CASCADE, default=4)
    likes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # def __str__(self):
    #     return f"{self.question} - {self.punchline} by {self.author}"
