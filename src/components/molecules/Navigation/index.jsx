import React, { useContext } from "react";
import { SearchBlogContext } from "../../../context/SearchBlogContext";
import { NavigationItem } from "../../atoms";
import "./Navigation.scss";

const Navigation = (props) => {
  const { pages } = useContext(SearchBlogContext);

  return (
    <div className="navigation">
      {Array.from({ length: pages }).map((_, index) => (
        <NavigationItem key={index + 1} label={index + 1} />
      ))}
    </div>
  );
};

export default Navigation;
