import React, { Component } from 'react';

class PagePortfolio extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="splash">
          <div className="splash-title">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="content">
          <ul>
            <li>
              <a href="http://codepen.io/GuRuGu/full/ONPXKb/" target="_blank">
                <img src="src/img/portfolio-content1.jpg" label="Stephen King Tribute Page" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PagePortfolio;
