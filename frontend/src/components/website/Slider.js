import React from "react";

export default function Slider() {
  return (
    <div>
      <div className="slider-area ">
        <div className="slider-active dot-style">
          <div
            className="single-slider  hero-overly slider-height d-flex align-items-center"
            data-background={process.env.PUBLIC_URL + "assets/img/hero/h1_hero.jpg"}>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-xl-9">
                  <div className="h1-slider-caption">
                    <h1 data-animation="fadeInUp" data-delay=".4s">
                      top hotel in the city
                    </h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">
                      Hotel & Resourt
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider  hero-overly slider-height d-flex align-items-center"
            data-background="assets/img/hero/h1_hero.jpg">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-xl-9">
                  <div className="h1-slider-caption">
                    <h1 data-animation="fadeInUp" data-delay=".4s">
                      top hotel in the city
                    </h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">
                      Hotel & Resourt
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider  hero-overly slider-height d-flex align-items-center"
            data-background="assets/img/hero/h1_hero.jpg">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-xl-9">
                  <div className="h1-slider-caption">
                    <h1 data-animation="fadeInUp" data-delay=".4s">
                      top hotel in the city
                    </h1>
                    <h3 data-animation="fadeInDown" data-delay=".4s">
                      Hotel & Resourt
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
