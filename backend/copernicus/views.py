from django.http import JsonResponse
from django.shortcuts import render

from copernicus.utils import get_image, return_map_from_img

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_picture_data(request):
    payload = {
        "input": {
            "bounds": {
                "bbox": [
                    2877643.9131091023,
                    7666310.225629501,
                    2887771.8193568876,
                    7679189.8648955505,
                ],
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/3857"},
                "geometry": None,
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": "2018-06-09T00:00:00.000Z",
                            "to": "2018-06-09T23:59:59.999Z",
                        },
                        "mosaickingOrder": "mostRecent",
                        "previewMode": "EXTENDED_PREVIEW",
                        "maxCloudCoverage": 100,
                    },
                    "processing": {"upsampling": "BICUBIC"},
                    "type": "S2L2A",
                }
            ],
        },
        "output": {
            "width": 1012,
            "height": 1287,
            "responses": [{"identifier": "default", "format": {"type": "image/tiff"}}],
        },
        "evalscript": '//VERSION=3\nfunction setup() {\n  return {\n    input: ["B8A"],\n    output: { bands: 1, sampleType: "UINT8" }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [255 * sample.B8A ];}',
    }

    # image = get_image(payload)
    # hashmap = return_map_from_img(image)
    # print(image)

    return JsonResponse({"dry": 50., "semidry": 45., "moist": 5.})
