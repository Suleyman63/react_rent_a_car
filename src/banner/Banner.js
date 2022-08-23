import React from "react";
import Banner1 from "../assets/banner/4.png";
import Banner2 from "../assets/banner/5.jpg";
import Banner3 from "../assets/banner/3.png";

import { Carousel } from "react-bootstrap";
import "./Banner.css";

const images = [
  {
    id: 1,
    image: Banner1,
    description: "Smarter Cars",
    interval: 10000,
  },
  {
    id: 2,
    image: Banner2,
    description: "Progress is what you bring with you.",
    interval: 5000,
  },
  {
    id: 3,
    image: Banner3,
    description: "Discover and configure our series models now.",
    interval: 15000,
  },
];

const Banner = () => {
  return (
    <Carousel id="top" nextLabel="" prevLabel="" controls={false}>
      {images.map((data) => {
        const { id, image, description, interval } = data;
        return (
          <Carousel.Item interval={interval} key={id} className="slider-item">
            <img className="banner-img " src={image} alt="First slide" />
            <Carousel.Caption>
              <div className="w-50 ms-5 carousel-text-box text-center">
                <p className=" text-light mt-3 carousel-desc-text ">
                  {description}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Banner;
