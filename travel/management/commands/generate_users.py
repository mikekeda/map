import random
import secrets
import string
import time

from django.contrib.auth import get_user_model
from django.core.management import BaseCommand

from travel.models import Profile, Country

User = get_user_model()


# The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "Generate/delete dummy users"

    def add_arguments(self, parser):
        # Positional arguments
        parser.add_argument(
            "amount",
            nargs="?",
            type=int,
        )

        # Named (optional) arguments
        parser.add_argument(
            "-d",
            "--delete",
            action="store_true",
            dest="delete",
            default=False,
            help="Delete all dummy users",
        )

    def handle(self, *args, **options):
        dummy_first_name = "Dummy"
        dummy_last_name = "User"
        dummy_email = "dummy@email.com"

        if options["delete"]:
            # Delete users.
            User.objects.filter(
                first_name=dummy_first_name,
                last_name=dummy_last_name,
                email=dummy_email,
            ).delete()
            self.stdout.write("All test users ware deleted")

        else:
            self.stdout.write("Started user generation")
            options["amount"] = options["amount"] if options["amount"] else 1
            countries = Country.objects.all()
            for _ in range(options["amount"]):
                # Create user.
                user = User(
                    first_name=dummy_first_name,
                    last_name=dummy_last_name,
                    email=dummy_email,
                    password="".join(
                        secrets.choice(string.ascii_letters + string.digits)
                        for i in range(9)
                    ),
                )
                user.save()

                # Create profile.
                profile = Profile(user=user)
                profile.fid = int(time.time() * 1000000)
                profile.save()

                # Add visited countries.
                visited = random.randint(1, 15)
                visited = random.sample(list(countries), visited)
                profile.visited_countries.add(*visited)
                self.stdout.write("{} was created".format(user.username))
