import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li><Link to="/" className="logo">Marta Bekyarska</Link></li>
                <li><Link to="/" className="home">Home</Link></li>
                <li><Link to="/projects" className="projects">Projects</Link></li>
                <li><Link to="/skills" className="skills">Skills</Link></li>
                <li><Link to="/contact" className="contact">Contact</Link></li>
            </ul>
        </nav>
    );
};
export default Menu;