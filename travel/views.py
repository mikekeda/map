from django.http import JsonResponse, HttpResponse
from django.views.generic import View
import urllib2
import json
from travel.models import Profile, Country
from django.contrib.auth.models import User


def fb_get_user_data(access_token, fields):
    fields = '%2C'.join(fields)
    url = 'https://graph.facebook.com/v2.8/me?fields={0}&access_token={1}'.format(fields, access_token)
    req = urllib2.urlopen(url)
    return json.loads(req.read())


def generate_username(first_name, last_name):
    val = "{0}{1}".format(first_name[0], last_name).lower()
    x = 0
    while True:
        if x == 0 and User.objects.filter(username=val).count() == 0:
            return val
        else:
            new_val = "{0}{1}".format(val, x)
            if User.objects.filter(username=new_val).count() == 0:
                return new_val
        x += 1
        if x > 1000000:
            raise Exception("Name is super popular!")


class ApiView(View):
    def get(self, request):
        response = {'countries': []}

        fid = request.GET.get('fid', '')
        if fid:
            profile = Profile.objects.filter(fid=fid).first()
            if profile:
                countries = [country.cid for country in profile.visited_countries.all()]
                response = {'countries': countries}


        #return JsonResponse(response)
        response = HttpResponse(json.dumps(response))
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        return response

    def options(self, request):
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
            json_data = json.loads(request.body)
            access_token = json_data.get('access_token')
            fid = json_data.get('fid')
            if fid:
                profile = Profile.objects.filter(fid=fid).first()
                if profile:
                    countries = [country.cid for country in profile.visited_countries.all()]
                    response = {'countries': countries}
            elif access_token:
                countries = json_data.get('country_ids', None)
                fb_user = fb_get_user_data(access_token, ['id', 'first_name', 'last_name', 'picture', 'email'])
                fid = fb_user.get('id', False)
                if fid:
                    profile = Profile.objects.filter(fid=fid).first()
                    if not profile:
                        first_name = fb_user.get('first_name', 'John')
                        last_name = fb_user.get('last_name', 'Doe')
                        username = generate_username(first_name, last_name)
                        email = fb_user.get('email')
                        password = User.objects.make_random_password()
                        user = User.objects.create_user(username, email, password)
                        user.first_name = first_name
                        user.last_name = last_name
                        profile = Profile(user=user)
                        profile.fid = fid
                        profile.save()
                        user.save()

                    if countries is not None:
                        profile.visited_countries.clear()
                        for cid in countries:
                            country, created = Country.objects.get_or_create(cid=cid)
                            profile.visited_countries.add(country)
                        profile.save()
                    else:
                        countries = [country.cid for country in profile.visited_countries.all()]

                response = {'countries': countries}
        except urllib2.URLError, e:
            response['error'] = e.code

        #return JsonResponse(response)
        response = HttpResponse(json.dumps(response))
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "content-type"
        response['Access-Control-Max-Age'] = "1800"
        return response
