import React, { Component } from 'react';

class PagePortfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="content">
        <div className="content-title">
          <h2>PORTFOLIO</h2>
        </div>
        <div className="left-column">
          <a href="http://codepen.io/GuRuGu/full/ONPXKb/" target="_blank">
            <img src="src/img/portfolio-content1_2.jpg" label="Stephen King Tribute Page" />
          </a>
        </div>
        <div className="right-column">
          <h3>Title:</h3>
          <p className="project-title">Stephen King Tribute Page</p>
          <h3>Description:</h3>
          <p>
            This was a Free Code Camp task. At first I didn&#39;t
            know how to approach it, because simply copying an example
            was not much of a challenge.
          </p>
          <p>
            But one day I saw a nice sliding animation and
            something clicked - finally there was something
            interesting I wanted to try.
          </p>
          <p>
            As for why I decided to dedicate this page to
            Stephen King - in my teens I read so many
            of his books that it was no choice at all.
          </p>
          <h3>Technologies:</h3>
          <ul>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PagePortfolio;
