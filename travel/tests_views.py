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
            'EAAJlqSrXJHYBAGx8ZAIqRVVnGQekQHGLxHTLQ3sNEciEchqZB2QVe6zfFe2mGGG8'
            '7NZB0aMAAidvYoBhgXBAl9X0gKyQPS3ZCPvoedzZA57m7k6z0BwFngyZBInZBH0rF'
            'wBZBMqCmpGUz9fs3f8gZAosPNfzMAnpZCouc1s63vfWsYPwJNp1nFV4S4nijREOnY'
            'fBiwEHs5whUPsabja8IMBKvlG39vxm7DKZCbWpvmeEt9mU0QVenXqnMkF',
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
                'access_token': "EAAJlqSrXJHYBAE1EuhduEeNGNyCfWVe1DNejGPPaSBGX"
                                "t1YeWnOmVrsFAWfZB7ELDcMaTIKwutqrYMGJBvmVv41l2"
                                "6vWxNEqZCKA9FJXqGMYjylUGSx4ZBKFcVqJ2k0cdDJP0K"
                                "5E360244gCLpSyf7Vs5OMAo8GXnDCBhmbycLFToLQXBfA"
                                "7MMfGjvLNZCGVBZA6LZApyk04S4GXMwQxKyaZApixLahg"
                                "ZCWv62lNSiumZB2wPZCU8E6Caf"
            }),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode('utf-8'),
            {'countries': ['UA', 'IT', 'HU']}
        )
