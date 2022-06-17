import {
  Navbar,
  Footer,
  HomeBanner,
  Categories,
  LearnMore,
  InstagramSection,
  Slider,
  NewsletterForm,
  HomeRecipesSlider,
} from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <Categories />
      <HomeRecipesSlider />
      <LearnMore />
      <InstagramSection />
      <Slider
        className="slider--homeSlider"
        length="8"
        title="Try this delicious recipe to make your day"
        subtitle="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      />
      <NewsletterForm />
      <Footer />
    </div>
  );
}
