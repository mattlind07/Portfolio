import logo from '../assets/MLlogo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const NAV_ITEMS = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar" aria-label="Main navigation">
            <Link to="/" className="branding" onClick={closeMenu}>
                <img className="logo" src={logo} alt="" />
                <span className="Name">Matthew Lindsey</span>
            </Link>

            <button
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen((open) => !open)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="nav-menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul id="nav-menu" className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
                {NAV_ITEMS.map(({ to, label }) => (
                    <li key={to}>
                        {/* NavLink adds the "active" class for the current page */}
                        <NavLink to={to} className="navbutton" onClick={closeMenu}>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
