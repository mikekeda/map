"""
Travels URL Configuration
"""
from django.contrib import admin
from django.urls import path

from travel.views import ApiView

urlpatterns = [
    path('api/countries', ApiView.as_view(), name='countries'),
    path('admin/', admin.site.urls),
]
