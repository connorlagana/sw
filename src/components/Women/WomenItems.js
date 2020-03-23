import React, { Component } from "react";

function WomenItems(props) {
  return (
    <div className="WomenItems">
      <div className="sortItemsBy">
        <div>Sort By</div>
        <div>Best Selling</div>
      </div>
      <div className="items">
        {props.items &&
          props.items.map(item => (
            <div className="itemInd">
              <img
                src={item.firstPic}
                onMouseOver={e => (e.currentTarget.src = item.secondPic)}
                onMouseOut={e => (e.currentTarget.src = item.firstPic)}
              />
              <div className="bottomInd">
                <div id="itemName">{item.name}</div>
                <div id="itemPrice">${item.price}.00</div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WomenItems;
