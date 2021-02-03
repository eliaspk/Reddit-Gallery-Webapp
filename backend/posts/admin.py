from django.contrib import admin
from .models import Post

class PostAdmin(admin.ModelAdmin):
  list_display = ('id', 'title', 'author', 'subreddit', 'url', 'created_utc')
  list_display_links = ('id', 'title')
  list_filter = ('subreddit', )
  search_fields = ('title', 'author', 'subreddit')
  list_per_page = 25

admin.site.register(Post, PostAdmin)