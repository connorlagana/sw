import React from "react";
import WomenItems from "./WomenItems.js";

function handleColor(e) {
  e.preventDefault();
  console.log(e);
}

function WomenBottom(props) {
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
              onClick={handleColor}
            />
            <button className="red sqBut" onClick={handleColor} />
            <button className="gray sqBut" onClick={handleColor} />
            <button className="blue sqBut" onClick={handleColor} />
            <button className="brown sqBut" onClick={handleColor} />
            <button className="white sqBut" onClick={handleColor} />
            <button className="green sqBut" onClick={handleColor} />
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
        <WomenItems gender={props.gender} />
      </div>
    </div>
  );
}

export default WomenBottom;
