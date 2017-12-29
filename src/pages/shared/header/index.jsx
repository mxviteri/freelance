'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const Actions = require('../actions');

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="row">
          <div className="col-md-12">
            <img src="/img/headshot.jpg" alt="headshot" height="50" width="50" />
            <Link to="/">
              <button type="button" className="btn btn-primary outline-primary">
                Home
              </button>
            </Link>
            <button type="button" className="btn btn-primary outline-primary" onClick={Actions.toggleContactForm}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = PageHeader;
