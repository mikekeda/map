from django.http import JsonResponse
from django.views.generic import View
import urllib2
import json


class ApiView(View):
    def get(self, request):
        response = {'countries': []}
        access_token = request.GET.get('t')
        if access_token:
            try:
                req = urllib2.urlopen("https://graph.facebook.com/v2.8/me?fields=id%2Cname%2Cpicture&access_token=" + access_token)
                response['data'] = json.loads(req.read())
            except urllib2.URLError, e:
                response['error'] = e.code

        return JsonResponse(response)
