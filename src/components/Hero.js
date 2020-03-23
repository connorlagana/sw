import React from "react";
import firstModel from "../images/firstModel.jpg";
import secondModel from "../images/secondModel.JPG";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <div>
        <img src={firstModel} />
        <button>
          <Link to="/women" id="shopButtonLink">Shop Women</Link>
        </button>
      </div>
      <div>
        <img src={secondModel} />
        <button>
          <Link to="/new" id="shopButtonLink">What's New?</Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
