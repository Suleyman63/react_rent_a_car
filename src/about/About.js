import React from "react";
import about1 from "../assets/about/about1.jpeg";
import about2 from "../assets/about/about2.jpeg";
import about3 from "../assets/about/about3.jpeg";

import "./About.css";

const data = [
  {
    id: 1,
    image: about1,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 2,
    image: about2,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 3,
    image: about3,
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
];

const About = () => {
  return (
    <div>
      <h4 className="about-header mt-4">ABOUT US</h4>
      <div className="about-con ">
        {data.map((b) => {
          const { id, image, text } = b;
          return (
            <div className="about-contain" key={id}>
              <img className="about-img" src={image} alt="" />
              <p className="about-text mt-3">
                {text}
                <a className="mx-2" href="/">
                  Learn More
                  <i className="fa fa-chevron-right mx-1"></i>
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
