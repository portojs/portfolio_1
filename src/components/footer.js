import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="content-footer">
        <div className="left-column">
          <h3>ABOUT THIS PAGE</h3>
          <p>Created with a lot of music and coffee by Peter.</p>
        </div>
        <div className="right-column">
          <h3>AROUND THE WEB</h3>
          <ul>
            <li><a href="https://twitter.com/peter_krevenets" target="_blank"><i className="fa fa-twitter-square fa-2x"></i></a></li>
            <li><a href="https://ua.linkedin.com/in/peter-krevenets-35b50b33" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></a></li>
            <li><a href="https://github.com/GuRuGuMaWaRu" target="_blank"><i className="fa fa-github-square fa-2x"></i></a></li>
          </ul>
        </div>
        <p className="copyright">&copy; Peter Krevenets, 2016.</p>
      </div>
    );
  }
}

export default Footer;
