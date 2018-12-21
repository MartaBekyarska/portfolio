import React from 'react';
import Menu from '../menu/Menu';
import Footer1 from '../footer/Footer1';
import bootstrap from '../../images/bootstrap.jpg';
import CSS from '../../images/CSS_1200px.jpg';
import github from '../../images/github.png';
import html from '../../images/HTML.png';
import javascript from '../../images/javascript.png';
import react from '../../images/react.png';
import './Skills.css';

const Skills = () => {

    return (
        <div className="skills">
            <Menu />
            <h1>I can work with...</h1>
            <div className="grid">
                <div className="wrap-image1">
                    <img className="col a" src={html} alt="html" />
                </div>
                <div className="wrap-image1">
                    <img className="col b" src={CSS} alt="css" />
                </div>
                <div className="wrap-image1">
                    <img className="col c" src={javascript} alt="javascript" />
                </div>
                <div className="wrap-image1">
                    <img className="col d" src={react} alt="react" />
                </div>
                <div className="wrap-image1">
                    <img className="col e" src={github} alt="github" />
                </div>
                <div className="wrap-image1">
                    <img className="col f" src={bootstrap} alt="bootstrap" />
                </div>
            </div>
            <Footer1 />  
        </div>
    );
};

export default Skills;