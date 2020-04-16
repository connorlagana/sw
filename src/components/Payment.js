import React, { Component } from "react";
import told1 from "../images/fs/told1.jpg";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Payment">
        <div className="payLeft"></div>
        <div className="payRight">
          <div className="payPicDiv">
            <img src={told1} />
            <div id="stayWavy">Stay Wavy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
