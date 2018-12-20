import React, { Component } from 'react';
import marta from '../../images/marta.jpg';
import './home.css';
import Menu from '../menu/Menu';
import SideDrawer from '../SideDrawer/SideDrawer.js';
import Backdrop from '../Backdrop/Backdrop';
import Footer1 from '../footer/Footer1';

class Home extends Component {
  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{ height: '100%' }}>
        <Menu drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
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
          {/* <div id="background">
      </div> */}
          <div className="background-white">
          </div>
        </main>
        <Footer1 />
      </div>
    );
  };
}
export default Home;