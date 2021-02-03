from django.contrib.auth import get_user_model
from django.db import models
from posts.models import Post

User = get_user_model()

class Profile(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  favorites = models.ManyToManyField(Post, related_name='favorites')

class Collection(models.Model):
  title = models.CharField(max_length=25)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  posts = models.ManyToManyField(Post)