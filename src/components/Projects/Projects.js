import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './projects.css';
import '../Menu/Menu.css';

const Projects = () => {

    return (
        <div className="cont">
        <Menu />
            <h1>Portfolio</h1>
            <Link to="/">Back to Home page</Link>
        </div>
    );
};

export default Projects;