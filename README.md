# Reddit Gallery Webapp

## About the project
A webapp currently in development that aims to scrape reddit for popular images and display them in a UI friendly web gallery.  Users will be able to favorite images and store them in different collections specified by the user.  

## Features
User authentication backend and basic frontend has been completed as well as some API endpoints. Current frontend is still in development and set to be improved.

## Tech
- Django
- Django-rest-framework
- React Redux
- Postgres
- Djoser

## Todo
- Include reddit scraper that periodically updates database. 
- Improve current frontend
- Develop gallery and user profile frontend
- Add additional backend image filtering

## Usage
Backend contains requirements.txt for installation of necessary python dependencies.
Run backend with 
```sh
$ python3 manage.py runserver
```
Frontend can be started with 
```sh
$ npm start
```
Below is the database configuration in `settings.py` where user and password must be provided.
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'redditgallery',
        'USER': '',
        'PASSWORD': '',
        'HOST': 'localhost'
    }
}
```
Below is the email configuration of the account that sends reset-password and verification emails. Located in `settings.py`.
```python
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
```
