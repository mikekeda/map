import json
import sys

from django.contrib.auth.models import User
from django.core.management import call_command
from django.test import TestCase
from django.urls import reverse
from django.utils.six import StringIO

from travel.models import Profile, Country
from travel.views import fb_get_user_data

# Need to update access token on each run,
# https://developers.facebook.com/apps/674727196042358/roles/test-users/
access_token = "EAAJlqSrXJHYBAIy3mkUTW2O1msYyaj9SHEiqbVaJyoUq3Cm7RFAERFm9J0" \
               "XKFCLfuwXE9yWz1u0LvXfFMPIN2SvPebJjkZA4yEdeZBFLoYdYZAoSPDlm2" \
               "pqdTk3HBJ7G0zZCQb8dPPGOWGtZAVfj6t0czdpKcSvKMPjT3zbfMzC3A1n4" \
               "dlOtrV8ZCTT4hqyczxNnUvK8UtLw8n3UtCNKqa"


class TravelViewTest(TestCase):
    @classmethod
    def setUpClass(cls):
        super(TravelViewTest, cls).setUpClass()

        # Import countries.
        out = StringIO()
        sys.stdout = out
        call_command('import_countries')

        # Create usual user.
        test_user = User.objects.create_user(username='testuser',
                                             password='12345')
        test_user.save()

        # Create profile.
        profile = Profile(user=test_user)
        profile.fid = 118703168917503
        profile.save()

        # Add few visited countries.
        visited = Country.objects.filter(name__in=['Ukraine', 'United States'])
        profile.visited_countries.add(*visited)

    # Helper functions.
    def test_views_fb_get_user_data(self):
        # Get fb Test User.
        user = fb_get_user_data(
            access_token,
            ['id', 'first_name', 'last_name']
        )
        self.assertDictEqual(user, {
            'id': '118703168917503',
            'first_name': 'Bob',
            'last_name': 'Baostein',
        })

    # Pages available for anonymous.
    def test_views_countries_get(self):
        resp = self.client.get(reverse('countries'))
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': []})

        # This user doesn't exists.
        resp = self.client.get(
            reverse('countries'),
            {'fid': '101482740643584'}
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': []})

        # This user does exists.
        resp = self.client.get(
            reverse('countries'),
            {'fid': '118703168917503'}
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode('utf-8'),
            {'countries': ['US', 'UA']}
        )

    def test_views_countries_options(self):
        resp = self.client.options(reverse('countries'))
        self.assertEqual(resp.status_code, 200)

    def test_views_countries_post(self):
        resp = self.client.post(
            reverse('countries') + '?fid=118703168917503',
            json.dumps({}),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': []})

        resp = self.client.post(
            reverse('countries'),
            json.dumps({
                'country_ids': ["UA", "IT", "HU"],
                'access_token': access_token
            }),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode('utf-8'),
            {'countries': ['UA', 'IT', 'HU']}
        )
