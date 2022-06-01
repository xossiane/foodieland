import React, { useState, useEffect, useReducer } from "react";
import articles from "/src/data/articles.json";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
  pages: "",
  dataArticles: [],
  setCurrentPage: () => {},
  currentPage: "",
  navigationItems: "",
  windowSize: 0,
});

const paginationReducer = (state, action) => {
  if (action.type === "CHANGE__CURRENT__PAGE") {
    return {
      itensPerPage: state.itensPerPage,
      currentPage: action.value,
      navigationNumber: state.navigationNumber,
      hasPageNumber: state.hasPageNumber,
    };
  }
  if (action.type === "CHANGE_RESOLUTION") {
    return {
      itensPerPage: action.itensPerPage,
      currentPage: state.currentPage,
      navigationNumber: action.navigationNumber,
      hasPageNumber: action.hasPageNumber,
    };
  }
};

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const paginationDefaultValue = {
    itensPerPage: 3,
    currentPage: 0,
    navigationNumber: 3,
    hasPageNumber: 2,
  };

  const [paginationState, dispatchPaginationState] = useReducer(
    paginationReducer,
    paginationDefaultValue
  );

  useEffect(() => {
    let timeoutId = null;
    const updateSize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWindowSize(window.innerWidth), 150);
    };
    window.addEventListener("resize", updateSize);
  }, []);
  console.log(windowSize);

  useEffect(() => {
    if (windowSize > 1024) {
      dispatchPaginationState({
        type: "CHANGE_RESOLUTION",
        itensPerPage: 6,
        navigationNumber: 5,
        hasPageNumber: 4,
      });
    } else {
      dispatchPaginationState({
        type: "CHANGE_RESOLUTION",
        itensPerPage: 3,
        navigationNumber: 3,
        hasPageNumber: 2,
      });
    }
  }, [windowSize]);

  const getFilteredArray = () => {
    let array = articles.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    return array;
  };

  const changeCurrentPageHandler = (index) => {
    dispatchPaginationState({ type: "CHANGE__CURRENT__PAGE", value: index });
  };

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const pages = Math.ceil(
    getFilteredArray().length / paginationState.itensPerPage
  );
  const startIndex = paginationState.currentPage * paginationState.itensPerPage;
  const endIndex = paginationState.itensPerPage + startIndex;
  const lastPage = pages - 1;
  let navigationItems = [];

  if (paginationState.currentPage + paginationState.hasPageNumber < lastPage) {
    for (let i = 0; i < paginationState.navigationNumber; i++) {
      navigationItems.push(paginationState.currentPage + i);
    }
  } else {
    for (let i = paginationState.navigationNumber; i > 0; i--) {
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
        currentPage: paginationState.currentPage,
        navigationItems: navigationItems,
        windowSize: windowSize,
      }}
    >
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
