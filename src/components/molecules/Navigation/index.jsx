import React, { useContext, useEffect, useState } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import LastPage from "/public/assets/LastPage.png";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage, currentPage, navigationItems, windowSize } =
    useContext(SearchBlogContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [minPages, setMinPages] = useState(pages > 3);
  const [maxPages, setMaxPages] = useState(currentPage <= pages - 4);
  const [aux, setAux] = useState(null);

  useEffect(() => {
    if (windowSize > 1024) {
      setIsDesktop(true);
      setMinPages(pages > 5);
      setMaxPages(currentPage <= pages - 6);
      // setCurrentPage(aux);
    } else {
      setIsDesktop(false);
      setMinPages(pages > 3);
      setMaxPages(currentPage <= pages - 4);
      // setAux(currentPage / 2);
    }
  }, [windowSize, currentPage]);

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
