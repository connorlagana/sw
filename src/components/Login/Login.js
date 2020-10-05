import React, { Component } from "react";
// import { Link, Route, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      signIn: false,
      subscribed: false,
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

  registerUser = async (e) => {
    console.log("registering user...");
    await this.props.handleRegister(e, {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    });
    console.log(this.state);
  };

  handleCheck = async () => {
    await this.setState({
      subscribed: !this.state.subscribed,
    });
  };

  render() {
    return (
      <div className="Login">
        {this.state.signIn ? (
          <div className="loginDiv">
            <div className="loginLeft">
              <div id="loginTitle">Sign In</div>
              <button onClick={this.showSignIn} id="leftSignSubmit">
                Sign In
              </button>
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
                <div className="checkboxDiv">
                  <div className="innerDivCB">
                    <input
                      id="checkbox"
                      type="checkbox"
                      onClick={this.handleCheck}
                    />
                  </div>
                  <label id="subscribeLabel">
                    Subscribe to stay updated with new products and offers!
                  </label>
                </div>
                <button onClick={this.registerUser} id="loginSubmit">
                  Register
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="loginDiv">
            <div className="loginLeft">
              <div id="loginTitle">Sign In</div>
              <form
                onSubmit={(e) => {
                  this.props.handleLogin(e, {
                    username: this.state.username,
                    password: this.state.password,
                  });
                }}
              >
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button id="loginSubmit">Submit</button>
                <div id="forgotPass">Forgot Password?</div>
              </form>
            </div>
            <div className="loginRight">
              <div id="loginTitle">Create An Account</div>
              <button onClick={this.showSignIn} id="loginRegister">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
