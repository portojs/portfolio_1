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
              My name is Peter and I am a full-time freelance translator
              who discovered the world of coding. When I&#39;m not translating,
              I learn programming. To enjoy life a little bit more I also
              fill it with other things - sports, travelling, books, music, movies,
              videogames.
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
