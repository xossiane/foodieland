import React, { useContext, useState } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import LastPage from "/public/assets/LastPage.png";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage, currentPage, navigationItems, windowSize } =
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

  const ellipsis = <NavigationItem label={"..."} />;

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

  let minPages;
  let maxPages;
  let isDesktop;
  if (windowSize > 1024) {
    minPages = pages > 5;
    maxPages = currentPage <= pages - 6;
    isDesktop = true;
    setCurrentPage(Math.ceil(currentPage / 2));
  } else {
    minPages = pages > 3;
    maxPages = currentPage <= pages - 4;
    isDesktop = false;
  }

  return (
    <div className="navigation">
      {currentPage !== 0 && minPages && navigationLeft}
      {isDesktop && currentPage !== 0 && minPages && ellipsis}
      {minPages ? navigationArray : navigationMinArray}
      {isDesktop && maxPages && ellipsis}
      {maxPages && navigationRight}
    </div>
  );
};

export default Navigation;
