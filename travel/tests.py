from django.test import TestCase


class LoanedBookInstancesByUserListViewTest(TestCase):

    # Pages available for anonymous.
    def test_countries_endpoint(self):
        # GET.
        resp = self.client.get('/api/countries')
        self.assertEqual(resp.status_code, 200)
        self.assertJSONEqual(
            str(resp.content, encoding='utf8'),
            {'countries': []}
        )

        # OPTIONS.
        resp = self.client.options('/api/countries')
        self.assertEqual(resp.status_code, 200)
