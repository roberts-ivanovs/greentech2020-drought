import { stringify } from 'querystring';
import React, { ReactElement, useState } from 'react';

import style from './Data.module.scss';

export function Data(): ReactElement {
  const [image, setImage] = useState<{img1: string, img2: string}>();

  return (
    <>
      <div className="container mt-5">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="bad1.png" alt="First slide" width="100%" height="100%" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="bad2.png" alt="Second slide" width="100%" height="100%" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="row mt-5 mb-5">
          <div className="col-sm">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="bad1.png" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Moisture index</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: '18rem' }}>
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Relief map</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Vegitation index</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{ /* <div classNameName="container">
   <div classNameName={`${style['map-dimensions']}`}>
     <GoogleMapReact>
     <p>oke</p>
   </div>
</div> */ }
