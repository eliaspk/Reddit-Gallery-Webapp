from django.db import models
from datetime import datetime

class Subreddit(models.Model):
  display_name = models.CharField(max_length=21)
  title = models.CharField(max_length=140)
  subscribers = models.IntegerField()
  last_updated = models.DateTimeField(default=datetime.now, blank=False)

  def __str__(self):
    return self.display_name

