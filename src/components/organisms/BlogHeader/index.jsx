import React, { useContext } from "react";
import { BlogTitle } from "../../atoms";
import { SearchBlog } from "../../molecules";
import { SearchBlogContext } from "/src/context/SearchBlogContext";

import articles from "/src/data/articles.json";
import "./BlogHeader.scss";

function BlogHeader() {
  const { searchInput } = useContext(SearchBlogContext);

  return (
    <div className="blog-header">
      <BlogTitle />
      <SearchBlog />
      <ul>
        {articles
          .filter((item) =>
            item.title.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default BlogHeader;
