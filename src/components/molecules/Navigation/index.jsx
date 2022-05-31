import React, { useContext, useState } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import LastPage from "/public/assets/LastPage.png";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage, currentPage, navigationItems } =
    useContext(SearchBlogContext);

  const navigationLeft = (
    <NavigationItem
      onClick={setCurrentPage}
      page={currentPage - 1}
      label={"<"}
    />
  );

  const navigationRight = (
    <NavigationItem
      onClick={setCurrentPage}
      page={currentPage + 1}
      label={">"}
    />
  );

  const navigationArray = navigationItems.map((index) => (
    <NavigationItem
      className={currentPage === index ? "navigation__item--active" : ""}
      onClick={setCurrentPage}
      page={index}
      key={index}
      label={index + 1}
    />
  ));

  const navigationMinArray = navigationItems
    .slice(0, pages)
    .map((_, index) => (
      <NavigationItem
        className={currentPage === index ? "navigation__item--active" : ""}
        onClick={setCurrentPage}
        page={index}
        key={index}
        label={index + 1}
      />
    ));

  return (
    <div className="navigation">
      {currentPage !== 0 && pages > 3 && navigationLeft}
      {pages > 3 ? navigationArray : navigationMinArray}
      {currentPage <= pages - 4 && navigationRight}
    </div>
  );
};

export default Navigation;
