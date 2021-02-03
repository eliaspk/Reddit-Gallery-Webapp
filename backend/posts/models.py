from django.db import models
from subreddits.models import Subreddit

class Post(models.Model):
  title = models.CharField(max_length=200)
  author = models.CharField(max_length=20)
  subreddit = models.ForeignKey(Subreddit, on_delete=models.DO_NOTHING)
  url = models.CharField(max_length=500, unique=True)
  upvote_ratio = models.FloatField()
  score = models.IntegerField()
  slug = models.CharField(max_length=200, unique=True)
  created_utc = models.DateTimeField()
