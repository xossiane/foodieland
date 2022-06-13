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
      <main>
        <BlogHeader />
        <section className="blog__content">
          <Articles />
          <Recipes />
        </section>
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}
