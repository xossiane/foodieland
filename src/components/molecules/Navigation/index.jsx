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

  useEffect(() => {
    if (windowSize > 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowSize]);

  useEffect(() => {
    if (isDesktop) {
      setMinPages(pages > 5);
      setMaxPages(currentPage <= pages - 6);
      if (currentPage > pages) {
        setCurrentPage(0);
      }
    } else {
      setMinPages(pages > 3);
      setMaxPages(currentPage <= pages - 4);
    }
  }, [currentPage, pages]);

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
