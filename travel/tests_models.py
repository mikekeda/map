import secrets
import string

from django.contrib.auth import get_user_model
from django.test import TestCase

from travel.models import Profile

User = get_user_model()


class TravelModelsTest(TestCase):
    def setUp(self):
        # Create usual user.
        self.password = "".join(
            secrets.choice(string.ascii_letters + string.digits) for i in range(9)
        )
        test_user = User.objects.create_user(
            username="testuser",
            password=self.password,
            first_name="John",
            last_name="Doe",
        )
        test_user.save()

    def test_models_create_username(self):
        user = User(email="dummy1@mail.com", password=self.password)
        user.first_name = "John"
        user.last_name = "Doe"
        user.save()
        self.assertEqual(user.username, "jdoe")
        profile = Profile(user=user)
        self.assertEqual(str(profile), "jdoe")

        user = User(email="dummy2@mail.com", password=self.password)
        user.first_name = "John"
        user.last_name = "Doe"
        user.save()
        self.assertEqual(user.username, "jdoe0")
        profile = Profile(user=user)
        self.assertEqual(str(profile), "jdoe0")
