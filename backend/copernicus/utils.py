import requests
import numpy as np
import matplotlib.pyplot as plt
from skimage.io import imread
from PIL import Image
from oauthlib.oauth2 import BackendApplicationClient
from requests_oauthlib import OAuth2Session

from zipfile import ZipFile
import io
import zipfile


class InMemoryZip:
    """Inspiration from: https://stackoverflow.com/a/2463818/11000105"""

    def __init__(self):
        self.in_memory_zip = io.BytesIO()

    def append(self, filename_in_zip, file_contents=""):
        """Appends a file with name filename_in_zip and contents of
        file_contents to the in-memory zip."""
        # Get a handle to the in-memory zip in append mode
        with zipfile.ZipFile(
            self.in_memory_zip, "a", zipfile.ZIP_DEFLATED, False
        ) as zip_file:
            zip_file.writestr(filename_in_zip, file_contents)

        return self

    def read(self):
        """Returns a string with the contents of the in-memory zip."""
        self.in_memory_zip.seek(0)
        return self.in_memory_zip


def dry_percentage_hashmap(image):
    T = np.arange(-0.8, 0.8)
    T = np.asarray(T)
    border_dry = -0.2
    border_semi_dry = 0.2
    result_list = [0, 0, 0]
    for i in range(len(image)):
        for j in range(len(image[0])):
            if image[i][j] <= border_dry:
                result_list[0] += 1
            elif image[i][j] > border_dry and image[i][j] < border_semi_dry:
                result_list[1] += 1
            elif image[i][j] >= border_semi_dry:
                result_list[2] += 1

    result_hashmap = {
        "dry": int(result_list[0] / image.size * 100),
        "semidry": int(result_list[1] / image.size * 100),
        "moist": int(result_list[2] / image.size * 100),
    }

    return result_hashmap


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


def get_image(payload, filename):
    oauth.fetch_token(
        token_url="https://services.sentinel-hub.com/oauth/token",
        client_id=client_id,
        client_secret=client_secret,
    )
    # All requests using this session will have an access token automatically added
    resp = oauth.get("https://services.sentinel-hub.com/oauth/tokeninfo")

    response = oauth.post(
        "https://services.sentinel-hub.com/api/v1/process", json=payload,
    )
    with open(filename, "wb") as target:
        target.write(response.content)

    pic = imread(filename)
    return pic, response.content


def extract_data(imageB8A, imageB11):
    result = (imageB8A - imageB11) / (imageB8A + imageB11)
    hashmap = dry_percentage_hashmap(result)
    return hashmap
