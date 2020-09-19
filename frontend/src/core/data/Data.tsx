import React, { ReactElement, useState } from 'react';

export function Data(): ReactElement {
  const [image, setImage] = useState<{ img1: string; img2: string }>({
    img1: 'bad1.png',
    img2: 'bad2.png',
  });

  return (
    <>
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
