import React, { Component } from "react";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="ContactUs">
        <div id="contactTitle">Contact Us</div>
        <div className="contactBottom">
          <div className="cbLeft">
            <div className="cblDiv">
              <div id="cbldTitle">Customer Service</div>
              <div className="cbldBottom">
                <a href="customerservice@suburbanwave.com">Email: customerservice@suburbanwave.com</a>
                <div>Phone: 973-783-3799</div>
              </div>
            </div>
            <div className="cblDiv">
              <div id="cbldTitle">Address</div>
              <div className="cbldBottom">
                <div>Suburban Wave</div>
                <div>87 Tower Mountain Drive</div>
                <div>Bernardsville, NJ 07924</div>
              </div>
            </div>
            <div className="cblDiv">
              <div id="cbldTitle">Wholesale Inquiries</div>
              <div className="cbldBottom">
                <div>Email: info@suburbanwave.com</div>
                <div>Phone: 973-783-3799</div>
              </div>
            </div>
          </div>
          <form className="contactForm">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="message" placeholder="Message" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
