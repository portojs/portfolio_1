import React, { Component } from 'react';

class PagePortfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="content">
          <div className="content-title">
            <h1>Portfolio</h1>
          </div>
          <ul>
            <li>
              <a href="http://codepen.io/GuRuGu/full/ONPXKb/" target="_blank">
                <img src="src/img/portfolio-content1_2.jpg" label="Stephen King Tribute Page" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PagePortfolio;

// <img src="src/img/portfolio-content1_2.jpg" label="Stephen King Tribute Page" />
