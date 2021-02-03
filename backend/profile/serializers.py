from rest_framework import serializers
from .models import Profile, Collection

class ProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = Profile
    fields = '__all__'

class CollectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Collection
    fields = '__all__'