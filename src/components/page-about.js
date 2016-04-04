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
              My name is Peter and I am a full-time freelance translator
              who discovered the world of coding. When I&#39;m not translating,
              I learn programming, and to enjoy life a little bit more I also
              fill it with sports, travelling, books, music, movies,
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
