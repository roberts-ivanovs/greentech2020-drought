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
            <img className="rounded mx-auto d-block" src="planet-earth.png" alt="Planet earth" width="140" height="140" />
            <h2 style={{ textAlign: "center", paddingTop: "5mm" }}>Worldwide</h2>
            <p>Data can be collected from all places on earth. By examining the data from previous years of set territory,
              we can give you our predictions about the lands quality.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="rounded mx-auto d-block" src="money-tree.png" alt="Money tree icon" width="140" height="140" />
            <h2 style={{ textAlign: "center", paddingTop: "5mm" }}>Investment</h2>
            <p>By predicting land quality for the nearest future, you invest now and save money later by being prepared
               for natural circumstances.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">LPKS LATRAPS</h2>
            <p className="lead">Investigation of land with occured risk factors could take from couple of hours to few days. Number of farmers who begin to insure their lands is growing.</p>
          </div>
          <div className="col-md-5">
            <img className="rounded mx-auto d-block" src="latraps.jpg" alt="Latraps logo" width="250" height="250" />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Agrobroker</h2>
            <p className="lead">Field inspection takes time and money resources. We are looking for other options to improve that. 20% of Latvias fields are insured and this percentage will only grow. </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="rounded mx-auto d-block" src="agrobroker.png" alt="Latraps logo" width="450" height="150" />
          </div>
        </div>
        {/* 
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Possible consequences</h2>
            <p className="lead">Lauris Ļubka - farmer from Latgale - went swimming in his crop land after long lasting rainfalls which caused irrigation.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <video width="426" height="240" controls>
              <source src="fermeris.mp4" type="video/mp4" />
            </video>
          </div>
        </div> */}

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Drough in Latvia</h2>
            <p className="lead">Drought is a new problem in Latvia.</p>
          </div>
          <div className="col-md-5">

            <div id="postCarousel" className="carousel slide mt-1" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#postCarousel" data-slide-to="0" className="" />
                <li data-target="#postCarousel" data-slide-to="1" className="active" />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="DroughtCatastrophe.png" alt="Drought as national natural disaster" width="450" height="350" />
                  <div className="container">
                    <div className="carousel-caption">
                      <div className={`${style['carousel-caption-bg']}`}>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item carousel-item-next">
                  <img src="DroughtComingBack.png" alt="Drought is coming back to Latvia" width="450" height="350" />
                  <div className="container">
                    <div className="carousel-caption">
                      <div className={`${style['carousel-caption-bg']}`}>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#postCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#postCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
