import React, { Component } from 'react';

class PageAbout extends Component {
  render() {
    return (
      <div id="about">
        <div className="content">
          <div className="content-title">
            <h2>PETER KREVENETS | WEB DEVELOPER</h2>
          </div>
          <div className="left-column">
            <p>
              My name is Peter and I&#39;m a professional freelance translator
              discovering the world of coding.
            </p>
            <p>
              I like coding as a whole, so it&#39;s hard to choose one
              favourite programming languae, but for now it&#39;s
              JavaScript, especially AngularJS and ReactJS.
            </p>
            <p>
              To enjoy life even more I dabble in sport, travelling,
              reading, listening to music, watching movies, and playing videogames.
            </p>
            <ul className="skill-list">
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
