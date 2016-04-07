import React, { Component } from 'react';

class PageContact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="content">
          <div className="content-title">
            <h2>CONTACT</h2>
          </div>
          <div className="left-column">
            <p>
              If you have any questions or propositions,
              please do not hesitate to contact me!
            </p>
            <p>
              You can use the following email address:
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              <a href="mailto:peter.k.nets@gmail.com">peter.k.nets@gmail.com</a>
            </p>
          </div>
          <div className="right-column">
            <ul>
              <li><a href="https://twitter.com/peter_krevenets" target="_blank"><i className="fa fa-twitter-square fa-5x"></i></a></li>
              <li><a href="https://ua.linkedin.com/in/peter-krevenets-35b50b33" target="_blank"><i className="fa fa-linkedin-square fa-5x"></i></a></li>
              <li><a href="https://github.com/GuRuGuMaWaRu" target="_blank"><i className="fa fa-github-square fa-5x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
