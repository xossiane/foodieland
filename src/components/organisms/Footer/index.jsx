import React, { useState, useEffect } from "react";
import Logo from "/assets/Logo.svg";
import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "../../atoms";
import { Link } from "react-router-dom";
function Footer() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const getSocial = () => {
    if (windowSize < 1024) {
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

  useEffect(() => {
    let timeoutId = null;
    const updateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    };
    window.addEventListener("resize", updateSize);
  }, []);

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
              <Link className="footer__list--link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="footer__list--item">
              <Link className="footer__list--link" to="/contact">
                Contact
              </Link>
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
