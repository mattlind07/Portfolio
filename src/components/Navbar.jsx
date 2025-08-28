import logo from '../assets/MLlogo.png';
import {Link } from 'react-router-dom';


function Navbar() {
    return (
        
        <nav className="navbar">
        <div className='branding'>
        <Link to="/">   
          <img className="logo" src={logo}/>
        </Link>
          <h1 className="Name">Matthew Lindsey</h1>
        </div>
          <ul>
            <Link to="/about" className="navbutton">About Me</Link>
            <Link to="/projects" className="navbutton">Projects</Link>
            <Link to="/resume" className="navbutton">Resume</Link>
            <Link to="/contact" className="navbutton">Contact</Link>
          </ul>
        </nav>


    );
}

export default Navbar;