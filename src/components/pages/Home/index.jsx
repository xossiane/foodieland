import { Navbar, Footer, Slider } from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider
        className="slider--homeSlider"
        length="8"
        title="Try this delicious recipe
to make your day"
      />
      <Footer />
    </div>
  );
}
