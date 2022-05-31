import React, { useContext } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages, setCurrentPage } = useContext(SearchBlogContext);

  return (
    <div className="navigation">
      {Array.from({ length: pages }).map((_, index) => (
        <NavigationItem
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
