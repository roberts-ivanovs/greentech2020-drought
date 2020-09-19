from django.http import JsonResponse
from django.shortcuts import render

from copernicus.utils import get_image, return_map_from_img


# Create your views here.
def get_picture_data(request):
    payload = {
        "input": {
            "bounds": {
                "bbox": [
                    25.75899124145508,
                    56.53421649279575,
                    26.08858108520508,
                    56.578491824893476,
                ],
                "properties": {"crs": "http://www.opengis.net/def/crs/EPSG/0/4326"},
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
                    "processing": {"upsampling": "BICUBIC", "downsampling": "BICUBIC"},
                    "type": "S2L2A",
                }
            ],
        },
        "output": {
            "width": 800,
            "height": 600,
            "responses": [{"identifier": "default", "format": {"type": "image/jpeg"}}],
        },
        "evalscript": '//VERSION=3\nconst moistureRamps = [\n        [-0.8, 0x800000],\n        [-0.24, 0xff0000],\n        [-0.032, 0xffff00],\n        [0.032, 0x00ffff],\n        [0.24, 0x0000ff],\n        [0.8, 0x000080]\n      ];\n\nconst viz = new ColorRampVisualizer(moistureRamps);\n\nfunction setup() {\n  return {\n    input: ["B8A", "B11","dataMask"],\n    output: { bands: 4 }\n  };\n}\n\nfunction evaluatePixel(samples) {\n  let val = index(samples.B8A, samples.B11); \n  return [...viz.process(val),samples.dataMask];\n}',
    }

    image = get_image(payload)
    hashmap = return_map_from_img(image)
    # print(image)

    return JsonResponse({"image": hashmap})
