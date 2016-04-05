import React, { Component } from 'react';

class PagePortfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="content">
          <div className="content-title">
            <h1>Portfolio</h1>
          </div>
          <div className="left-column">
            <a href="http://codepen.io/GuRuGu/full/ONPXKb/" target="_blank">
              <img src="src/img/portfolio-content1_2.jpg" label="Stephen King Tribute Page" />
            </a>
          </div>
          <div className="right-column">
            <h4>Title:</h4>
            <p>Stephen King Tribute Page</p>
            <h4>Description:</h4>
            <p>
              A test to my skills a Free Code Camp task. At first I didn&#39;t
              know where to start and just copying from the example
              seemed too boring. Then one day I saw a nice sliding animation
              and something clicked - finally there was something interesting
              I wanted to try. As for Stephen King - I read so many
              of his books in my teens that it was no choice at all.
            </p>
            <h4>Technologies:</h4>
            <ul>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PagePortfolio;

// <img src="src/img/portfolio-content1_2.jpg" label="Stephen King Tribute Page" />
