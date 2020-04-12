import React, { Component } from "react";
import { Link, Route, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      signIn: false,
    };
  }

  showSignIn = () => {
    this.setState({
      signIn: !this.state.signIn,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    console.log(this.state);
  };

  registerUser = (e) => {
    console.log("registering user...");
    this.props.handleRegister(e, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="Login">
        {!this.state.currentUser ? (
          <>
            {this.state.signIn ? (
              <button onClick={this.showSignIn}>Don't have an account?</button>
            ) : (
              <div className="loginDiv">
                <div className="loginLeft">
                  <label id="loginTitle">Sign In</label>
                  <form
                    onSubmit={(e) => {
                      this.props.handleLogin(e, {
                        username: this.state.username,
                        password: this.state.password,
                      });
                    }}
                  >
                    <input type="email" name="email" placeholder="Email" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <button id="loginSubmit">Submit</button>
                    <div id="forgotPass">Forgot Password?</div>
                    <button onClick={this.showSignIn}>
                      Don't have an account?
                    </button>
                  </form>
                </div>

                <div className="loginLeft">
                  <label id="loginTitle">Create An Account</label>
                  <form>
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
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <button onClick={this.registerUser} id="loginSubmit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </>
        ) : (
          <div>hello con</div>
        )}
      </div>
    );
  }
}

export default Login;
