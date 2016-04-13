import React, { Component } from 'react';

class PageContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regexObj: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    };
  }

  // add red underlining if email is invalid
  verifyEmailAddress(email){
    this.state.regexObj.test(email) ?
      $('#form-email').removeClass('false-input') : $('#form-email').addClass('false-input');
  }

  // show error message if input field is invalid
  checkInput(inputField) {
    if (inputField.attr('id') === 'form-email') {
      this.state.regexObj.test(inputField.val()) ? inputField.next().css('opacity','0') : inputField.next().css('opacity','1');
    } else {
      inputField.val() ? inputField.next().css('opacity','0') : inputField.next().css('opacity','1');
    }
  }

  // check input fields for beign valid
  checkForm(ev) {
    ev.preventDefault();
    this.checkInput($('#form-name'));
    this.checkInput($('#form-email'));
    this.checkInput($('#form-message'));
  }

  render() {
    return (
      <div id="contact">
        <div className="content">
          <div className="content-title">
            <h2>CONTACT</h2>
          </div>
          <span className="left-column">
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
                <input id="form-email" type="email" name="email"
                  onChange={event => this.verifyEmailAddress(event.target.value)}
                  required />
                <p className="warning-message">Please enter your email address</p>
              <div>
                <span></span>
                <label htmlFor="form-message">Message:</label>
              </div>
                <textarea rows="4" id="form-message" name="message" required />
                <p className="warning-message">Please enter your message</p>
              <button type="submit">Send</button>
            </form>
          </span>

          <span className="right-column">
            <p>
              If you have any questions or propositions,
              please do not hesitate to contact me!
            </p>
            <p>
              The contact form to the left is currently
              not functioning, but you can send an email instead:
            </p>
            <p>
              <a href="mailto:peter.k.nets@gmail.com">
                <i className="fa fa-envelope"></i>
                peter.k.nets@gmail.com
              </a>
            </p>
          </span>
        </div>
      </div>
    );
  }
}

export default PageContact;
