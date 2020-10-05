import React from "react";
import secondPic from "../../images/OurStory/girlsAbout.jpg";
import firstPic from "../../images/OurStory/goodVibesAbout.jpg";
import surfer from "../../images/OurStory/surfer.jpg";
import jumping from "../../images/OurStory/jumping.jpg";
import beachRoad from "../../images/OurStory/beachRoad.jpg";
import { withRouter } from "react-router-dom";

function OurStory() {
  return (
    <div className="OurStory">
      <div className="firstOS">
        <div className="fosl">
          <img src={firstPic} alt="first" />
          <label>Wave</label>
        </div>
        <div className="fosr">
          <img src={secondPic} alt="second" />
          <label>Life</label>
        </div>
        fosl
      </div>

      <div className="secondOS">
        <img src={surfer} alt="surfer" />
        <div className="sosr">
          <label>What's the wave?</label>
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
          <div className="whatWave">
            <div>Blame it on my youth</div>
          </div>
          <div className="originDiv">
            <div id="originTitle">Origin</div>
            <div id="originDesc">
              Suburban Wave was born in 2019 in Avon-by-the-Sea, New Jersey. Two
              college friends realized that the cubicle life wasn’t for them so
              they quit their corporate day jobs. Following the rules that
              someone else made up no longer made sense. Instead of settling for
              a good life, they decided to go against the grain to pursue a
              great one.
            </div>
            <div id="originDesc">
              So, at the beginning of the largest financial crisis and global
              pandemic ever, they risked everything to start a company. A
              company that would allow them to ignore the rules, have fun and
              not take themselves too seriously. That spirit lives on today, as
              Suburban Wave has grown into a global brand with a unique
              combination of positivity and humor; and a commitment to always
              re-imagine the good life.
            </div>
          </div>
        </div>
        <div className="tosr">
          <img src={jumping} id="jumpingGirl" alt="jump" />
          <div className="overPic">
            <img src={beachRoad} id="beachRoad" alt="road" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(OurStory);
