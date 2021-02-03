from django.urls import path
from .views import SubredditListView, SubredditView

urlpatterns = [
  path('', SubredditListView.as_view()),
  path('<pk>', SubredditView.as_view()),
]
