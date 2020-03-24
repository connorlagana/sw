import React, { Component } from "react";
import { withRouter } from "react-router-dom";

function Shipping() {
  return (
    <div className="Shipping">
      <div id="shippingTitle">Shipping</div>
      <div className="bottomShipping">
        <div id="bsTitle">Shipping</div>
        <div id="bsMessage">
          Orders will ship 24-48 hours after purchase. You will receive an
          emailed tracking # when it ships.
        </div>
        <div id="bsMessage">
          Standard USPS shipping within the US usually takes 4-6 business days.
          Expedited UPS 2nd Day Air shipping is available if you need it sooner,
          rates will vary.
        </div>
        <div id="bsMessage">
          International orders will ship USPS First Class International. Transit
          time typically takes 6-10 business days, but that can vary based on
          potential customs and importing delays.
        </div>
        <a id="bsMessageA" href="mailto:customerservice@suburbanwave.com">Email: customerservice@suburbanwave.com</a>
      </div>
    </div>
  );
}

export default withRouter(Shipping);
