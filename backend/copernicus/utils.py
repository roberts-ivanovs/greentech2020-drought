import requests
import numpy as np
import matplotlib.pyplot as plt
from skimage.io import imread
from PIL import Image
from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session


def __myHistogram(image):
    histogram = np.zeros(256)
    for i in range(0, 256):
        maskPixels_i = image == i
        histogram[i] = np.sum(maskPixels_i)

    x = np.arange(256)
    return histogram


def __set_hashmap(list_of_values):
    hashmap_result = {}
    for i in range(len(list_of_values)):
        hashmap_result[str(i)] = list_of_values[i]

    return hashmap_result


def return_map_from_img(image):
    f2Int = 255 - np.round(image * 255)
    f2Int = f2Int.astype(np.uint8)
    histogram = __myHistogram(f2Int)
    hashmap = __set_hashmap(histogram)
    return hashmap


client_id = "97d66040-c9d0-4d7b-903e-aac596adde74"
client_secret = "g$>[viN<UsS1Kk#}B~va^2_2!w8[4$%!N{2#/3Tr"
# Create a session
client = BackendApplicationClient(client_id=client_id)
oauth = OAuth2Session(client=client)
# Get token for the session
token = oauth.fetch_token(
    token_url="https://services.sentinel-hub.com/oauth/token",
    client_id=client_id,
    client_secret=client_secret,
)
# All requests using this session will have an access token automatically added
resp = oauth.get("https://services.sentinel-hub.com/oauth/tokeninfo")


def get_image(payload):
    response = oauth.post(
        "https://services.sentinel-hub.com/api/v1/process",
        json=payload,
    )
    array = np.frombuffer(response.content, dtype=np.uint8)
    return array
