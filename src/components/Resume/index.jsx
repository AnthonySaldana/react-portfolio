import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return(
      <section id="resume">
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="five columns">
            <h2>Anthony Saldana</h2>
            <small>(Sr. Software Engineer & Consultant)</small>
          </div>
          <div className="seven columns main-col" style={{ textAlign: 'left' }}>
          <h2>Experience</h2>
            <div className="row item">
              <div className="twelve columns">
                <h4>MotorTrend (Warner Bros Discovery)</h4>
                <p className="info">Software Engineer II<span>•</span> <em className="date">2019 - 2023</em></p>
                <p>As Lead full stack developer I shipped various features utilizing React and GraphQL.
                  This required development and collaboration across 3 codebases,
                  and delegating tasks across 2 teams. Through my leadership,
                  we were able to deliver features on-time and with high quality,
                  contributing to the platform's success.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h4>Ayzenberg</h4>
                <p className="info">Software Engineer <span>•</span> <em className="date">2017 - 2019</em></p>
                <p>
                  Fullstack product development on a social - brand matching platform.
                  Manage and develop features on alistdaily, a high traffic media platform for the marketing community.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h4>ONYX Design</h4>
                <p className="info">Web Developer <span>•</span> <em className="date">2015 - 2017</em></p>
                <p>
                Develop sites & online stores for a multitude of different small brands across various industries such as: film, photography, sports, fashion, education and more.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h4>Hypewell</h4>
                <p className="info">Web Developer <span>•</span> <em className="date">2014 - 2015</em></p>
                <p>
                  Leading web development and collecting client requirements for many websites within the restaurant & food industry.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
      </section> 
    )
  }
}
