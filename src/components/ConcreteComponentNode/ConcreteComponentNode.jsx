/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { FooterWrapper } from "../FooterWrapper";
import "./style.css";

export const ConcreteComponentNode = ({
  className,
  overlapClassName,
  footerWrapperFooterSvg = "/img/svg-2.svg",
  footerWrapperFooterSosmed = "/img/sosmed.svg",
  footerWrapperFooterClassName,
}) => {
  return (
    <div className={`concrete-component-node ${className}`}>
      <div className={`overlap ${overlapClassName}`}>
        <div className="group-wrapper">
          <div className="footer-instance-wrapper">
            <FooterWrapper
              footerClassName={footerWrapperFooterClassName}
              footerSosmed={footerWrapperFooterSosmed}
              footerSvg={footerWrapperFooterSvg}
            />
          </div>
        </div>
        <div className="group-4">
          <div className="group-5">
            <div className="text-wrapper-26">ikuti kami di</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ConcreteComponentNode.propTypes = {
  footerWrapperFooterSvg: PropTypes.string,
  footerWrapperFooterSosmed: PropTypes.string,
};
