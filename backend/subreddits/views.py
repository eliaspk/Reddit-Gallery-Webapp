from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Subreddit
from .serializers import SubredditSerializer

class SubredditListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Subreddit.objects.all()
  serializer_class = SubredditSerializer
  pagination_class = None

class SubredditView(RetrieveAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Subreddit.objects.all()
  serializer_class = SubredditSerializer

