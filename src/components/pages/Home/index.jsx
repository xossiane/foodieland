import HomeRecipesSlider from "../../organisms/HomeRecipes";
import { Navbar, Footer, HomeHeader } from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeHeader />
      <HomeRecipesSlider />

      <Footer />
    </div>
  );
}
