import React, { useState } from "react";
import articles from "/src/data/articles.json";
import usePagination from "../hooks/usePagination";

export const BlogContext = React.createContext({
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

const BlogContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const getFilteredArray = () => {
    let array = articles.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return array;
  };
  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

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

  const [pagination, setCurrentPage, changeNavigationItensHandler, windowSize] =
    usePagination(mobileConfig, desktopConfig);

  const changeCurrentPageHandler = (index) => {
    setCurrentPage(index);
  };

  const navigation = changeNavigationItensHandler(getFilteredArray());

  const dataArticles = getFilteredArray().slice(
    navigation.startIndex,
    navigation.endIndex
  );

  return (
    <BlogContext.Provider
      value={{
        searchInput,
        searchInputHandler,
        getFilteredArray,
        pages: navigation.pages,
        dataArticles: dataArticles,
        setCurrentPage: changeCurrentPageHandler,
        currentPage: pagination.currentPage,
        navigationItems: navigation.navigationItems,
        navigationNumber: pagination.navigationNumber,
        windowSize: windowSize,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
