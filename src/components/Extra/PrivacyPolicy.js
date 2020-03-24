import React, { Component } from "react";
import { withRouter } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy">
      <div id="privacyPolicyTitle">Privacy Policy</div>
      <div className="bottomPrivacy">
        <div>
          <div>Our Commitment To Your Privacy</div>
          <div>
            Your privacy is important to us. To better protect your privacy the
            following notice explains the information we collect, how it is
            used, how it is safeguarded, and how to contact us if you have any
            concerns.
          </div>
        </div>
        <div>
          <div>What Information Is Collected:</div>
          <div>
            As part of the order process, the following information is collected
            from shoppers: Name Shipping/Billing Address, Email address, Phone
            number, Credit/Debit Card Information.
          </div>
        </div>
        <div>
          <div>How That Information Is Used:</div>
          <div>
            We only use information to fill orders, contact buyers if they have
            questions, or to send special offers.
          </div>
        </div>
        <div>
          <div>Our Commitment To The Security of Your Data:</div>
          <div>
            Your personal information is secure and will not be used in any way
            other than to fill orders, contact buyers if they have questions, or
            to send special offers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(PrivacyPolicy);
