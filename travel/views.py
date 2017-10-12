from urllib.request import urlopen
import urllib.error
import json

from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

from travel.models import Profile, Country


def fb_request(callback):
    def wrapper(*args, **kwargs):
        req = urlopen(callback(*args, **kwargs))
        return json.loads(req.read().decode('utf-8'))
    return wrapper


@fb_request
def fb_get_user_data(access_token, fields):
    fields = '%2C'.join(fields)
    return 'https://graph.facebook.com/v2.8/me' \
           '?fields={0}&access_token={1}'.format(fields, access_token)


@fb_request
def fb_get_user_friends(access_token):
    return 'https://graph.facebook.com/v2.8/me/friends' \
           '?access_token={0}'.format(access_token)


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

        # return JsonResponse(response)
        response = HttpResponse(json.dumps(response))
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
                        # Create profile is dose't exist.
                        first_name = fb_user.get('first_name', 'John')
                        last_name = fb_user.get('last_name', 'Doe')
                        email = fb_user.get('email')
                        password = User.objects.make_random_password()
                        user = User(email=email, password=password)
                        user.first_name = first_name
                        user.last_name = last_name
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
            response['error'] = e.code

        # return JsonResponse(response)
        response = HttpResponse(json.dumps(response))
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "content-type"
        response['Access-Control-Max-Age'] = "1800"

        return response
