from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class Country(models.Model):
    """Country model"""
    cid = models.CharField(max_length=3, unique=True)

    def __unicode__(self):
        return u'%s' % (
            self.cid,
        )


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    visited_countries = models.ManyToManyField(Country, related_name='visitors')
    fid = models.PositiveIntegerField()

