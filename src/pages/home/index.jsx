'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const Contact = require('../shared/contact/index.jsx');
const Actions = require('../shared/actions');
// Import OG image, background image and favicon
const ogImage = require('../../img/ogimage.png');
const favicon = require('../../img/favicon.ico');
const teaching = require('../../img/teaching.png');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  scrollMiddle() {
    var scrollCoords = document.querySelector('.info').offsetTop + 15;

    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i += 10;
      if (i >= scrollCoords) {
        clearInterval(int);
      }
    }, 7);
  }

  scrollTop() {
    var i = window.scrollY;
    var int = setInterval(() => {
      window.scrollTo(0, i);
      i -= 10;
      if (i <= -10) {
        clearInterval(int);
      }
    }, 7);
  }

  render() {
    return (
      <div>
        <Contact />
        <div className="home">
          <div className="parallax">
            <div className="image-overlay"></div>
            <div className="mainContent">
              <div className="mainContent__headerImg">
              </div>
              <div className="mainContent__headline">
                <div className="name">
                  <h2>Matt Viteri</h2>
                </div>
                <div className="summary">
                  <h4>web designer</h4>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <h4>software engineer</h4>
                  <i className="fa fa-circle" aria-hidden="true"></i>
                  <h4>instructor</h4>
                </div>
              </div>
              <div className="mainContent__social">
                <a href="https://github.com/mxviteri/" target="_blank"><i className="fa fa-github fa-2x"></i></a>
                <a href="https://linkedin.com/in/mxviteri/" target="_blank"><i className="fa fa-linkedin fa-2x"></i></a>
                <a href="https://codepen.io/mxviteri/" target="_blank"><i className="fa fa-codepen fa-2x"></i></a>
              </div>
            </div>
            <div className="bottom">
              <span className="white" onClick={this.scrollMiddle}><i className="fa fa-angle-down" aria-hidden="true"></i></span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon fill="white" points="0,100 100,0 100,100"/>
            </svg>
          </div>
          <div className="info">
            <div className="row bio">
              <div className="col-wrapper">
                <div className="col-md-6">
                  <h3>Bio</h3>
                  <p>
                    I'm a software engineer currently working in Austin where I build ecommerce
                    software that helps small and medium sized businesses create a web presence. If
                    you don't have an image in your head, think Shopify or Wix! When I'm not
                    coding you can find me at the greenbelt with my dog!
                  </p>
                </div>
                <div className="col-md-6">
                  <h3>How It Works</h3>
                  <p>
                    Tell me what you like! I can work with Sketch and sitemaps or you can send
                    me a couple websites you like and I'll put something together. I'll also go
                    back to the drawing board 3 times if we need to! I'd love to meet for lunch,
                    dinner, drinks or whatever fits your schedule. Cheers! <span>🍻</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row toAbout">
              <div className="col-wrapper">
                <div className="col-md-12">
                  <h3>Contact</h3>
                  <div className="row inception">
                    <div className="col-wrapper">
                      <div className="row">
                        <div className="col-md-12">
                          <p className="middle">I'm currently accepting select projects. Email me or see what I can do!</p>
                        </div>
                      </div>
                      <div className="col-md-8 col-md-offset-2 middle">
                        <button type="button" className="btn btn-primary outline-primary" onClick={Actions.toggleContactForm}>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </button>
                        <Link to="/about">
                          <button type="button" className="btn btn-primary outline-primary">
                            <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Home;
