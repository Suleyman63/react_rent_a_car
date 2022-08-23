import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h3 className="p-2">RENT A CAR</h3>
        </div>
        <Link to="signin" className="btn btn-sign">
          Sign In
        </Link>
      </div>
      <div id="mySidenav" className="sidenav">
        <Link to="/" className="home">
          <i className="fa fa-fw fa-home"></i>
          Home
        </Link>
        <Link to="about" className="about">
          <i className="fa fa-fw fa-address-card"></i>
          About
        </Link>
        <Link to="service" className="service">
          <i className="fa fa-fw fa-wrench"></i>
          Service
        </Link>
        <Link to="career" className="career">
          <i className="fa fa-fw fa-user"></i>
          Blogs
        </Link>
        <Link to="contact" className="contact">
          <i className="fa fa-fw fa-envelope"></i>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
