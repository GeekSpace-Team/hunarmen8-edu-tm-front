import React from "react";
import "./baseSlider.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../img/img1.JPG";
import img2 from "../../img/img2.jpg";
import img5 from "../../img/img5.jpg";
import img6 from "../../img/img6.jpg";
import img16 from "../../img/img16.jpg";
import img18 from "../../img/img18.jpg";
import img19 from "../../img/img19.jpg";

import { Container } from "@mui/system";

const BaseSlider = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Carousel
          className="main-slide"
          showThumbs={false}
          autoPlay={true}
          showArrows={false}
          emulateTouch={true}
          transitionTime={3000}
          interval={7000}
          showStatus={false}
          infiniteLoop={true}
        >
          <div className="baseSliderImg">
            <img src={img1} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img2} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img5} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img6} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img16} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img18} alt="#" />
          </div>
          <div className="baseSliderImg">
            <img src={img19} alt="#" />
          </div>
        </Carousel>
      </Container>
    </div>
  );
};

export default BaseSlider;
