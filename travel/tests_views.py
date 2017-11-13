from django.core.urlresolvers import reverse
from django.test import TestCase


class TravelViewTest(TestCase):
    # Pages available for anonymous.
    def test_views_countries(self):
        # GET.
        resp = self.client.get(reverse('countries'))
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            str(resp.content, encoding='utf8'),
            {'countries': []}
        )

        # OPTIONS.
        resp = self.client.get(reverse('countries'))
        self.assertEqual(resp.status_code, 200)
