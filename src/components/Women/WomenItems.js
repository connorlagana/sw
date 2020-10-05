import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import WomenIndy from "./WomenIndy.js";



class WomenItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: props.gender,
    };
  }
  render(props) {
    return (
      <div className="WomenItems">
        <div className="sortItemsBy">
          <div>Sort By</div>
          <div>Best Selling</div>
        </div>
        <div className="items">
          {this.state.gender.items &&
            this.state.gender.items.map((item) => (
              <div className="itemInd">
                <Link to={`/${item.id}`}>
                  <img
                    src={item.firstPic}
                    onMouseOver={(e) => (e.currentTarget.src = item.secondPic)}
                    onMouseOut={(e) => (e.currentTarget.src = item.firstPic)}
                  />
                </Link>
                <div className="bottomInd">
                  <div id="itemName">{item.title}</div>
                  <div>
                    <div id="itemPrice">${item.price}.00</div>
                  </div>
                </div>

                {/* <Route
                  exact
                  path="/women/:id"
                  render={props => {
                    return <WomenIndy title={props.match.params.id} />;
                  }}
                /> */}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default WomenItems;
