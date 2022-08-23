import React from "react";
import Product2 from "../product/Product2";
import Banner from "../banner/Banner";
import Service from "../servis/Service";
import About from "../about/About";

const Home = () => {
  return (
    <div>
      <div id="top">
        <Banner />
      </div>
      <div id="product2">
        <Product2 />
      </div>
      <div id="service">
        <Service />
      </div>

      <div id="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
