import { Navbar, Footer } from "../../organisms";
import HomeRecipes from "../../organisms/HomeRecipes";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <HomeRecipes />
      <Footer />
    </div>
  );
}
