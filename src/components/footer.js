import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="left-column">
          <h3>ABOUT THIS PAGE</h3>
        </div>
        <div className="right-column">
          <h3>AROUND THE WEB</h3>
        </div>
        <p>&copy; Peter Krevenets, 2016.</p>
      </div>
    );
  }
}

export default Footer;
