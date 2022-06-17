import HomeRecipesSlider from "../../organisms/HomeRecipes";
import {
  Navbar,
  Footer,
  HomeHeader,
  Categories,
  LearnMore,
  InstagramSection,
} from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <Categories />
      <HomeRecipesSlider />
      <LearnMore />
      <InstagramSection />
      <Footer />
    </div>
  );
}
