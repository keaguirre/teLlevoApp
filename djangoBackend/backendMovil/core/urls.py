from django.urls import path, include
from .views import *
from core.views import *
from movilAPI.views import *

urlpatterns = [
    path('',home),    
]