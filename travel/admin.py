from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin

from travel.models import Profile, Country

User = get_user_model()


class ProfileInline(admin.StackedInline):
    model = Profile


class UserAdmin(AuthUserAdmin):
    inlines = (ProfileInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)

admin.site.register(Profile)
admin.site.register(Country)
