import React from "react";
import Slider from "react-slick";
import Foto1 from "../assets/product/p1.jpeg";
import Foto2 from "../assets/product/p2.jpeg";
import Foto3 from "../assets/product/p3.jpeg";
import Foto4 from "../assets/product/p4.jpeg";
import Foto5 from "../assets/product/p5.jpeg";
import Foto6 from "../assets/product/p6.jpeg";
import Foto7 from "../assets/product/p7.jpg";
import Foto8 from "../assets/product/p8.jpg";
import Foto9 from "../assets/product/p9.jpg";
import "./Product.css";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    url: Foto1,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 99,
  },
  {
    id: 2,
    url: Foto2,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 59,
  },
  {
    id: 3,
    url: Foto3,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 89,
  },
  {
    id: 4,
    url: Foto4,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 69,
  },
  {
    id: 5,
    url: Foto5,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 109,
  },
  {
    id: 6,
    url: Foto6,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 79,
  },
  {
    id: 7,
    url: Foto7,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 49,
  },
  {
    id: 8,
    url: Foto8,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 49,
  },
  {
    id: 9,
    url: Foto9,
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    price: 49,
  },
];

const Product2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "ease",
  };
  return (
    <div className="product">
      <h4 className="product-header mt-5 mb-4">DISCOVER THE RENTAL CAR</h4>
      <Slider {...settings}>
        {data.map((p) => {
          const { id, url, title, text, price } = p;
          return (
            <div class=" product-card" key={id}>
              <div class="card-body">
                <img class="card-img-top p-2" src={url} alt="Card cap" />
                <h5 class="card-title mt-2">{title}</h5>
                <p class="card-text">{text}</p>
                <p>Per month {price} $</p>
                <Link to="#" class="btn btn-product">
                  Go somewhere
                </Link>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Product2;
