import React from 'react';
import { Link } from 'react-router-dom';
import marta from '../images/marta.jpg';
import '../css/home.css';

const Home = () => {
  return (


    <div className="head">
      <nav>
        <ul className="menu">
          <li><Link to="/" className="logo">Marta Bekyarska</Link></li>
          <li><Link to="/" className="home">Home</Link></li>
          <li><Link to="/projects" className="projects">Projects</Link></li>
          <li><Link to="/resume" className="home">Resume</Link></li>
        </ul>
      </nav>
      <div className="row" id="content">
        <div className="column1">
          <img src={marta} alt="myself" />
        </div>
        <div className="column2">
          <h2>Hello!</h2>
          <p>I'm a JavaScript Developer.
            My passion dominates in coding because I like to create beautiful and efficient websites.
            Always keeping it clean and simple with added functionality whether it be in HTML, CSS or JavaScript.</p>
        </div>
      </div>
      <div id="background"></div>
      <footer>
      <i class="fab fa-github" id="github"></i>
      <i class="fab fa-linkedin" id="linkedin"></i>
      </footer>
    </div>

  );
};
export default Home;