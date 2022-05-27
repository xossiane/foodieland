import React, { useState } from "react";
import { SearchIcon } from "../../atoms";
import "./SearchBlog.scss";
import articles from "/src/data/articles.json";

function SearchBlog() {
  const [searchInput, setSearchInput] = useState("");
  const [blogList, setBlogList] = useState("");

  const searchInputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  console.log(articles);

  return (
    <form className="search-form">
      <input
        className="search-form__input"
        placeholder="Search article, news or recipe..."
        value={searchInput}
        onChange={searchInputHandler}
      />
      <button className="search-form__button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBlog;
