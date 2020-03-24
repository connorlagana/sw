import React, { Component } from "react";
import secondPic from "../../images/OurStory/girlsAbout.jpg";
import firstPic from "../../images/OurStory/goodVibesAbout.jpg";
import surfer from "../../images/OurStory/surfer.jpg";
import { withRouter } from "react-router-dom";

import Fade from "react-reveal/Fade";

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

          <div id="sosrMessage">
            From the beach - to the gym - to the office - we make clothes that
            reflect today's on the go looks... along with a splash of positivity
            and humor.
          </div>
        </div>
      </div>

      <div className="thirdOS">
        <div className="tosl">
          <div>Get into trouble</div>
          <div>Origin</div>
          <div>
            Suburban Wave was born in 2006 in Venice, California. Two college
            friends realized that the cubicle life wasn’t for them so they quit
            their corporate day jobs. Following the rules that someone else made
            up no longer made sense. Instead of settling for a good life, they
            decided to go against the grain to pursue a great one. So, at the
            beginning of the largest financial crisis ever, they risked
            everything to start a company. A company that would allow them to
            ignore the rules, have fun and not take themselves too seriously.
            That spirit lives on today, as Sub_Urban Riot has grown into a
            global brand with a unique combination of positivity and humor; and
            a commitment to always re-imagine the good life.
          </div>
        </div>
        <div className="tosr">
          
        </div>
      </div>
    </div>
  );
}

export default withRouter(OurStory);
