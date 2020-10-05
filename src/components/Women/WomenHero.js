import React from "react";

function WomenHero(props) {
  return (
    <div className="WomenHero">
      <div className="womenImageDiv">
        <img src={props.gender.pic} alt="gender" />
        <div id="wo">{props.gender.firstTitle}</div>
      </div>
      <div id="womenTitle">{props.gender.secondTitle}</div>
    </div>
  );
}

export default WomenHero;
