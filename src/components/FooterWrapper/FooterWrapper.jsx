/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Footer } from "../Footer";
import "./style.css";

export const FooterWrapper = ({
  footerSosmed = "/img/sosmed-2.svg",
  footerSvg = "/img/svg-2.svg",
  footerClassName,
}) => {
  return (
    <div className="footer-wrapper">
      <div className="overlap-group-4">
        <Footer SVG={footerSvg} className="footer-instance" sosmed={footerSosmed} />
        <div className={`footer-2 ${footerClassName}`} />
      </div>
    </div>
  );
};

FooterWrapper.propTypes = {
  footerSosmed: PropTypes.string,
  footerSvg: PropTypes.string,
};
