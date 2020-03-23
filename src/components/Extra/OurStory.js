import React, { Component } from "react";
import secondPic from "../../images/OurStory/girlsAbout.jpg";
import firstPic from "../../images/OurStory/goodVibesAbout.jpg";

function OurStory() {
  return (
    <div className="OurStory">
      <div className="firstOS">
        <div className="fosl">
          <img src={firstPic} />
          <label>Wave</label>
        </div>
        <div className="fosr">
          <img src={secondPic} />
          <label>Life</label>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
