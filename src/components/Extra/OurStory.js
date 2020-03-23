import React, { Component } from "react";
import secondPic from "../../images/OurStory/girlsAbout.jpg";
import firstPic from "../../images/OurStory/goodVibesAbout.jpg";
import surfer from "../../images/OurStory/surfer.jpg";

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

      <div className="secondOS">
        <img src={surfer} />
        <div className="sosr">
          <label>Blame it on my youth</label>
          <div className="tnl">
            <div>The</div>
            <div>New Luxury</div>
          </div>

          <div>
            From the beach - to the gym - to the office - we make clothes that
            reflect today's on the go looks... along with a splash of positivity
            and humor.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
