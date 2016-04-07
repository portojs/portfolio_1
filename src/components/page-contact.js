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
            <p>
              Later on this is where the contact form is going to be.
              As for now please use other means of communication
              listed here.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
