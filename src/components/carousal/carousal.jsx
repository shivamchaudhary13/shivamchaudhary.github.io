import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.webp";
import "../carousal/carousal.scss";

function BootstrapCarousel() {
  return (
    <Carousel className="imageslide">
      <Carousel.Item className="slider">
        <img className="w-100" src={banner1} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img className="w-100" src={banner2} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item className="slider">
        <img className="w-100" src={banner3} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional slides */}
    </Carousel>
  );
}

export default BootstrapCarousel;
