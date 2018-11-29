import React from 'react';
import { Link } from 'react-router-dom';
import unsplash from '../images/unsplash.jpg';
import '../css/home.css';

const Home = () => {
  return (
    <div className="message">
      <div className="wrapImage">
        <img src={unsplash} alt="img" />
      </div>
      <div>
        <div className="buttons">
          <button class="btn-hover color-2"><Link to="/contact">Contact me</Link></button>
          <button class="btn-hover color-2"><Link to="/about">About me</Link></button>
        </div>
      </div>
      <div className="wrapText">
        <h1>Welcome! My name is Marta. I'm a Front End developer working with JavaScript and React with experience in testing.</h1>
      </div>
      <div className="fabs">
        <i class="fab fa-linkedin-in" />
        <i class="fab fa-twitter" />
      </div>
      <div className="intro">
        <h2>My passion dominates in coding because I like to create beautiful and efficient websites. Always keeping it clean and simple with added functionality whether it be in HTML, CSS or Javascript.</h2>
      </div>
    </div>
  );
};
export default Home;