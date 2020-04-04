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
        <div className="loginDiv">
          <div className="loginLeft">
            <label id="loginTitle">Sign In</label>
            <form>
              <input type="email" name="email" placeholder="Email" />
              <input type="password" name="password" placeholder="Password" />
              <button id="loginSubmit">Submit</button>
              <div id="forgotPass">Forgot Password?</div>
            </form>
          </div>
          <div className="loginRight">
            <label id="LoginTitle">Create An Account</label>
            <button id="loginSubmit">Register</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
