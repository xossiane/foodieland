import {
  Navbar,
  Footer,
  NewsletterForm,
  BlogHeader,
  Articles,
  Recipes,
} from "../../organisms";
import BlogForm from "../../organisms/BlogForm";

import "./Blog.scss";

export default function Blog() {
  return (
    <>
      <BlogForm />
      <Navbar />
      <BlogHeader />
      <div className="blog__content">
        <Articles />
        <Recipes />
      </div>
      <NewsletterForm />
      <Footer />
    </>
  );
}
