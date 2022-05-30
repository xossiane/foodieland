import React, { useState } from "react";

export const SearchBlogContext = React.createContext({
  searchInput: "",
  searchInputHandler: () => {},
});

const SearchBlogProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <SearchBlogContext.Provider value={{ searchInput, searchInputHandler }}>
      {children}
    </SearchBlogContext.Provider>
  );
};

export default SearchBlogProvider;
