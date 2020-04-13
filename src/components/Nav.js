import React, { Component } from "react";
import profile from "../images/profile.png";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
    };
  }

  componentDidMount() {
    console.log("nav");
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log("update");
    console.log(this.state);
  }

  render() {
    return (
      <div className="Nav">
        <div className="topNav">free shipping over $90. u.s. only</div>
        <div className="bottomNav">
          <div className="leftNav">
            <Link to="/" id="subrbanWave">
              suburban wave
            </Link>
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
          </div>
          <div className="rightNav">
            {!this.state.currentUser ? (
              <Link to={`/${this.props.redirectProf}`}>
                <img src={profile} />
              </Link>
            ) : (
              <img src={cart} />
            )}
            <Link to={`/${this.props.redirectCart}`}>
              <img src={cart} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
