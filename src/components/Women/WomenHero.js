import React from "react";
import womenHeroPic from "../../images/womenHero.jpg";

function WomenHero() {
  return (
    <div className="WomenHero">
      <div className="womenImageDiv">
        <img src={womenHeroPic} />
        <div id="wo">Wom</div>
      </div>
      <div id="womenTitle">en</div>
    </div>
  );
}

export default WomenHero;
