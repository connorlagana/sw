import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
