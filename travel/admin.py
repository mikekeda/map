from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin

from travel.models import Profile, Country


class ProfileInline(admin.StackedInline):
    model = Profile


class UserAdmin(AuthUserAdmin):
    inlines = (ProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)

admin.site.register(Profile)
admin.site.register(Country)
