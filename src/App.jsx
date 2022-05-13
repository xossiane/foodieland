import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import Formulario from "./components/formularioComponent/FormularioComponent";
import Newsletter from './components/formulario/Formulario'
import Slider from "./components/Slider/organisms/Slider/";

function App() {

  return (
    <>
    <Navbar/>
    <Formulario />;
    <Newsletter />
    <Slider/>
    <Footer/>
    </>
  
  )

}
export default App;
