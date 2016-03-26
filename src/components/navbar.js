import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li className="btns" id="btn1"></li>
          <li className="btns" id="btn2"></li>
          <li className="btns" id="btn3"></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
