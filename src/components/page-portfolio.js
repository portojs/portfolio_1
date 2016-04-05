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
              A simple page designed in order to test my skills
              and complete a Free Code Camp task. At first I didn&#39;t
              know where to start and just copying a provided example
              was too boring. Then one day I saw a nice sliding animation
              and something clicked - finally there was something interesting
              I wanted to try. As for Stephen King - I read so much
              of his books when in my teens, so it was an easy choice.
            </p>
            <h4>Technologies:</h4>
            <ul>
              <li>JavaScript</li>
              <li>Jquery</li>
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
