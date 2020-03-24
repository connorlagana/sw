import React from "react";
import profile from "../images/profile.png";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="topNav">Free shipping Over $90. U.S. Only</div>
      <div className="bottomNav">
        <div className="leftNav">
          <Link to="/" id="subrbanWave">Suburban Wave</Link>
        </div>
        <div className="centerNav">
          <Link to="/new" id="navLink">
            New
          </Link>
          <Link to="/women" id="navLink">
            Women
          </Link>
          <Link to="/men" id="navLink">
            Men
          </Link>
          <Link to="/youth" id="navLink">
            Youth
          </Link>
          <Link to="/misc" id="navLink">
            Misc.
          </Link>
        </div>
        <div className="rightNav">
          <Link to="login">
            <img src={profile} />
          </Link>
          <img src={cart} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
