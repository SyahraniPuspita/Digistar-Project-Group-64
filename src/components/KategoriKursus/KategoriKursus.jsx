/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const KategoriKursus = ({
  hover,
  rectangle = "/img/rectangle-4.png",
  text = "Kategori Kursus",
  divClassName,
}) => {
  const navigate = useNavigate();
  
  const handleClickKategoriFilter = () => {
    // Navigasi ke halaman login
    navigate("/kategorifilter");
  };

  return (
    <div className="kategori-kursus">
      <div className="rectangle-wrapper" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>
        <img className="rectangle" alt="Rectangle" src={hover === "on" ? "/img/rectangle-4-1.png" : rectangle} />
      </div>
      <div className="kategori-kursus-wrapper">
        <div className={`text-wrapper ${divClassName}`}>{text}</div>
      </div>
    </div>
  );
};

KategoriKursus.propTypes = {
  hover: PropTypes.oneOf(["off", "on"]),
  rectangle: PropTypes.string,
  text: PropTypes.string,
};
