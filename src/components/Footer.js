import React, { Component } from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div className="Footer">
        <div className="leftFooter">
          <div className="lfTop">
            <div className="lftDiv">
              <div id="lftTitle">Company Info</div>
              <div className="lftUnder">
                {/* <div>Stores</div> */}
                <Link to="/contactus" id="lftLink">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="lftDiv">
              <div id="lftTitle">Customer Service</div>
              <div className="lftUnder">
                <Link to="/shipping" id="lftLink" onClick={this.scrollToTop}>
                  Shipping
                </Link>
                <Link to="/contactus" id="lftLink">
                  Terms & Conditions
                </Link>
                <Link to="/privacy-policy" id="lftLink">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="lftDiv">
              <div id="lftTitle">About Us</div>
              <div className="lftUnder">
                <Link to="/ourstory" id="lftLink" onClick={this.scrollToTop}>
                  Our Story
                </Link>
              </div>
            </div>
          </div>
          <div className="lfBottom">
            Copyright © 2020 Suburban Wave. All Rights Reserved.
          </div>
        </div>
        <div className="rightFooter">
          <div>thx 4 stopping by.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
