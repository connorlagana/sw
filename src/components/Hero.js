import React from "react";
// import firstModel from "../images/firstModel.jpg";
// import secondModel from "../images/secondModel.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="Hero">
      <div>
        <img
          src={
            "https://feelingswell.org/wp-content/uploads/2019/04/Chelsey-Peace.jpg"
          }
          alt="source1"
        />
        <button>
          <Link to="/women" id="shopButtonLink">
            Shop Women
          </Link>
        </button>
      </div>
      <div>
        <img
          src={
            "https://feelingswell.org/wp-content/uploads/2019/07/FS_insta.png"
          }
          alt="source2"
        />
        <button>
          <Link to="/men" id="shopButtonLink">
            Shop Men
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
