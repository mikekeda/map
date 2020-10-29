from io import StringIO
import sys

from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.test import TestCase

User = get_user_model()


class TravelCommandsTest(TestCase):
    # Helpers functions.
    def test_commands_import_countries(self):
        out = StringIO()
        sys.stdout = out
        call_command('import_countries')
        self.assertIn('United Arab Emirates was created', out.getvalue())

        # Try to import again.
        out = StringIO()
        sys.stdout = out
        call_command('import_countries')
        self.assertIn('United Arab Emirates already exists', out.getvalue())

    def test_commands_generate_users(self):
        # Need to import countries before.
        out = StringIO()
        sys.stdout = out
        call_command('import_countries')
        self.assertIn('United Arab Emirates was created', out.getvalue())

        out = StringIO()
        sys.stdout = out
        call_command('generate_users')
        self.assertIn('duser was created', out.getvalue())

        out = StringIO()
        sys.stdout = out
        call_command('generate_users', amount=5)
        self.assertIn('duser4 was created', out.getvalue())

        users = User.objects.all()
        self.assertEqual(len(users), 6)  # 1 + 5

        out = StringIO()
        sys.stdout = out
        call_command('generate_users', '-d')
        self.assertIn('All test users ware deleted', out.getvalue())
