import { Navbar, Footer, NewsletterForm } from "../../organisms";
import { NavigationItem } from "../../atoms";
export default function Blog() {
  return (
    <>
      <Navbar />
      <NavigationItem label="1" />
      <NavigationItem label="2" />
      <NavigationItem label="3" className="navigation__item--active" />
      <NewsletterForm />
      <Footer />
    </>
  );
}
