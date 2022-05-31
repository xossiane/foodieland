import React, { useContext } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage, currentPage } = useContext(SearchBlogContext);

  return (
    <div className="navigation">
      {Array.from({ length: pages }).map((_, index) => (
        <NavigationItem
          className={currentPage === index ? "navigation__item--active" : ""}
          onClick={setCurrentPage}
          page={index}
          key={index}
          label={index + 1}
        />
      ))}
    </div>
  );
};

export default Navigation;
