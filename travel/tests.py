from django.test import TestCase


class LoanedBookInstancesByUserListViewTest(TestCase):

    # Pages available for anonymous.
    def test_home_page(self):
        resp = self.client.get('/api/countries')
        self.assertEqual(resp.status_code, 200)
