import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Women from "./components/Women/Women.js";
import WomenIndy from "./components/Women/WomenIndy.js";
import Footer from "./components/Footer.js";
import Login from "./components/Login/Login.js";
import SignUp from "./components/Login/SignUp.js";
import OurStory from "./components/Extra/OurStory.js";
import PrivacyPolicy from "./components/Extra/PrivacyPolicy.js";
import Shipping from "./components/Extra/Shipping.js";

import { loginUser, registerUser, verifyUser } from "./services/api_helper";

import womenHeroPic from "./images/womenHero.jpg";
import menHeroPic from "./images/menHero.jpg";
import ContactUs from "./components/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: false,
      errorText: "",
      women: {
        name: "women",
        pic: womenHeroPic,
        firstTitle: "Wom",
        secondTitle: "en",
        items: []
      },
      men: {
        name: "men",
        pic: menHeroPic,
        firstTitle: "M",
        secondTitle: "en",
        items: []
      }
    };
  }

  handleLogin = async (e, loginData) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      this.setState({
        errorText: "You must supply a username AND password"
      });
    } else {
      const currentUser = await loginUser(loginData);
      this.setState({
        currentUser
      });
    }
  };

  handleRegister = async (e, registerData) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND password"
      });
    } else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser
      });
    }
  };

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      });
    }
  };

  handleLogout = () => {
    this.setState({
      currentUser: false
    });
    localStorage.removeItem("authToken");
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Hero} />
        <Route path="/women">
          <Women gender={this.state.women} />
        </Route>
        <Route path="/men">
          <Women gender={this.state.men} />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/ourstory">
          <OurStory />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/shipping">
          <Shipping />
        </Route>
        <Route
          path="/:key"
          render={props => {
            return <WomenIndy item={props.match.params.key} />;
          }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
