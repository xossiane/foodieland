import React, { useContext, useState } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import LastPage from "/public/assets/LastPage.png";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage, currentPage } = useContext(SearchBlogContext);

  const navigationArray = Array.from({ length: pages }).map((_, index) => (
    <NavigationItem
      className={currentPage === index ? "navigation__item--active" : ""}
      onClick={setCurrentPage}
      page={index}
      key={index}
      label={index + 1}
    />
  ));

  /*const lastPage = (
    <NavigationItem
      page={pages - 1}
      className={currentPage === pages - 1 ? "navigation__item--active" : ""}
      onClick={setCurrentPage}
      image={LastPage}
    /> 
  );*/

  return <div className="navigation">{navigationArray}</div>;
};

export default Navigation;
