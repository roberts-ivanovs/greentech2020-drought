from django.http import JsonResponse
from django.shortcuts import render

from copernicus.utils import get_image, extract_data

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_picture_data(request):
    payloadB8A = {
        "input": {
            "bounds": {
                "bbox": [
                    1244700.56859581,
                    5100795.771526381,
                    1538218.757210887,
                    5191450.0870726025,
                ],
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/3857"},
                "geometry": None,
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": "2020-09-17T00:00:00.000Z",
                            "to": "2020-09-17T23:59:59.999Z",
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
            "width": 625,
            "height": 193,
            "responses": [{"identifier": "default", "format": {"type": "image/tiff"}}],
        },
        "evalscript": '//VERSION=3\nfunction setup() {\n  return {\n    input: ["B8A"],\n    output: { bands: 1, sampleType: "UINT8" }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [255 * sample.B8A ];}',
    }

    payloadB11 = {
        "input": {
            "bounds": {
                "bbox": [
                    1244700.56859581,
                    5100795.771526381,
                    1538218.757210887,
                    5191450.0870726025,
                ],
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/3857"},
                "geometry": None,
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": "2020-09-17T00:00:00.000Z",
                            "to": "2020-09-17T23:59:59.999Z",
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
            "width": 625,
            "height": 193,
            "responses": [{"identifier": "default", "format": {"type": "image/tiff"}}],
        },
        "evalscript": '//VERSION=3\nfunction setup() {\n  return {\n    input: ["B11"],\n    output: { bands: 1, sampleType: "UINT8" }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [255 * sample.B11 ];}',
    }

    parsed_image_B8A = get_image(payloadB8A, "payloadB8A.tiff")
    parsed_image_B11 = get_image(payloadB11, "payloadB11.tiff")

    map_data = extract_data(parsed_image_B8A, parsed_image_B11)
    return JsonResponse(map_data)
