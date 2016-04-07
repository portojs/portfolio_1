import React, { Component } from 'react';

class PageContact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="content">
          <div className="content-title">
            <h1>CONTACT</h1>
          </div>
          <div className="left-column">
            <p>
              If you have any questions or propositions,
              please do not hesitate to contact me!
            </p>
            <p>
              Following is my email address:
            </p>
            <p>
              <a href="#">peter.k.nets@gmail.com</a>
            </p>
          </div>
          <div className="right-column">
            <ul>
              <li><a href="" target="_blank"><i className="fa fa-twitter-square fa-5x"></i></a></li>
              <li><a href="" target="_blank"><i className="fa fa-linkedin-square fa-5x"></i></a></li>
              <li><a href="" target="_blank"><i className="fa fa-github-square fa-5x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
