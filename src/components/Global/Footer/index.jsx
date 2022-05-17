import React, { useState, useEffect } from "react";
import Logo from "/assets/Logo.svg";
import "./Footer.css";
import Facebook from "../Social/Facebook";
import Instagram from "../Social/Instagram";
import Twitter from "../Social/Twitter";

function Footer() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });

  const getSocial = () => {
    if (windowWidth < 1024) {
      return (
        <>
          <Facebook scale={2} className={"hover-orange"} />
          <Twitter scale={2} className={"hover-orange"} />
          <Instagram scale={2} className={"hover-orange"} />
        </>
      );
    } else {
      return (
        <>
          <Facebook scale={1} className={"hover-orange"} />
          <Twitter scale={1} className={"hover-orange"} />
          <Instagram scale={1} className={"hover-orange"} />
        </>
      );
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__inner--1">
          <img className="footer__logo" src={Logo} />
          <p className="footer__text">
            Lorem ipsum dolor sit amet,consectetuipisicing elit,
          </p>
        </div>
        <div className="footer-container__inner--2">
          <ul className="footer__list">
            <li className="footer__list--item">
              <a className="footer__list--link" href="#">
                Recipes
              </a>
            </li>
            <li className="footer__list--item">
              <a className="footer__list--link" href="#">
                Blog
              </a>
            </li>
            <li className="footer__list--item">
              <a className="footer__list--link" href="#">
                Contact
              </a>
            </li>
            <li className="footer__list--item">
              <a className="footer__list--link" href="#">
                About us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container__inner--3">
          <div className="footer__copyright">
            <span className="footer__copyright--text">
              &copy;2020 Flowbase. Powered by
            </span>
            <a className="footer__copyright--link" href="#">
              {" "}
              Webflow
            </a>
          </div>
          <div className="footer__social-container">{getSocial()}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
