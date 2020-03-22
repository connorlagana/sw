import React from "react";
import firstModel from "../images/firstModel.jpg";
import secondModel from "../images/secondModel.JPG";

function Hero() {
  return (
    <div className="Hero">
      <div>
        <img src={firstModel} />
        <button>Shop Women</button>
      </div>
      <div>
        <img src={secondModel} />
        <button>Shop Men</button>
      </div>
    </div>
  );
}

export default Hero;
