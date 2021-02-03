from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
  def create_user(self, email, username, password=None):
    if not email:
      raise ValueError('Users must have an email address')
    email = self.normalize_email(email)
    user = self.model(email=email, username=username)

    user.set_password(password) # Creates hashed version of password
    user.save()

    return user

  def create_superuser(self, email, username, password=None):
    if not email:
      raise ValueError('Users must have an email address')
    email = self.normalize_email(email)
    user = self.model(email=email, username=username, is_staff=True, is_superuser=True)

    user.set_password(password) # Creates hashed version of password
    user.save()

    return user
  
class UserAccount(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField(max_length=255, unique=True)
  username = models.CharField(max_length=255)
  is_superuser = models.BooleanField(default=False)
  is_staff = models.BooleanField(default=False)
  objects = UserAccountManager()

  USERNAME_FIELD = 'email' # Default login field
  REQUIRED_FIELDS = ['username']

  def get_name(self):
    return self.username

  def __str__(self):
    return self.email
