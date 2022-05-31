import React, { useState } from "react";
import articles from "/src/data/articles.json";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
  pages: "",
  dataArticles: [],
  setCurrentPage: () => {},
  currentPage: "",
  navigationItems: "",
});

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const [itensPerPage, setItensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const getFilteredArray = () => {
    let array = articles.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return array;
  };

  const changeCurrentPageHandler = (index) => {
    setCurrentPage(index);
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const pages = Math.ceil(getFilteredArray().length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = itensPerPage + startIndex;
  let navigationItems = [];

  if (currentPage + 2 < pages - 1) {
    navigationItems = [currentPage, currentPage + 1, currentPage + 2];
  } else {
    navigationItems = [pages - 3, pages - 2, pages - 1];
  }

  const dataArticles = getFilteredArray().slice(startIndex, endIndex);

  return (
    <SearchBlogContext.Provider
      value={{
        searchInput,
        searchInputHandler,
        getFilteredArray,
        pages: pages,
        dataArticles: dataArticles,
        setCurrentPage: changeCurrentPageHandler,
        currentPage: currentPage,
        navigationItems: navigationItems,
      }}
    >
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
