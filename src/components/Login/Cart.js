import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
    };
  }
  componentDidMount() {
    console.log("component did mount");
    console.log(this.state.currentUser.id);
  }

  componentDidUpdate() {
    console.log("component did update");
    console.log(this.state.currentUser.id);
  }

  render() {
    return (
      <div className="Cart">
        <div>Hello World!!!!!!</div>
        <div>Cart is here!</div>
      </div>
    );
  }
}

export default Cart;
