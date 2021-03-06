import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul className="fa-list">
          <li className="about">
            <a href="#about"><i className="fa fa-home"></i></a>
          </li>
          <li className="portfolio">
            <a href="#portfolio"><i className="fa fa-list-ul"></i></a>
          </li>
          <li className="contact">
            <a href="#contact"><i className="fa fa-envelope-o"></i></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
