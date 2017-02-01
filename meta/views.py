from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.
def set_category(request, category_name):
    print 'category_name', category_name
    if request.method == 'GET':
        print 'is get'
    return HttpResponse('yes')

