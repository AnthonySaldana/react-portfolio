import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline h2">Saldana Consulting</h1>
            <h3>Based in Los Angeles, We create awesome and
              effective applications & sites for companies of all sizes.</h3>
            <hr />
            <ul className="social">
              <li><a target="_blank" href="https://www.linkedin.com/in/anthony-saldana-jr/"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
    );
  }
}
