import React from "react";
import WomenHero from "./WomenHero.js";
import WomenBottom from "./WomenBottom.js";

function Women(props) {
  return (
    <div className="Women">
      <WomenHero gender={props.gender} />
      <WomenBottom gender={props.gender} />
    </div>
  );
}

export default Women;
