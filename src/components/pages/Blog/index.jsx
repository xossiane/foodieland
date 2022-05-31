import {
  Navbar,
  Footer,
  NewsletterForm,
  BlogHeader,
  Articles,
  Recipes,
} from "../../organisms";
export default function Blog() {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <Articles />
      <Recipes />
      <NewsletterForm />
      <Footer />
    </>
  );
}
