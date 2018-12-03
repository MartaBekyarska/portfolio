import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';

const Home = () => {
  return (
    <div className="main">

      <div className="hero">

        <div className="menu">
          <Link to="/" className="home">Home</Link>
          <Link to="/about" className="about">About me</Link>
        </div>
        <div className="wrapText">
          <h1>Welcome! My name is Marta. I'm a Front End developer working with JavaScript and React with experience in testing.</h1>
        </div>
        <div className="fabs">
          <a href="https://www.linkedin.com/in/marta-bekyarska-4280b7137"><i className="fab fa-linkedin-in" /></a>
          <i className="fab fa-twitter" />
        </div>
      </div>
      
      <div className="intro">
        <h2>My passion dominates in coding because I like to create beautiful and efficient websites. Always keeping it clean and simple with added functionality whether it be in HTML, CSS or Javascript.</h2>
      </div>

    </div>

  );
};
export default Home;