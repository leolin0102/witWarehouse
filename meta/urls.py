__author__ = 'lin'
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'(.*)', views.set_category),
    url(r'(.*)/(.*)/(.*)', views.update_meta_data)
]
