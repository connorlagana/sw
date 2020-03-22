import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Women from "./components/Women/Women.js";
import womenHeroPic from "./images/womenHero.jpg";
import menHeroPic from "./images/menHero.jpg";

import a1 from "./images/womens/A1.jpg";
import a2 from "./images/womens/A2.jpg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      women: {
        pic: womenHeroPic,
        firstTitle: "Wom",
        secondTitle: "en",
        items: [
          {
            name: "Favorite Daughter Loose Tee - White",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "Favorite Daughter Loose Tee - White",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "Favorite Daughter Loose Tee - White",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "Favorite Daughter Loose Tee - White",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "Favorite Daughter Loose Tee - White",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "red",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["red"],
            sizesAvailable: ["l", "xl"],
            price: 45
          },
          {
            name: "white red",
            type: "tee",
            firstPic: a1,
            secondPic: a2,
            colors: ["white", "red"],
            sizesAvailable: ["xs", "s"],
            price: 45
          },
          {
            name: "green pants",
            type: "bottoms",
            firstPic: a1,
            secondPic: a2,
            colors: ["green"],
            sizesAvailable: ["s", "l", "xl"],
            price: 45
          }
        ]
      },
      men: {
        pic: menHeroPic,
        firstTitle: "M",
        secondTitle: "en"
      }
    };
  }

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
      </div>
    );
  }
}

export default App;
