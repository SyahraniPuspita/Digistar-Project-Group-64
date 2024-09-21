/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ varian, text = "Masuk", ...props }) => {
  return (
    <div className={`button ${varian}`}{...props}>
      <div className="frame">
        <div className="masuk">
          {["short-big-filled", "short-big-outline", "short-small-filled", "short-small-outline"].includes(varian) && (
            <>{text}</>
          )}

          {[
            "custom-width-big-filled",
            "custom-width-big-outline",
            "custom-width-small-filled",
            "custom-width-small-outline",
          ].includes(varian) && <>{text}</>}

        </div>
      </div>
    </div>
  );
};

Button.propTypes = {
  varian: PropTypes.oneOf([
    "custom-width-big-filled",
    "short-small-outline",
    "custom-width-big-outline",
    "short-big-outline",
    "custom-width-small-filled",
    "custom-width-small-outline",
    "short-big-filled",
    "short-small-filled",
  ]),
  text: PropTypes.string,
};
