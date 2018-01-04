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
            'EAAJlqSrXJHYBAAkixdWMezAZA1zFZAQ7GCwSIGqX63bq6StjnCA0d0I8GXkZAjYu'
            'ALEqZBgY0X9fwotYgFVhwnNZAv7RMdRiJKVQ1M7kKmZCGQzA1G0KXHCZBZC8ihPV5'
            'LBIS2v8vH62GJ8DZAJZBE4lfoKw5s1A70zMQ9F9HicD4LkIpL3n6uZCmL9F2WrnSU'
            'QQAZCxqDDEnkSbWQPsljrBzMNm5ZAxMza4oRt3y2Yos5p02sZASmdZBXIu46f',
            ['id', 'first_name', 'last_name']
        )
        self.assertDictEqual(user, {
            'id': '101482740643584',
            'first_name': 'Carol',
            'last_name': 'Listein',
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
                'access_token': "EAAJlqSrXJHYBAEMxDPRoZCsKsUfT2moJaQRSpT8c9ZAA"
                                "NugUB83JO0VNagKnn6vuLiTIWFF1aoiaMpv9uLToviKTJ"
                                "W8gXZBij763ObvNK3poLlhT3fcqOqz7NZCwBJ9JHFjmzm"
                                "gzJKTYDs65iW6xjPkS9G6IN2Sn3GwjO2WJaxCYgY6zlb9"
                                "vedzKkf5EwT6l3NuMLO0OuDRzMlfVDpPltH4VUngIXauA"
                                "ni8pQu868HqGQVNe97vf"
            }),
            'application/x-www-form-urlencoded'
        )
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            resp.content.decode('utf-8'),
            {'countries': ['UA', 'IT', 'HU']}
        )
