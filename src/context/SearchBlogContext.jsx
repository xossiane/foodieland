import React, { useState } from "react";
import articles from "/src/data/articles.json";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
  pages: "",
  dataArticles: [],
});

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const [itensPerPage, setItensPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(articles.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = itensPerPage + startIndex;

  const dataArticles = articles.slice(startIndex, endIndex);

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
      value={{
        searchInput,
        searchInputHandler,
        getFilteredArray,
        pages: pages,
        dataArticles: dataArticles,
      }}
    >
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
