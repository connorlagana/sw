import React from "react";
import { Link } from "react-router-dom";

function Footer() {
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
              <Link to="/contactus" id="lftLink">
                Affiliate Program
              </Link>
            </div>
          </div>
          <div className="lftDiv">
            <div id="lftTitle">Customer Service</div>
            <div className="lftUnder">
              <Link to="/contactus" id="lftLink">
                Shipping
              </Link>
              <Link to="/contactus" id="lftLink">
                Returns & Exchanges
              </Link>
              <Link to="/contactus" id="lftLink">
                Terms & Conditions
              </Link>
              <Link to="/contactus" id="lftLink">
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="lftDiv">
            <div id="lftTitle">About Us</div>
            <div className="lftUnder">
              <Link to="/ourstory" id="lftLink">
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

export default Footer;
