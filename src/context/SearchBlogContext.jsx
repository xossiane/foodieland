import React, { useState, useEffect, useReducer, useContext } from "react";
import articles from "/src/data/articles.json";
import usePagination from "../hooks/usePagination";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
  pages: "",
  dataArticles: [],
  setCurrentPage: () => {},
  currentPage: "",
  navigationItems: "",
  navigationNumber: "",
  articles: [],
});

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const desktopConfig = {
    itensPerPage: 6,
    navigationNumber: 5,
    hasPageNumber: 4,
  };

  const mobileConfig = {
    itensPerPage: 3,
    navigationNumber: 3,
    hasPageNumber: 2,
  };

  const [pagination, setCurrentPage, windowSize] = usePagination(
    mobileConfig,
    desktopConfig
  );

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

  const pages = Math.ceil(getFilteredArray().length / pagination.itensPerPage);
  const startIndex = pagination.currentPage * pagination.itensPerPage;
  const endIndex = pagination.itensPerPage + startIndex;
  const lastPage = pages - 1;
  let navigationItems = [];

  if (pagination.currentPage + pagination.hasPageNumber < lastPage) {
    for (let i = 0; i < pagination.navigationNumber; i++) {
      navigationItems.push(pagination.currentPage + i);
    }
  } else {
    for (let i = pagination.navigationNumber; i > 0; i--) {
      navigationItems.push(pages - i);
    }
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
        currentPage: pagination.currentPage,
        navigationItems: navigationItems,
        navigationNumber: pagination.navigationNumber,
        windowSize: windowSize,
      }}
    >
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
