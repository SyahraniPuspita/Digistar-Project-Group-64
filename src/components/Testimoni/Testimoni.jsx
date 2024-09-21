import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const Testimoni = ({
  className,
  ellipse,
  text,
  text1,
  text2,
  frameClassName,
}) => {
  return (
    <div className={`testimoni ${className}`}>
      <div className={`frame-7 ${frameClassName}`}>
        <img className="ellipse" alt="Ellipse" src={ellipse} />
        <div className="frame-8">
          <div className="frame-9">
            <p className="DITERIMA-KERJA-DI">{text}</p>
            <p className="testimoni-user-aku">{text1}</p>
          </div>
          <div className="alvandreas-joan-z">{text2}</div>
        </div>
      </div>
    </div>
  );
};

Testimoni.propTypes = {
  ellipse: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};

