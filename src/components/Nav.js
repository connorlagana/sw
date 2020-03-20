import React from "react";
import profile from "../images/profile.png";
import cart from "../images/cart.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="topNav">Free shipping Over $90. U.S. Only</div>
      <div className="bottomNav">
        <div className="leftNav">Suburban Wave</div>
        <div className="centerNav">
          <div>New</div>
          <div>Women</div>
          <div>Men</div>
          <div>Misc.</div>
        </div>
        <div className="rightNav">
          <img src={profile} />
          <img src={cart} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
