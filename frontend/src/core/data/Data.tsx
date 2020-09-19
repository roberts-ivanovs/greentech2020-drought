import { Point } from 'core/types.js';
import React, { ReactElement, useEffect, useState } from 'react';
import { Requester } from 'utils/Requester';
import { PicData } from 'utils/Responses';

import {
  Circle,
  CircleMarker,
  Map,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet';

import DataChartPicture from './DataChartPicture.js';
import { LatLng, LatLngBounds } from "leaflet";

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

  const [p1, setP1] = useState<Point>({ x: 0, y: 0 });
  const [p2, setP2] = useState<Point>({ x: 0, y: 0 });
  const [p3, setP3] = useState<Point>({ x: 0, y: 0 });
  const [p4, setP4] = useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    async function setPicDataAwait() {
      const data = await Requester.getPicture(p1, p2, p3, p4);
      setPicData(data);
    }
    setPicDataAwait();
  }, []);

  // console.log(picData);

  const center = { lat: 0, lng: 0 };

  const polygon = [
    { lat: 51.515, lng: -0.09 },
    { lat: 51.52, lng: -0.1 },
    { lat: 51.52, lng: -0.12 },
  ];

  const bounds = new LatLngBounds(new LatLng(0.0, 0.0), new LatLng(0.0, 0.0));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Map center={center} zoom={1}>
              {/* <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              /> */}
              {/* <Polygon color="purple" positions={polygon} /> */}
              <Rectangle bounds={bounds} color="black" />
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

{
  /* <div classNameName="container">
   <div classNameName={`${style['map-dimensions']}`}>
     <GoogleMapReact>
     <p>oke</p>
   </div>
</div> */
}
