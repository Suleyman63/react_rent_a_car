import React from "react";
import "./Service.css";
import icon1 from "../assets/serv/icon1.png";
import icon2 from "../assets/serv/icon2.png";
import icon3 from "../assets/serv/icon3.png";

const data = [
  {
    id: 1,
    img: icon3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    id: 2,
    img: icon1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
  {
    id: 3,
    img: icon2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
  },
];

const Service = () => {
  return (
    <div className="ser">
      <h2 className="p-2">Our Services</h2>
      <div class="row ser-div-row">
        {data.map((d) => {
          const { id, img, text } = d;
          return (
            <div class="col ser-div" key={id}>
              <img src={img} alt="" className="ser-img" />
              <p className="service-text">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
