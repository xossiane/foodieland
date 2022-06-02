import React, { useContext } from "react";
import { BlogTitle } from "../../atoms";
import { SearchBlog } from "../../molecules";
import "./BlogHeader.scss";

function BlogHeader() {
  return (
    <section className="blog-header">
      <BlogTitle />
      <SearchBlog />
    </section>
  );
}

export default BlogHeader;
