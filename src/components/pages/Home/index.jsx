import { Navbar, Footer, Slider } from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider
        className="slider--homeSlider"
        length="8"
        title="Try this delicious recipe to make your day"
        subtitle="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      />
      <Footer />
    </div>
  );
}
