import React from "react";
import logo from "../assets/logo2.jpg";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white footer">
      <div className="">
        <section className="">
          <div className="row footer-row">
            <div className="col-md-3 col-lg-3 col-xl-3  mt-2">
              <img src={logo} alt="logo" className="footer-logo" />
              <p className="mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2  mt-2">
              <h6 className="text-uppercase mb-4 font-weight-bold">LINKS</h6>
              <p>
                <Link to="/#top" className="text-white">
                  Home
                </Link>
              </p>
              <p>
                <Link to="/#about" className="text-white">
                  About
                </Link>
              </p>
              <p>
                <Link to="/product/#top" className="text-white">
                  Product
                </Link>
              </p>
              <p>
                <Link to="/service/#top" className="text-white">
                  Service
                </Link>
              </p>
              <p>
                <Link to="/career/#top" className="text-white">
                  Career
                </Link>
              </p>
              <p>
                <Link to="/contact/#top" className="text-white">
                  Contact
                </Link>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3  mt-2">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p style={{ marginLeft: 70 }}>
                <i className="fa fa-home m-2"></i> New York, NY 10012, US
              </p>
              <p style={{ marginLeft: 70 }}>
                <i className="fa fa-envelope m-2"></i>
                info@aslanlarrentacar.com
              </p>
              <p>
                <i className="fa fa-phone m-2"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fa fa-print m-2"></i> + 01 234 567 89
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mt-2">
              <h6 className="text-uppercase mb-3 font-weight-bold">
                Follow us
              </h6>
              <ul>
                <li>
                  <a
                    className="btn btn-primary btn-floating"
                    style={{ backgroundColor: "#3b5998", width: 70 }}
                    role="button"
                    href="https://www.facebook.com"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-3"
                    style={{ backgroundColor: "#55acee", width: 70 }}
                    role="button"
                    href="https://www.twitter.com"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-3"
                    style={{ backgroundColor: "#dd4b39", width: 70 }}
                    role="button"
                    href="https://www.google.com"
                  >
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-3"
                    style={{ backgroundColor: "#ac2bac", width: 70 }}
                    role="button"
                    href="https://www.instagram.com"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="btn btn-primary btn-floating mt-3"
                    style={{ backgroundColor: "#0077b6", width: 70 }}
                    role="button"
                    href="https://www.linkedin.com"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center p-4" style={{ backgroundColor: "black" }}>
        © 2021 Copyright:
        <a className="text-white" href="https://www.aslanlarrentacar.com">
          aslanlarrentacar.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
