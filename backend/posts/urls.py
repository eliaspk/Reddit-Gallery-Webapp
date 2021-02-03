from django.urls import path
from .views import PostView, PostsView, SearchView

urlpatterns = [
    path('', PostsView.as_view()),
    path('search', SearchView.as_view()),
    path('<author>/<slug>', PostView.as_view()),
    
]
