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
            'EAAJlqSrXJHYBAPOZAS2GA05iztNZCYCKgaHpEz88baJK2wM1cZCdJqZBx9pIHU3N'
            'VondAAXBvtCzQSvHtFBQeuFywZAPJfYu9m0D8uoEd0lY46zJYc3oOtc7gYV7NcPKM'
            'kSfQgoaNop9TRpDBnbMSZCczKc5ZAPOECmWTYZAP9UGhISMsKzqbwVBROLXrZBmVo'
            '1ms1go0XoGnwPNftRcAljT5ZAZCv1RNxJqKvNVOJ2QlWZAYVL9pmkBmGHW',
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
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': ['US', 'UA']})

    def test_views_countries_options(self):
        resp = self.client.options(reverse('countries'))
        self.assertEqual(resp.status_code, 200)

    def test_views_countries_post(self):
        resp = self.client.post(
            reverse('countries') + '?fid=100023334620553',
            {}
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': []})

        resp = self.client.post(reverse('countries'), {
            'country_ids': ['UA', 'IT', 'HU'],
            'access_token': 'EAAJlqSrXJHYBANAAjnz5ECwG3XR9YpRV89sBGKZBwAGyAgA0'
                            'JW5ffPxHfpJEyojNaaHpjFyquuAU98fqc8XRC8qpIF68K1ETq'
                            'UndAeJPceyzUEe54S4tzQRpwRMZAH0l9Bu2MAHnKAJTIkVvCi'
                            '9xsvOMuFqALwTc9YRp34BgtKTAoKHLMH7W0VE3AXLs3vAnZAM'
                            'QYQjZBhEOQ8puZCLAaS3j4j7r4kZBXpdIcnWU0iPMamzrYLwO'
                            'Sx'
        })
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(resp.content.decode('utf-8'), {'countries': ['UA', 'IT', 'HU']})
