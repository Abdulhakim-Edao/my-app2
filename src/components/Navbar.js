import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">My Portfolio</Link>
            <div className="navbar-links">
                <Link to="/about" className="navbar-link">About</Link>
                <Link to="/projects" className="navbar-link">Projects</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
