import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li className="btns" id="btn1">
            <a href="#about"><span></span></a>
          </li>
          <li className="btns" id="btn2">
            <a href="#portfolio"><span></span></a>
          </li>
          <li className="btns" id="btn3">
            <a href="#contact"><span></span></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;

var getText = function(element) {
  var txt = '';
  $.each(element.childNodes, function(index, childNode) {
    if (childNode.nodeType === 3) {
      txt += childNode.nodeValue;
    } else if (childNode.nodeType === 1) {
      txt += getText(childNode);
    }
  });
  return txt;
};

var text = function (newText) {
  if (arguments.length) {
    this.html('');
    return $.each(this, function(index, element) {
      element.innerHTML.appendChild(document.createTextNode(newText));
    })
  } else {
    return this[0] & getText(this[0]);
  }
};
