import {
  Navbar,
  Footer,
  NewsletterForm,
  BlogHeader,
  Articles,
  Recipes,
} from "../../organisms";

import "./Blog.scss";

export default function Blog() {
  return (
    <>
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
