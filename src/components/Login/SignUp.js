import React, { Component } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="SignUp">
        <div className="signUpRect">
          <div id="signUpTitle">Sign Up</div>
          <form className="signUpForm">
            <input type="text" name="fName" placeholder="First Name" />
            <input type="text" name="lName" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="passwordDigest"
              placeholder="Confirm Password"
            />
            <div>I forgot my password</div>
            <button>Register</button>
          </form>
          <div className="alreadyAcct">
            <div>Already have an account?</div>
            <div>Login here</div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default SignUp;
