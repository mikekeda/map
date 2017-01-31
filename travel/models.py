from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Country(models.Model):
    """Country model"""
    cid = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=60, blank=True)

    def __str__(self):
        return u'%s' % (
            self.cid,
        )


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    visited_countries = models.ManyToManyField(Country, related_name='visitors')
    fid = models.PositiveIntegerField()

    def __str__(self):
        return u'%s' % (
            self.user.username,
        )
