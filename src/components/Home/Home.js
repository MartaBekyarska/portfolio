import React from 'react';
import marta from '../../images/marta.jpg';
import './home.css';
import Menu from '../Menu/Menu';
import Footer1 from '../Footer/Footer1';

const Home = () => {
  return (
    <div className="head">
    <Menu />
      <div className="row" id="content">
        <div className="column1">
          <img className="marta" src={marta} alt="myself" />
        </div>
        <div className="column2">
          <h2>Hello!</h2>
          <p>I'm a JavaScript Developer.
            My passion dominates in coding because I like to create beautiful and efficient websites.
            Always keeping it clean and simple with added functionality whether it be in HTML, CSS or JavaScript.</p>
        </div>
      </div>
      <div id="background"></div>
      {/* <footer> */}
        <div className="icons">
          <a href="https://github.com/MartaBekyarska"><i className="fab fa-github" id="github" /></a>
          <a href="https://www.linkedin.com/in/marta-bekyarska-4280b7137/"><i className="fab fa-linkedin" id="linkedin" /></a>
        </div>
      {/* </footer> */}
      <Footer1 />
    </div>
  );
};
export default Home;