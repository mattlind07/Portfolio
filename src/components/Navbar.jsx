import logo from '../assets/MLlogo.png';
import {Link } from 'react-router-dom';
import { useState } from 'react';


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        
        <nav className="navbar">
        <div className='branding'>
        <Link to="/" onClick={closeMenu}>   
          <img className="logo" src={logo} alt="Logo" />
        </Link>
          <h1 className="Name">Matthew Lindsey</h1>
        </div>
        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><Link to="/about" className="navbutton" onClick={closeMenu}>About Me</Link></li>
            <li><Link to="/projects" className="navbutton" onClick={closeMenu}>Projects</Link></li>
            <li><Link to="/resume" className="navbutton" onClick={closeMenu}>Resume</Link></li>
            <li><Link to="/contact" className="navbutton" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>


    );
}

export default Navbar;