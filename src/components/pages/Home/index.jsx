import { Navbar, Footer } from "../../organisms";
import HomeRecipesSlider from "../../organisms/HomeRecipes";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <HomeRecipesSlider />
      <Footer />
    </div>
  );
}
