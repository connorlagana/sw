import React, { Component } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Hero from "./components/Hero.js";
import Women from "./components/Women/Women.js";
import Footer from "./components/Footer.js";

import womenHeroPic from "./images/womenHero.jpg";
import menHeroPic from "./images/menHero.jpg";

import a1 from "./images/womens/A1.jpg";
import a2 from "./images/womens/A2.jpg";
import b1 from "./images/womens/B1.jpg";
import b2 from "./images/womens/B2.jpg";
import c1 from "./images/womens/C1.jpg";
import c2 from "./images/womens/C2.jpg";
import d1 from "./images/womens/D1.jpg";
import d2 from "./images/womens/D2.jpg";
import e1 from "./images/womens/E1.jpg";
import e2 from "./images/womens/E2.jpg";
import f1 from "./images/womens/F1.gif";
import f2 from "./images/womens/F2.jpg";
import g1 from "./images/womens/G1.jpg";
import g2 from "./images/womens/G2.jpg";
import h1 from "./images/womens/H1.jpg";
import h2 from "./images/womens/H2.jpg";
import i1 from "./images/womens/I1.gif";
import j1 from "./images/womens/J1.jpg";
import j2 from "./images/womens/J2.jpg";
import k1 from "./images/womens/K1.jpg";
import k2 from "./images/womens/K2.jpg";
import l1 from "./images/womens/L1.jpg";
import l2 from "./images/womens/L2.jpg";
import ContactUs from "./components/Contact";

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
            name: "Heart EMB Teddy Zip Up Jacket",
            type: "sweatshirt",
            firstPic: b1,
            secondPic: b2,
            colors: ["black"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 98
          },
          {
            name: "Favorite Daughter Loose Tee - HTHR",
            type: "tee",
            firstPic: c1,
            secondPic: c2,
            colors: ["gray"],
            sizesAvailable: ["xs", "s", "m", "l"],
            price: 45
          },
          {
            name: "Camo Stripe Cambridge Sweats",
            type: "bottoms",
            firstPic: d1,
            secondPic: d2,
            colors: ["black", "green"],
            sizesAvailable: ["l", "xl"],
            price: 78
          },
          {
            name: "Favorite Daughter Fitted Vanessa Tee - HTHR",
            type: "tee",
            firstPic: e1,
            secondPic: e2,
            colors: ["gray"],
            sizesAvailable: ["xs", "s", "m", "l", "xl"],
            price: 45
          },
          {
            name: "The Trinity Poppy Tee",
            type: "tee",
            firstPic: f1,
            secondPic: f2,
            colors: ["white", "black", "gray"],
            sizesAvailable: ["l", "xl"],
            price: 114,
            sale: 72
          },
          {
            name: "Favorite Daughter Fitted Vanessa Tee - White",
            type: "tee",
            firstPic: g1,
            secondPic: g2,
            colors: ["white"],
            sizesAvailable: ["xs", "s"],
            price: 45
          },
          {
            name: "Be Brave and Kind Loose Tee - Black",
            type: "tee",
            firstPic: h1,
            secondPic: h2,
            colors: ["black"],
            sizesAvailable: ["s", "l", "xl"],
            price: 38
          },
          {
            name: "The Trinity Loose Tee",
            type: "tee",
            firstPic: i1,
            secondPic: f2,
            colors: ["black", "white", "gray"],
            sizesAvailable: ["s"],
            price: 114,
            sale: 72
          },
          {
            name: "Be a Nice Human Loose Tee - White",
            type: "tee",
            firstPic: j1,
            secondPic: j2,
            colors: ["white"],
            sizesAvailable: ["l", "xl"],
            price: 38
          },
          {
            name: "Homebody Willow Sweatshirt",
            type: "sweatshirt",
            firstPic: k1,
            secondPic: k2,
            colors: ["black"],
            sizesAvailable: ["s", "l", "xl"],
            price: 64
          },
          {
            name: "Work Hard Loose Tee",
            type: "tee",
            firstPic: l1,
            secondPic: l2,
            colors: ["white"],
            sizesAvailable: ["s", "l", "xl"],
            price: 38
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
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
