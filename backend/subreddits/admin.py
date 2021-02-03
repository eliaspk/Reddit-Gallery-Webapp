from django.contrib import admin
from .models import Subreddit

class SubredditAdmin(admin.ModelAdmin):
  list_display = ('id', 'display_name', 'title', 'subscribers', 'last_updated')
  list_display_links = ('id', 'display_name')
  search_fields = ('display_name',)
  list_per_page = 25

admin.site.register(Subreddit, SubredditAdmin)
