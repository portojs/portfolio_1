import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul className="fa-list">
          <li>
            <a href="#about"><i className="fa fa-home"></i></a>
          </li>
          <li>
            <a href="#portfolio"><i className="fa fa-list-ul"></i></a>
          </li>
          <li>
            <a href="#contact"><i className="fa fa-envelope-o"></i></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

// <ul>
//   <li className="btns" id="btn1">
//     <a href="#about"><span></span></a>
//   </li>
//   <li className="btns" id="btn2">
//     <a href="#portfolio"><span></span></a>
//   </li>
//   <li className="btns" id="btn3">
//     <a href="#contact"><span></span></a>
//   </li>
// </ul>
