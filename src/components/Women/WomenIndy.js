import React from "react";

function WomenIndy(props) {
  console.log("bulletproof");
  console.log(props);
  return (
    <div className="WomenIndy">
      <div>Hello World</div>
      <div>{props.item}</div>
    </div>
  );
}

export default WomenIndy;
