import { Navbar, Footer, Slider } from "../../organisms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider
        length="8"
        title="Try this delicious recipe
to make your day"
      />
      <Footer />
    </div>
  );
}
