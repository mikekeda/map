from django.core.management import BaseCommand
import json


# The class must be named Command, and subclass BaseCommand
class Command(BaseCommand):
    # Show this when the user types help
    help = "My test command"

    # A command must define handle()
    def handle(self, *args, **options):
        self.stdout.write("Doing All The Things!")

        file_name = 'travels-frontend/src/app/countries.ts'

        with open(file_name) as f:
            for line in f:
                country = json.loads(line.strip().strip('"'))
                print(country)
                if 'title' in country:
                    print(country.get('title'))
                    self.stdout.write(type(country))

        # you may also want to remove whitespace characters like `\n` at the end of each line
        # content = [x.strip() for x in content]
        # for line in content:
        #     try:
        #         # self.stdout.write(line)
        #         country = json.loads(line)
        #         if 'title' in country:
        #             self.stdout.write(country.title)
        #     except:
        #         pass

        # country, created = Country.objects.get_or_create(cid=cid)