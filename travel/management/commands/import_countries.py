import json
import re

from django.core.management import BaseCommand

from travel.models import Country


# The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "Import countries from countries list in Angular2"

    def handle(self, *args, **options):
        quote_keys_regex = r"([\{\s,])(\w+)(:)"
        file_name = "frontend/src/app/countries.ts"
        self.stdout.write("Started countries import")

        with open(file_name) as f:
            for line in reversed(list(f)):
                line = line.strip().strip(",")
                line = re.sub(quote_keys_regex, r'\1"\2"\3', line)
                try:
                    raw_country = json.loads(line)
                    if "id" in raw_country and "title" in raw_country:
                        cid = raw_country.get("id")
                        title = raw_country.get("title")
                        _, created = Country.objects.get_or_create(cid=cid, name=title)
                        if created:
                            self.stdout.write(raw_country.get("title") + " was created")
                            self.stdout.write(
                                "{} was created".format(raw_country.get("title"))
                            )
                        else:
                            self.stdout.write(
                                "{} already exists".format(raw_country.get("title"))
                            )
                except json.JSONDecodeError:
                    # Skip not valid lines.
                    pass
