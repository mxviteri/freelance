'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const request = require('request');
const Actions = require('../actions');

const baseUrl = window.location.origin;

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sending: false,
      sent: false,
      message: null
    }
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();
    this.setState({
      sending: true
    });

    const options = {
      url: `${baseUrl}/send`,
      method: 'POST',
      json: true,
      body: {
        firstName: e.target.firstName.value,
        email: e.target.email.value,
        message: e.target.message.value
      }
    };

    request(options, (err, res, body) => {
      const message = res.statusCode === 200 ? 'success' : 'failure';
      this.setState({
        sending: false,
        sent: true,
        message: message
      });
      setTimeout(() => {
        Actions.toggleContactForm();
        this.setState({
          sending: false,
          sent: false,
          message: null
        });
      }, 2000);
    });
  }

  render() {
    if (this.state.sending) {
      return (
        <div>
          <div className="overlay">
            <div className="contact">
              <div className="status">
                <div className="loader"></div>
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.state.sent) {
      const iconClass = this.state.message === 'success' ? 'fa fa-check' : 'fa fa-times';
      const userMessage = this.state.message === 'success' ? `Thanks for the message! I'll get back to you within 24 hours!` : 'Something went wrong.. please try again';

      return (
        <div>
          <div className="overlay">
            <div className="contact">
              <div className={`status ${this.state.message}`}>
                <i className={iconClass} aria-hidden="true"></i>
                <p>{userMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="overlay hidden">
            <div className="contact">
              <div className="close" onClick={Actions.toggleContactForm}>
                <span>X</span>
              </div>
              <form role="form" onSubmit={this.sendForm}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="jdoe@johnsdomain.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message" placeholder="Hey Matt! Let's talk about a website!" required></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
}

module.exports = Contact;
