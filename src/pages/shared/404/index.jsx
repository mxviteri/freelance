'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Contact = require('../contact/index.jsx');
const Header = require('../header/index.jsx');

class NotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Contact />
        <div className="fourOhFour">
          <Header />
          <div className="notFound">
            <h1>404</h1>
            <h3>Woah dude! Nothing to see here</h3>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = NotFound;
