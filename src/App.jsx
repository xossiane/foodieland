import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Blog />} />
    </Routes>
  );
}
export default App;
