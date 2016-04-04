import React, { Component } from 'react';

class PageAbout extends Component {
  render() {
    return (
      <div id="about">
        <div className="splash">
          <div className="splash-title">
            <h1>Peter Krevenets | Web Developer</h1>
          </div>
        </div>
        <div className="content">
          <div className="left-column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="right-column">
            <img src="src/img/about-avatar.jpg" alt="Photo of Peter Krevenets" />
          </div>
        </div>
      </div>
    );
  }
}

export default PageAbout;
