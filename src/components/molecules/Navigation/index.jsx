import React, { useContext, useEffect, useState } from "react";
import { BlogContext } from "../../../context/BlogContext";
import { NavigationItem } from "../../atoms";
import "./Navigation.scss";

const Navigation = (props) => {
  const {
    pages,
    setCurrentPage,
    currentPage,
    navigationItems,
    windowSize,
    navigationNumber,
  } = useContext(BlogContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [minPages, setMinPages] = useState(pages > navigationNumber);
  const [maxPages, setMaxPages] = useState(
    currentPage <= pages - (navigationNumber + 1)
  );

  useEffect(() => {
    if (windowSize > 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [windowSize]);

  useEffect(() => {
    setMinPages(pages > navigationNumber);
    setMaxPages(currentPage <= pages - (navigationNumber + 1));
    if (isDesktop) {
      if (currentPage > pages) {
        setCurrentPage(0);
      }
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
