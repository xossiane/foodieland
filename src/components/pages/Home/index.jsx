import HomeRecipesSlider from "../../organisms/HomeRecipes";
import { Navbar, Footer, HomeHeader, Categories } from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <Categories />
      <HomeRecipesSlider />
      <Footer />
    </div>
  );
}
