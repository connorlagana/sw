import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuObj: this.props.cuObj,
    };
  }

  render() {
    return (
      <div className="Cart">
        <div>Hello World!!!!!!</div>
        <div>Cart is here!</div>
        <div>{this.state.cuObj.firstName}</div>
      </div>
    );
  }
}

export default Cart;
