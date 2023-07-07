import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="twelve columns">
            <h2>About</h2>
            <p>Dedicated to taking your business to the next level, I create smart and polished sites and applications. 
              Every button is a call to action and deserves care and intention. Every piece of text is a sales pitch working for you 24 hours a day, seven days a week.
              All elements of your business deserve the best and I deliver that.</p>
              <p>Whether you simply want to showcase what your business offers or have a need for custom infrastructure in your day to day operations,
              let's partner together and take your business to the next tier of success.</p>
          </div> {/* end .main-col */}
        </div>
      </section>
    );
  }
}
