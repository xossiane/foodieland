import { useState } from "react";
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
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <BlogForm setShowModal={setShowModal} />}
      <Navbar />
      <main>
        <BlogHeader />
        <section className="blog__content">
          <Articles setShowModal={setShowModal} />
          <Recipes />
        </section>
        <NewsletterForm />
      </main>
      <Footer />
    </>
  );
}
