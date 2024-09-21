import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Chip = ({ className, divClassName, text = "KURSUS-FREEMIUM", type = "freemium", ...props }) => {
  

  return (
    <div className={`chip ${className}`}>
      <div className={`KURSUS-${type.toUpperCase()} ${divClassName}`}{...props}>{text}</div>
    </div>
  );
};


Chip.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["freemium", "paid"]), // Menambahkan prop type
};

