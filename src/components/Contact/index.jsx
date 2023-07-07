import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row">
        <div className="twelve columns header-col">
            <h1>Get In Touch for a quote or consultation.</h1>
          </div>
        </div>
        <div className="row section-head">
          <div className="twelve columns">
            <p className="lead">Contact us at <a href="mailto:anthonywebsol@gmail.com">anthonywebsol@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

    );
  }
}
