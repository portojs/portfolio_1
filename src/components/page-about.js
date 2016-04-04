import React, { Component } from 'react';

class PageAbout extends Component {
  render() {
    return (
      <div id="about">
        <div className="content">
          <div className="content-title">
            <h1>Peter Krevenets | Web Developer</h1>
          </div>
          <div className="left-column">
            <p>
              My name is Peter and I&#39;m a full-time freelance translator
              discovering the world of coding. I like JavaScript and especially
              such frameworks as AngularJS and ReactJS.
            </p>
            <p>
              To enjoy life even more I dabble in sport, travelling,
              reading, listening to music, watching movies, and playing videogames.
            </p>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
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
