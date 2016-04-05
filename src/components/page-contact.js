import React, { Component } from 'react';

class PageContact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="content">
          <div className="content-title">
            <h1>CONTACT ME</h1>
          </div>
          <div className="left-column">
            <p>
              If you have any questions or wish to chat about
              universe and all other interesting things,
              feel free to write me a couple of lines.
            </p>
          </div>
          <div className="right-column">
            <ul className="fa-ul">
              <li><i className="fa-li fa fa-twitter"></i> Twitter</li>
              <li><i className="fa-li fa fa-facebook"></i> Facebook</li>
              <li><i className="fa-li fa fa-linkedin"></i> LinkedIn</li>
              <li><i className="fa-li fa fa-github-alt"></i> GitHub</li>
              <li><i className="fa-li fa fa-codepen"></i> Codepen</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
