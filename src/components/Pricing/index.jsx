import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Pricing <small>*</small></h1>
          <p>Payment plans available for all tiers</p>
          {/* portfolio-wrapper */}
          <div id="pricing-wrapper" className="bgrid-thirds s-bgrid-thirds cf promo-on">
            <div className="columns">
              <div class="price-box">
                <p class="price-tier-title">Informational</p>
                <p class="standard-price">Starting at $3000</p>
                <p class="promo-price">$300 during April promotion!!!</p>
                <ul>
                  <li>No online ordering</li>
                  <li>Beautifully designed & developed site showcasing any works or information</li>
                  <li>Contact form</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="columns">
              <div class="price-box">
                <p class="price-tier-title">Online Store</p>
                <p class="standard-price">Starting at $5000</p>
                <p class="promo-price">$500 during April promotion!!!</p>
                <ul>
                  <li>Online ordering Available</li>
                  <li>Beautifully designed & developed site showcasing any works or information</li>
                  <li>Contact form</li>
                  <li>Free Product Data Entry for first 20 simple items</li>
                </ul>
              </div>
            </div> {/* item end */}
            <div className="columns">
              <div class="price-box">
                <p class="price-tier-title">Custom Applications</p>
                <p>$10k - $100k+</p>
                <ul>
                  <li>Mobile & Web Applications</li>
                  <li>Custom Infrastructures for day to day operations</li>
                  <li>Pricing varies greatly for custom applications, please contact us for a quote</li>
                </ul>
              </div>
            </div> {/* item end */}
          </div> {/* portfolio-wrapper end */}
          <small>* Pricing not final and subject to change, (promotional pricing has different ruls)</small>
        </div> {/* twelve columns end */}
      </div> {/* row End */}
    </section>

    );
  }
}
