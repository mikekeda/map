from django.core.management import BaseCommand
import demjson

from travel.models import Country


# The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "Import countries from countries list in Angular2"

    def handle(self, *args, **options):
        file_name = 'frontend/src/app/countries.ts'
        self.stdout.write("Started countries import")

        with open(file_name) as f:
            for line in reversed(list(f)):
                try:
                    raw_country = demjson.decode(line.strip().strip(','))
                    if 'id' in raw_country and 'title' in raw_country:
                        cid = raw_country.get('id')
                        title = raw_country.get('title')
                        _, created = Country.objects.get_or_create(
                            cid=cid,
                            name=title
                        )
                        if created:
                            self.stdout.write(raw_country.get('title') +
                                              ' was created')
                            self.stdout.write('{} was created'.format(
                                raw_country.get('title')
                            ))
                        else:
                            self.stdout.write('{} already exists'.format(
                                raw_country.get('title')
                            ))
                except demjson.JSONDecodeError:
                    # Skip not valid lines.
                    pass
