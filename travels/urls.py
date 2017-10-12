"""
Travels URL Configuration
"""
from django.conf.urls import url
from django.contrib import admin
from travel.views import ApiView

urlpatterns = [
    url(r'^api/countries$', ApiView.as_view(), name='countries'),

    url(r'^admin/', admin.site.urls),
]
