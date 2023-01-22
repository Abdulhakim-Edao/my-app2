import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to my portfolio!</h1>
            <p className="home-text">This is my personal website where you can learn more about me and see some of my projects.</p>
            <nav className="home-nav">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Home;
