import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="Login">
        <div>
          <label>Sign In</label>
          <form>
            <input type="email" name="email" placeholder="Email" />
          </form>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Login;
