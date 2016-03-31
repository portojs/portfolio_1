import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li className="btns" id="btn1"><span></span></li>
          <li className="btns" id="btn2"><span></span></li>
          <li className="btns" id="btn3"><span></span></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
