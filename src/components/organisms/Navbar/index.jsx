import { React, useState, useEffect } from "react";
import Logo from "/public/assets/Logo.svg";
import "./Navbar.css";

import { Facebook, Instagram, Twitter } from "../../atoms";
function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    isNavOpen === true
      ? document.body.classList.add("header-open")
      : document.body.classList.remove("header-open");
  }, [isNavOpen]);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__logo-container">
            <img className="nav__logo--img" src={Logo} alt="Foodieland Logo" />
          </div>
          <ul
            id="nav__menu"
            className={`nav__list ${isNavOpen ? "nav__list-display--on" : ""}`}
          >
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                Home
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                Blog
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                About us
              </a>
            </li>
            <li className="nav__list--item">
              <a className="nav__list--link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button onClick={toggleIsNavOpen} className="nav__hamburguer--button">
            <div
              className={`nav__hamburguer--icon ${
                isNavOpen ? "nav__hamburguer--icon-open" : ""
              }`}
            ></div>
          </button>
          <div className="nav__social-container">
            <Facebook className="hover-orange" />
            <Twitter className="hover-orange" />
            <Instagram className="hover-orange" />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
