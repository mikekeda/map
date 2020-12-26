from urllib.request import urlopen
import urllib.error
import json

from django.http import HttpResponse, JsonResponse
from django.views.generic import View
from django.contrib.auth import get_user_model
from django.core.exceptions import ObjectDoesNotExist

from travel.models import Profile, Country

User = get_user_model()


def fb_get_user_data(access_token, fields):
    fields = '%2C'.join(fields)
    req = urlopen('https://graph.facebook.com/v8.0/me'
                  '?fields={}&access_token={}'.format(fields, access_token))
    return json.loads(req.read().decode('utf-8'))


class ApiView(View):
    def get(self, request):
        response = {'countries': []}

        fid = request.GET.get('fid')
        if fid:
            try:
                profile = Profile.objects.get(fid=fid)
                countries = [
                    country.cid
                    for country in profile.visited_countries.all()
                ]
                response = {'countries': countries}
            except ObjectDoesNotExist:
                pass

        response = JsonResponse(response)
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        return response

    def options(self, request, *args, **kwargs):
        response = HttpResponse()
        response['allow'] = "GET, POST, OPTIONS"
        response['Access-Control-Allow-Origin'] = "http://localhost:4200"
        response['Access-Control-Allow-Methods'] = "GET, POST, OPTIONS"
        response['Access-Control-Allow-Headers'] = "content-type"
        response['Access-Control-Max-Age'] = "1800"
        return response

    def post(self, request):
        response = {'countries': []}
        try:
            json_data = json.loads(request.body.decode('utf-8'))
            access_token = json_data.get('access_token')
            fid = json_data.get('fid')
            if fid:
                try:
                    profile = Profile.objects.get(fid=fid)
                    countries = [
                        country.cid
                        for country in profile.visited_countries.all()
                    ]
                    response = {'countries': countries}
                except ObjectDoesNotExist:
                    pass
            elif access_token:
                countries = []
                fb_user = fb_get_user_data(
                    access_token,
                    ['id', 'first_name', 'last_name', 'picture', 'email']
                )
                fid = fb_user.get('id')
                if fid:
                    try:
                        # Get profile is exists.
                        profile = Profile.objects.get(fid=fid)
                    except ObjectDoesNotExist:
                        # Create profile is doesn't exists.
                        user = User(
                            email=fb_user.get('email'),
                            password=User.objects.make_random_password()
                        )
                        user.first_name = fb_user.get('first_name', 'John')
                        user.last_name = fb_user.get('last_name', 'Doe')
                        user.save()
                        profile = Profile(user=user)
                        profile.fid = fid
                        profile.save()

                    countries = json_data.get('country_ids')
                    if countries is not None:
                        # Update visited countries.
                        profile.visited_countries.clear()
                        for cid in countries:
                            try:
                                country = Country.objects.get(cid=cid)
                                profile.visited_countries.add(country)
                            except ObjectDoesNotExist:
                                pass
                    countries = [
                        country.cid
                        for country in profile.visited_countries.all()
                    ]

                response = {'countries': countries}
        except urllib.error.URLError as e:
            response['error'] = str(e.reason)

        response = JsonResponse(response)
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "content-type"
        response['Access-Control-Max-Age'] = "1800"

        return response
