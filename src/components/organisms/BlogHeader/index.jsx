import React, { useContext } from "react";
import { BlogTitle } from "../../atoms";
import { SearchBlog } from "../../molecules";
import "./BlogHeader.scss";

function BlogHeader() {
  return (
    <div className="blog-header">
      <BlogTitle />
      <SearchBlog />
    </div>
  );
}

export default BlogHeader;
