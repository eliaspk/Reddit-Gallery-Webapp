from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Post
from subreddits.models import Subreddit
from .serializers import PostSerializer, PostDetailSerializer

class PostsView(ListAPIView):
  queryset = Post.objects.order_by('-created_utc')
  serializer_class = PostSerializer
  permission_classes = (permissions.AllowAny, )
  lookup_field = 'slug'

class PostView(RetrieveAPIView):
  queryset = Post.objects.order_by('-created_utc')
  serializer_class = PostDetailSerializer
  permission_classes = (permissions.AllowAny, )
  lookup_field = 'slug'

class SearchView(APIView):
  permission_classes = (permissions.AllowAny, )
  serializer_class = PostSerializer

  def post(self, request, format=None):
    queryset = Post.objects.order_by('-created_utc')
    
    data = self.request.data  # Retrieve data from the forms
    subreddit = data['subreddit']
    queryset = queryset.filter(subreddit__display_name__iexact=subreddit)

    serializer = PostSerializer(queryset, many=True)
    return Response(serializer.data)
