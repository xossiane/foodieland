import React, { useState } from "react";
import articles from "/src/data/articles.json";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
});

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const getFilteredArray = () => {
    let array = articles.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return array;
  };

  return (
    <SearchBlogContext.Provider
      value={{ searchInput, searchInputHandler, getFilteredArray }}
    >
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
