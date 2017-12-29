'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;
const Home = require('./pages/home/index.jsx');
const About = require('./pages/about/index.jsx');
const NotFound = require('./pages/shared/404/index.jsx');
const Actions = require('./pages/shared/actions');

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    window.onhashchange = () => {
      const modal = document.querySelector('.overlay');

      if (!modal.classList.contains('hidden') && !window.location.hash) {
        Actions.toggleContactForm();
      }
    }
  }

  handlePageUpdate() {
    // don't scroll when leaving 404 example
    if (window.markTest) {
      window.markTest = false;
      return;
    }
    // flag to mark 404 example
    if (window.location.pathname === '/lost') {
      window.markTest = true;
    }
    // hash for contact form
    // don't scroll when leaving modal
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <Router onUpdate={this.handlePageUpdate} history={browserHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Router>
    );
  }
}

module.exports = AppRouter;
