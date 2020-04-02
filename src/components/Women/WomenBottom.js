import React, { Component } from "react";
import WomenItems from "./WomenItems.js";

class WomenBottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: this.props.gender
    };
  }

  handleColor(e) {
    e.preventDefault();
    console.log(e.target.name);
    // console.log(props.gender.items);
  }

  handleSize = e => {
    e.preventDefault();
    console.log(e.target.name);
  };

  render() {
    return (
      <div className="WomenBottom">
        <div className="leftWomenBottomDiv">
          <div className="categories">
            <button id="category">New Arrivals</button>
            <button id="category">Graphic Tees</button>
            <button id="category">Bottoms</button>
            <button id="category">Sweatshirts & Jackets</button>
            <button id="category">Sale</button>
            <button id="viewAll">View All</button>
          </div>
          <div className="colors">
            <div id="colorTitle">Color</div>
            <div className="colorButtons">
              <button
                className="black sqBut"
                name="black"
                onClick={this.handleColor}
              />
              <button
                className="red sqBut"
                name="red"
                onClick={this.handleColor}
              />
              <button
                className="gray sqBut"
                name="gray"
                onClick={this.handleColor}
              />
              <button
                className="blue sqBut"
                name="blue"
                onClick={this.handleColor}
              />
              <button
                className="white sqBut"
                name="white"
                onClick={this.handleColor}
              />
              <button
                className="green sqBut"
                name="green"
                onClick={this.handleColor}
              />
            </div>
          </div>
          <div className="colors">
            <div id="colorTitle">Size</div>
            <div className="sizeButtons">
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>0X</button>
              <button>1X</button>
              <button>2X</button>
              <button>3X</button>
            </div>
          </div>
        </div>
        <div className="rightWomenBottomDiv">
          <WomenItems gender={this.state.gender} />
        </div>
      </div>
    );
  }
}

export default WomenBottom;
