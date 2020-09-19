import React, { ReactElement } from 'react';

import style from './Home.module.scss';

interface Props {

}

export function Home({ }: Props): ReactElement {
  return (
    <>
      <div id="myCarousel" className="carousel slide mt-1" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="" />
          <li data-target="#myCarousel" data-slide-to="1" className="active" />
          <li data-target="#myCarousel" data-slide-to="2" className="" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="satalite.png" alt="Satalite" width="100%" height="100%" />
            <div className="container">
              <div className="carousel-caption">
                <div className={`${style['carousel-caption-bg']}`}>
                  <h1 className="">Drought prediction</h1>
                  <p className="">Using Copernicus satellite data</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-next">
            <img src="forest.png" alt="Satalite" width="100%" height="100%" />
            <div className="container">
              <div className="carousel-caption">
                <div className={`${style['carousel-caption-bg']}`}>
                  <h1>Save money, avoid risk</h1>
                  <p>No need to spend where it is not profitable</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-next">
            <img src="crops.png" alt="Satalite" width="100%" height="100%" />
            <div className="container">
              <div className="carousel-caption">
                <div className={`${style['carousel-caption-bg']}`}>
                  <h1>Make people happy</h1>
                  <p>Save the crops, feed the planet indirectly by using our product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="container marketing mt-5">
        <div className="row">
          <div className="col-lg-4">
            <img className="rounded mx-auto d-block" src="satellite.png" alt="Satalite" width="140" height="140" />
            <h2 style={{ textAlign: "center", paddingTop: "5mm" }}>Data acquirement</h2>
            <p>Our team of skilled experts has experience on acquiring data from satelites and processing
            all the necessary information about it. We make sure to use the newest data gathered
            from satelites to predict if the lands will dry out in the near future.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded mx-auto d-block" src="planet-earth.png" alt="Satalite" width="140" height="140" />
            <h2 style={{ textAlign: "center", paddingTop: "5mm" }}>Worldwide</h2>
            <p>Data can be collected from all places on earth. By examining the data from previous years of set territory,
              we can give you our predictions about the lands quality.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded mx-auto d-block" src="money-tree.png" alt="Satalite" width="140" height="140" />
            <h2 style={{ textAlign: "center", paddingTop: "5mm" }}>Investment</h2>
            <p>By predicting land quality for the nearest future, you invest now and save money later by being prepared
               for natural circumstances.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    </>
  );
}
