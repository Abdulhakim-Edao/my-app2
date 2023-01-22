
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={ <Contact />} />
      <Route path="/projects" element={ <Projects />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
