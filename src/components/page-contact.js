import React, { Component } from 'react';

class PageContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  checkForm(ev) {
    ev.preventDefault();
    const errors = this.validateFields(document.forms['contactForm']);
    if (errors.name) {
      $('#form-name').next().css('opacity','1');
    } else if (!errors.name) {
      $('#form-name').next().css('opacity','0');
    }
    if (errors.email) {
      $('#form-email').next().css('opacity','1');
    } else if (!errors.email) {
      $('#form-email').next().css('opacity','0');
    }
    if (errors.message) {
      $('#form-message').next().css('opacity','1');
    } else if (!errors.message) {
      $('#form-message').next().css('opacity','0');
    }

  }

  validateFields(formData) {
    const errors = {};

    if (!formData['name'].value) {
      errors.name = 'Please enter your name';
    }
    if (!formData['email'].value) {
      errors.email = 'Please enter your email';
    }
    if (!formData['message'].value) {
      errors.message = 'Please enter your message';
    }

    return errors;
  }

  render() {
    return (
      <div id="contact">
        <div className="content">
          <div className="content-title">
            <h2>CONTACT</h2>
          </div>

          <div className="left-column">
            <form onSubmit={event => this.checkForm(event)} name="contactForm" noValidate>
              <div>
                <span></span>
                <label htmlFor="form-name">Name:</label>
              </div>
                <input id="form-name" type="text" name="name" required />
                <p className="warning-message">Please enter your name</p>
              <div>
                <span></span>
                <label htmlFor="form-email">Email address:</label>
              </div>
                <input id="form-email" type="email" name="email" required />
                <p className="warning-message">Please enter your email address</p>
              <div>
                <span></span>
                <label htmlFor="form-message">Message:</label>
              </div>
                <textarea rows="4" id="form-message" name="message" required />
                <p className="warning-message">Please enter your message</p>
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
              not functioning, so you can send an email to:
            </p>
            <p>
              <a href="mailto:peter.k.nets@gmail.com">
                <i className="fa fa-envelope"></i>
                peter.k.nets@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PageContact;
