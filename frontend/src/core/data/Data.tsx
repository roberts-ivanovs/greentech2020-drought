import { Point } from 'core/types.js';
import React, { ReactElement, useEffect, useState } from 'react';
import { Requester } from 'utils/Requester';
import { PicData } from 'utils/Responses';

import { Map, Rectangle, TileLayer, Popup, Marker } from 'react-leaflet';

import { LatLng, LatLngBounds } from 'leaflet';
import DataChartPicture from './DataChartPicture.js';

async function setPicDataAwait(p1: Point, p2: Point, cb: (arg0: PicData) => void) {
  const data = await Requester.getPicture(p1, p2);
  cb(data);
}

const base1 = { x: 56.835, y: 24.005 };
const base2 = { x: 56.84, y: 24.0 };
export function Data(): ReactElement {
  const [image, setImage] = useState<{ img1: string; img2: string }>({
    img1: 'bad1.png',
    img2: 'bad2.png',
  });
  const [picData, setPicData] = useState<PicData>({
    dry: 0,
    semidry: 0,
    moist: 0,
    picture: '',
  });

  const [bounds, setBounds] = useState<LatLngBounds>(
    new LatLngBounds(new LatLng(base1.x, base1.y), new LatLng(base2.x, base2.y)),
  );

  const [marker1, setMarker1] = useState<LatLng>(new LatLng(base1.x, base1.y));
  const [marker2, setMarker2] = useState<LatLng>(new LatLng(base2.x, base2.y));

  useEffect(() => {
    setBounds(new LatLngBounds(new LatLng(marker1.lat, marker1.lng), new LatLng(marker2.lat, marker2.lng)));
  }, [marker1.lat, marker1.lng, marker2.lat, marker2.lng]);

  const center = { lat: 56.837, lng: 24.002 };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Map
              style={{ height: '80vh', width: '100%' }}
              center={center}
              zoom={13}
            >
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Rectangle bounds={bounds} color="black" />

              <Marker
                draggable
                ondragend={(v1) => {
                  setMarker1(new LatLng(v1.target._latlng.lat, v1.target._latlng.lng));
                }}
                position={marker1}
              >
                <Popup minWidth={90}>
                  <span>
                    DRAG MARKER
                  </span>
                </Popup>
              </Marker>
              <Marker
                draggable
                ondragend={(v2) => {
                  setMarker2(new LatLng(v2.target._latlng.lat, v2.target._latlng.lng));
                }}
                position={marker2}
              >
                <Popup minWidth={90}>
                  <span>
                    DRAG MARKER
                  </span>
                </Popup>
              </Marker>
            </Map>
          </div>
          <div className="col-4">
            <DataChartPicture picData={picData} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={image?.img1}
                alt="First slide"
                width="100%"
                height="100%"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={image?.img2}
                alt="Second slide"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-sm">
            <div className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src="bad1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Moisture index</h5>
                <p className="card-text">
                  Shows how much moisture each pixel displays, the more blue the
                  index, the more moisture it has and the more red the index,
                  the less moisture it has.
                </p>
                <button
                  type="button"
                  onClick={() => setImage({ img1: 'bad1.png', img2: 'bad2.png' })}
                  className="btn btn-primary"
                >
                  Change
                </button>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: '18rem' }}>
              <img
                className="card-img-top"
                src="satelite-bad1.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Relief map</h5>
                <p className="card-text">
                  A relief map taken from the copernicus satalite.
                </p>
                <button
                  type="button"
                  onClick={() => setImage({
                    img1: 'satelite-bad1.png',
                    img2: 'satelite-bad2.png',
                  })}
                  className="btn btn-primary"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img
              className="card-img-top"
              src="green-bad1.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Vegitation index</h5>
              <p className="card-text">
                The well known and widely used NDVI is a simple, but effective
                index for quantifying green vegetation. It normalizes green leaf
                scattering in Near Infra-red wavelengths with chlorophyll
                absorption in red wavelengths.
              </p>
              <button
                type="button"
                onClick={() => setImage({ img1: 'green-bad1.png', img2: 'green-bad2.png' })}
                className="btn btn-primary"
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
