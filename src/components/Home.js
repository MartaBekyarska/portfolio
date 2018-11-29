import React from 'react';
import unsplash from '../images/unsplash.jpg';
import '../css/home.css';

const Home = () => {
  return (
        <div className="message">
          <div className="wrapImage">
            <img src={unsplash} alt="spiral-steps" />
          </div>
          <div className="wrapText">
            <h1>Welcome! My name is Marta. I'm a Front End developer working with JavaScript and React with experience in testing.</h1>
          </div>
        </div>
  );
};
export default Home;