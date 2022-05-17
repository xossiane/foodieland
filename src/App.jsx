import Navbar from "./components/Global/Navbar";
import "./App.css";
import Footer from "./components/Global//Footer";
import Formulario from "./components/Contact/Form/ContactForm";
import Newsletter from "./components/Contact/Newsletter/index";
import Slider from "./components/Contact/Slider/organisms/Slider/index";

function App() {
  return (
    <>
      <Navbar />
      <Formulario />;
      <Newsletter />
      <Slider />
      <Footer />
    </>
  );
}
export default App;
