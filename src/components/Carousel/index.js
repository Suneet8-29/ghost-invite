import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { carouselSettings } from "../../helper";
import c1 from "../../images/carousel/1.webp";
import c2 from "../../images/carousel/2.webp";
import c3 from "../../images/carousel/3.webp";
import c4 from "../../images/carousel/4.webp";
import c5 from "../../images/carousel/5.webp";
import c6 from "../../images/carousel/6.webp";
import c7 from "../../images/carousel/7.webp";
import "./style.css";

const Carousel = () => {
  const images = [c1, c2, c3, c4, c5, c6, c7];
  return (
    <div className="slide-container">
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
            <img className="carousel_image" src={image} alt={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
