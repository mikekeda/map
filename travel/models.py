from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    fid = models.PositiveIntegerField()


class Country(models.Model):
    """Country model"""
    cid = models.CharField(max_length=3, unique=True)
    users = models.ManyToManyField(User, related_name='visited_countries')

    def __unicode__(self):
        return u'%s' % (
            self.cid,
        )
