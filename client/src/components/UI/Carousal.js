import React from "react";
import "./Carousal.css";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.jpg";

const Carousal = () => {
  return (
    <Carousel className="d-none d-md-block">
      <Carousel.Item className="carousel-item" style={{ height: "45vh" }}>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item style={{ height: "45vh" }}>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousal;
