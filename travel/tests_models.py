from django.contrib.auth.models import User
from django.test import TestCase

from .models import Profile


class TravelModelsTest(TestCase):
    def setUp(self):
        # Create usual user.
        test_user = User.objects.create_user(
            username='testuser',
            password='12345',
            first_name='John',
            last_name='Doe',
        )
        test_user.save()

    def test_models_create_username(self):
        user = User(email='dummy1@mail.com', password='12345')
        user.first_name = 'John'
        user.last_name = 'Doe'
        user.save()
        self.assertEqual(user.username, 'jdoe')
        profile = Profile(user=user)
        self.assertEqual(str(profile), 'jdoe')

        user = User(email='dummy2@mail.com', password='12345')
        user.first_name = 'John'
        user.last_name = 'Doe'
        user.save()
        self.assertEqual(user.username, 'jdoe0')
        profile = Profile(user=user)
        self.assertEqual(str(profile), 'jdoe0')
