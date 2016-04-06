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
              programming and other interesting things,
              feel free to write me a couple of lines.
            </p>
          </div>
          <div className="right-column">
            <ul className="">
              <li>
                <a href="" target="_blank"><i className="fa fa-envelope-o"></i></a>
              </li>
              <li><a href="" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
              <li><a href="" target="_blank"><i className="fa fa-facebook-square"></i></a></li>
              <li><a href="" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
              <li><a href="" target="_blank"><i className="fa fa-github-square"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
