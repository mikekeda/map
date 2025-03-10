import json
import secrets
import string
import sys
from io import StringIO

from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.test import TestCase
from django.urls import reverse

from travel.models import Profile, Country
from travel.views import fb_get_user_data
from travels.settings import get_env_var

User = get_user_model()

# Need to update access token on each run,
# https://developers.facebook.com/apps/674727196042358/roles/test-users/
access_token = get_env_var("TEST_FB_ACCESS_TOKEN")


class TravelViewTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super(TravelViewTest, cls).setUpClass()

        # Import countries.
        out = StringIO()
        sys.stdout = out
        call_command("import_countries")

        # Create usual user.
        test_user = User.objects.create_user(
            username="testuser",
            password="".join(
                secrets.choice(string.ascii_letters + string.digits) for i in range(9)
            ),
        )
        test_user.save()

        # Create profile.
        profile = Profile(user=test_user)
        profile.fid = 118703168917503
        profile.save()

        # Add few visited countries.
        visited = Country.objects.filter(name__in=["Ukraine", "United States"])
        profile.visited_countries.add(*visited)

    # Helper functions.
    def test_views_fb_get_user_data(self):
        # Get fb Test User.
        user = fb_get_user_data(access_token, ["id", "first_name", "last_name"])
        self.assertDictEqual(
            user,
            {
                "id": "118703168917503",
                "first_name": "Bob",
                "last_name": "Baostein",
            },
        )

    # Pages available for anonymous.
    def test_views_countries_get(self):
        resp = self.client.get(reverse("countries"))
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode("utf-8"), {"countries": []})

        # This user doesn't exists.
        resp = self.client.get(reverse("countries"), {"fid": "101482740643584"})
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode("utf-8"), {"countries": []})

        # This user does exists.
        resp = self.client.get(reverse("countries"), {"fid": "118703168917503"})
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode("utf-8"), {"countries": ["US", "UA"]})

    def test_views_countries_options(self):
        resp = self.client.options(reverse("countries"))
        self.assertEqual(resp.status_code, 200)

    def test_views_countries_post(self):
        resp = self.client.post(
            reverse("countries") + "?fid=118703168917503",
            json.dumps({}),
            "application/x-www-form-urlencoded",
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode("utf-8"), {"countries": []})

        resp = self.client.post(
            reverse("countries"),
            json.dumps(
                {"country_ids": ["UA", "IT", "HU"], "access_token": access_token}
            ),
            "application/x-www-form-urlencoded",
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode("utf-8"), {"countries": ["UA", "IT", "HU"]}
        )
