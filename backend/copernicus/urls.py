from django.urls import include, path
from copernicus.views import get_picture_data

urlpatterns = [
    path("pic", get_picture_data, name="pic")
]
