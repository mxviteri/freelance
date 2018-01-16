'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const Link = require('react-router').Link;
const Header = require('../shared/header/index.jsx');
const Contact = require('../shared/contact/index.jsx');
const Actions = require('../shared/actions');
const ogImage = require('../../img/ogexample.png');
const notFoundImage = require('../../img/404example.jpg');
const awsImage = require('../../img/awsimage.png');

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Contact />
        <div className="about">
          <Header />
          <div className="aboutPage">
            <div className="aboutCenter">
              <div className="aboutContent">
                <div className="row">
                  <h3>Custom mobile menus!</h3>
                  <p>Everything from fonts to animations can be customized to optimize your mobile user experience <span>🎉</span></p>
                  <div className="col-md-6 pad">
                    <div className="giphyStyle">
                      <iframe src="https://giphy.com/embed/xT1R9SjredlPq3eAE0" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                  <div className="col-md-6 pad">
                    <div className="giphyStyle">
                      <iframe src="https://giphy.com/embed/xUNd9GIkztCqpbEvfi" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Open Graph/Social Images</h3>
                  <p>What's that stuff that shows up when I share my website on Facebook or Twitter? Don't worry.. I gotcha covered <span>👨‍👩‍👧‍👦</span></p>
                  <div className="col-md-12 pad">
                    <div className="embed">
                      <img src={ogImage} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Custom loading screens..</h3>
                  <p>If necessary. Don't worry, my loading times are <i><b>NOT</b></i> a problem <span>😉</span></p>
                  <div className="col-md-12 pad">
                    <div className="giphyStyle landscape">
                      <iframe src="https://giphy.com/embed/3o6nUUZ9Jklc76H49q" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Need SEO? Here's SEO!</h3>
                  <p>All pages are written semantically and tools like Prerender improve search engine optimization <span>🌎</span></p>
                  <div className="col-md-12 pad">
                    <div className="seo">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Error States!</h3>
                  <p>User error? Let's handle that gracefully <span>👍</span></p>
                  <div className="col-md-12 pad">
                    <div className="giphyStyle landscape">
                      <iframe src="https://giphy.com/embed/xT1R9RAC3tj0kPrIkw" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>Personalized 404 Pages</h3>
                  <p>Wrong url, right display. Let your community know they got lost with pages such as the one below! Or check out mine <Link to="/lost">here</Link> <span>🛶</span></p>
                  <div className="col-md-12 pad">
                    <div className="embed">
                      <img src={notFoundImage} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h3>But does my website scale?</h3>
                  <p>Come on.. would I make you a site that doesn't scale? Of course not! Sites are hosted using Amazon Web Services where you and I have full control over all servers and resources <span>💻</span></p>
                  <div className="col-md-12 pad">
                    <div className="embed">
                      <img src={awsImage} className="aws" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 pad">
                    <h3>So what are you waiting for? <a href="javascript:void(0);" onClick={Actions.toggleContactForm}>Send me an email!</a></h3>
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

module.exports = About;
