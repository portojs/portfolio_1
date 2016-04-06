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
            <h3>General information</h3>
            <p>
              If you have any questions or propositions,
              please do not hesitate to contact me!
            </p>
            <p>
              I&#39;m also interested in all the interesting bits
              on JavaScript, so if you know any great resources
              feel free to drop a few lines.
            </p>
            <p>
              Twitter and email are the best ways to reach me.
            </p>
          </div>
          <div className="right-column">
            <h3>Contact details</h3>
            <ul className="fa-ul">
              <li><a href="" target="_blank"><i className="fa-li fa fa-envelope-o"></i>peter.k.nets@gmail.com</a></li>
              <li><a href="" target="_blank"><i className="fa-li fa fa-twitter-square"></i>@peter_krevenets</a></li>
              <li><a href="" target="_blank"><i className="fa-li fa fa-facebook-square"></i>peter.krevenets</a></li>
              <li><a href="" target="_blank"><i className="fa-li fa fa-linkedin-square"></i>Peter Krevenets</a></li>
              <li><a href="" target="_blank"><i className="fa-li fa fa-github-square"></i>GuRuGuMaWaRu</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
