import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here's a preview of my work.</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title>
                  <div style={{maxHeight: "200px", overflow: "hidden"}}>
                    <img alt src="images/portfolio/MTDsq.png" />
                  </div>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Motor Trend On Demand</h5>
                      <p>Streaming</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title>
                <div style={{maxHeight: "200px", overflow: "hidden"}}>
                  <img alt src="images/portfolio/alistdesktop.png" />
                </div>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>[a]listdaily</h5>
                      <p>Media/Marketing</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-03" title>
                <div style={{maxHeight: "200px", overflow: "hidden"}}>
                  <img alt src="images/portfolio/gmtools.png" />
                </div>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>GM Tools</h5>
                      <p>Market Aggregator for NFTs</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
          </div> {/* portfolio-wrapper end */}
        </div> {/* twelve columns end */}
        {/* Modal Popup
    	      --------------------------------------------------------------- */}
        <div id="modal-01" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/MotorTrendDesktop.png" alt />
          <div className="description-box">
            <h4>Motor Trend On Demand</h4>
            <p>Front End development on a high traffic video on demand platform</p>
            <span className="categories"><i className="fa fa-tag" />Front end development</span>
          </div>
          <div className="link-box">
            <a href="https://www.motortrendondemand.com/">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
        <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/alistdesktop.png" alt />
          <div className="description-box">
            <h4>alistdaily</h4>
            <p>Front end development on a high traffic marketing news site targeted at marketers.</p>
            <span className="categories"><i className="fa fa-tag" />Web Development, ad martketing</span>
          </div>
          <div className="link-box">
            <a href="http://alistdaily.com">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-02 End */}
        <div id="modal-03" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/gmtools.png" alt />
          <div className="description-box">
            <h4>GM Tools</h4>
            <p>Developed a Market Aggregator for NFTs with specialized trading tools</p>
            <span className="categories"><i className="fa fa-tag" />Web Development</span>
          </div>
          <div className="link-box">
            <a href="https://app.gm-tools.xyz">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-03 End */}
      </div> {/* row End */}
    </section>

    );
  }
}
