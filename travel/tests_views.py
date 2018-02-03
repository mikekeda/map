import json
import sys

from django.contrib.auth.models import User
from django.core.management import call_command
from django.test import TestCase
from django.urls import reverse
from django.utils.six import StringIO

from .models import Profile, Country
from .views import fb_get_user_data


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
            'EAAJlqSrXJHYBAGXlAQy1nq29ym8Nrz6pyIZAMUYWMnoJIvM6bJiZCPSXcimZCWoq'
            '1TRoTLORTRLq6rfirEG7sehlllNOwEzlZCU9JJaTFJsEC8xh0ZAGtCsAouSbvenCx'
            '7wICF6u1MgU6OupqLsSdXhGpbHIRXIbFq9u3sQ9rND6f7E2EDvMPQp8ZCTZAS5gVJ'
            'hSSGVbvy2fzpywTzi8RvTyBjfrHg4kOqqliOgMIOLfVGMFd9A9Ch7',
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
            reverse('countries') + '?fid=100023334620553',
            json.dumps({}),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': []})

        resp = self.client.post(
            reverse('countries'),
            json.dumps({
                'country_ids': ["UA", "IT", "HU"],
                'access_token': "EAAJlqSrXJHYBAPaGqUHx5HLx16sBZBYFWJTZCF6uuXKU"
                                "ZCzgqn4PuAqKnd08oDa3cqsQuLpZAMH7QGZAJtLXw1Pp0"
                                "ffLTWg2bLuPzlH7G7pWi5m5Vfy5D8E117fZBOIsnIM2DF"
                                "WESfyZBelxg6x4pUcJqZBODtJrz0qrptrTuxVDnRwnssg"
                                "hONuEsA3Atan3ZAZCORi31lW8pZANJ8Thk7bAQ5yOCZCr"
                                "JcRBKy8e56PNnXEncGrT3aZBmZBBCX"
            }),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode('utf-8'),
            {'countries': ['UA', 'IT', 'HU']}
        )
