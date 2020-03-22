import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Women from "./components/Women/Women.js";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Hero} />
        <Route exact path="/women" component={Women} />
      </div>
    );
  }
}

export default App;
