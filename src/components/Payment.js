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
        <div className="payLeft">
          <div className="grayDiv">
            <form className="firstForm">
              <input
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
              <input
                name="streetAdd"
                placeholder="Street Address"
                onChange={this.handleChange}
              />
              <input
                name="city"
                placeholder="City"
                onChange={this.handleChange}
              />
              <select
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
              >
                <option value="">Select an option…</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <input
                name="zip"
                placeholder="Zip Code"
                onChange={this.handleChange}
              />
            </form>
            <div>
              <div>Your Order</div>
              <div>Total: $98.97</div>
            </div>

            <form className="secondForm">
              <input
                name="cardNum"
                placeholder="Credit Card Number"
                onChange={this.handleChange}
              />
              <input
                name="cardNum"
                placeholder="Security Code"
                onChange={this.handleChange}
              />
              <input
                name="cardNum"
                placeholder="Credit Card Number"
                onChange={this.handleChange}
              />
              <select></select>
              <select></select>
              <button>Place Order</button>
            </form>
          </div>
        </div>
        <div className="payRight">
          <div className="payPicDiv">
            <img src={told1} alt="told"/>
            <div id="stayWavy">Stay Wavy</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
