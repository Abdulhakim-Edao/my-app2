import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Projects from './components/Projects';
import './App.css'

const Navbar = () => {
  return (
      <nav className="navbar">
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/projects">Projects</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
          </ul>
      </nav>
  )
}

function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
      </div>
  );
}

export default App;
