import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright {new Date().getFullYear()} - Anthony Saldana</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    );
  }
}
