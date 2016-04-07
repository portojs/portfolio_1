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
            <form id="contactForm" noValidate>
              <div>
                <span></span>
                <label htmlFor="form-name">Name:</label>
              </div>
                <input id="form-name" type="text" required />
              <div>
                <span></span>
                <label htmlFor="form-email">Email address:</label>
              </div>
                <input id="form-email" type="text" required />
              <div>
                <span></span>
                <label htmlFor="form-message">Message:</label>
              </div>
                <textarea rows="4" id="form-message" required />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="right-column">
            <p>
              If you have any questions or propositions,
              please do not hesitate to contact me!
            </p>
            <p>
              The contact form to the left is currently
              not functioning, but you can use email:
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              <a href="mailto:peter.k.nets@gmail.com">peter.k.nets@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
