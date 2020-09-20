import json
from django.http import JsonResponse
from django.shortcuts import render

from copernicus.utils import get_image, extract_data

from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def get_picture_data(request):
    json_data = json.loads(request.body)
    p1 = json_data.get("p1")
    p2 = json_data.get("p2")

    xmin = min([p1["x"], p2["x"]]) * 100000
    ymin = min([p1["y"], p2["y"]]) * 100000
    xmax = max([p1["x"], p2["x"]]) * 100000
    ymax = max([p1["y"], p2["y"]]) * 100000

    coors = [
        ymin, xmin, ymax, xmax
    ]
    print(coors)
    payloadB8A = {
        "input": {
            "bounds": {
                "bbox": coors,
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/3857"},
                "geometry": None,
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": "2000-09-19T00:00:00.000Z",
                            "to": "2020-09-19T23:59:59.999Z",
                        },
                        "mosaickingOrder": "mostRecent",
                        "previewMode": "EXTENDED_PREVIEW",
                        "maxCloudCoverage": 10,
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
                "bbox": coors,
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/3857"},
                "geometry": None,
            },
            "data": [
                {
                    "dataFilter": {
                        "timeRange": {
                            "from": "2000-09-19T00:00:00.000Z",
                            "to": "2020-09-19T23:59:59.999Z",
                        },
                        "mosaickingOrder": "mostRecent",
                        "previewMode": "EXTENDED_PREVIEW",
                        "maxCloudCoverage": 10,
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

    parsed_image_B8A, picB8A = get_image(payloadB8A, "payloadB8A.tiff")
    parsed_image_B11, picB811 = get_image(payloadB11, "payloadB11.tiff")

    map_data = extract_data(parsed_image_B8A, parsed_image_B11)
    # map_data["pic"] = picB8A
    return JsonResponse(map_data)
