from django.http import JsonResponse, HttpResponse
from django.views.generic import View
import urllib2
import json


def fb_get_user_data(access_token, fields):
    fields = '%2C'.join(fields)
    url = 'https://graph.facebook.com/v2.8/me?fields={0}&access_token={1}'.format(fields, access_token)
    req = urllib2.urlopen(url)
    return json.loads(req.read())


class ApiView(View):
    def get(self, request):
        response = {'countries': ['FR']}
        try:
            access_token = request.POST.get('access_token', False)
            if access_token:
                fb_user = fb_get_user_data(access_token, ['id', 'name', 'picture'])
                print fb_user
        except urllib2.URLError, e:
            response['error'] = e.code

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
        print request
        response = {'countries': ['FR']}
        try:
            json_data = json.loads(request.body)
            access_token = json_data.get('access_token')
            if access_token:
                fb_user = fb_get_user_data(access_token, ['id', 'name', 'picture'])
                print fb_user
                response = {'countries': ['UA']}
        except urllib2.URLError, e:
            response['error'] = e.code

        #return JsonResponse(response)
        response = HttpResponse(json.dumps(response))
        response["Access-Control-Allow-Origin"] = "http://localhost:4200"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        response["Access-Control-Allow-Headers"] = "content-type"
        response['Access-Control-Max-Age'] = "1800"
        return response
