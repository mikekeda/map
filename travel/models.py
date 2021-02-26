from __future__ import unicode_literals

from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from django.dispatch import receiver

User = get_user_model()


@receiver(pre_save, sender=User, dispatch_uid="autocreate_username")
def create_username(sender, instance, **kwargs):
    # Try to generate username with given first_name and last_name.
    if not instance.username and instance.first_name and instance.last_name:
        username = (instance.first_name[0] + instance.last_name).lower()
        x = 0
        while True:
            if x == 0 and User.objects.filter(username=username).count() == 0:
                instance.username = username
                break

            new_username = "{0}{1}".format(username, x)
            if User.objects.filter(username=new_username).count() == 0:
                instance.username = new_username
                break

            x += 1
            if x > 1000000:
                raise Exception("Name is super popular!")


class Country(models.Model):
    """Country model"""

    cid = models.CharField(max_length=3, unique=True)
    name = models.CharField(max_length=60, blank=True)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    visited_countries = models.ManyToManyField(Country, related_name="visitors")
    fid = models.BigIntegerField()

    def __str__(self):
        return self.user.username
