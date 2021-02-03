from django.contrib import admin
from .models import Profile, Collection

class ProfileAdmin(admin.ModelAdmin):
  list_display = ('user',)
  list_display_links = ('user',)
  list_filter = ('user', )
  search_fields = ('user', )
  list_per_page = 25

class CollectionAdmin(admin.ModelAdmin):
  list_display = ('title', 'user')
  list_display_links = ('title', 'user')
  list_filter = ('title', )
  search_fields = ('title', )
  list_per_page = 25

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Collection, CollectionAdmin)
