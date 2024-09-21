/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
import "./style.css";




export const FreemiumCourses = ({
  className,
  cardText = "Nama Kursus Pijar Apa Saja Terserah",
  cardRectangle = "/img/rectangle-8-8.png",
  cardVector = "/img/vector-1-4.svg",
  cardText1 = "Nama Kursus Pijar Apa Saja Terserah",
  cardGroup = "/img/group-2-7.png",
  cardImg = "/img/rectangle-8-8.png",
  cardFrameClassName,
  cardText2 = "Nama Kursus Pijar Apa Saja Terserah",
  cardRectangle1 = "/img/rectangle-8-8.png",
  cardText3 = "Nama Kursus Pijar Apa Saja Terserah",
  cardRectangle2 = "/img/rectangle-8-8.png",
}) => {
  const navigate = useNavigate();

  const handleClickDetailKursus = () => {
    // Navigasi ke halaman login
    navigate("/detailkursus");
  };
  return (
    <div className={`freemium-courses ${className}`}>
      <Card
        className="card-instance"
        group="/img/group-2-7.png"
        rectangle={cardRectangle}
        text={cardText}
        variasi="regular-freemium"
        vector="/img/vector-1-4.svg"
        onClick={handleClickDetailKursus} style={{ cursor: "pointer" }}
      />
      <Card
        className="design-component-instance-node"
        frameClassName={cardFrameClassName}
        group={cardGroup}
        rectangle={cardImg}
        text={cardText1}
        variasi="regular-freemium"
        vector={cardVector}
        onClick={handleClickDetailKursus} style={{ cursor: "pointer" }}
      />
      <Card
        className="card-2"
        group="/img/group-2-7.png"
        rectangle={cardRectangle1}
        text={cardText2}
        variasi="regular-freemium"
        vector="/img/vector-1-4.svg"
        onClick={handleClickDetailKursus} style={{ cursor: "pointer" }}
      />
      <Card
        className="card-3"
        group="/img/group-2-7.png"
        rectangle={cardRectangle2}
        text={cardText3}
        variasi="regular-freemium"
        vector="/img/vector-1-4.svg"
        onClick={handleClickDetailKursus} style={{ cursor: "pointer" }}
      />
    </div>
  );
};

FreemiumCourses.propTypes = {
  cardText: PropTypes.string,
  cardRectangle: PropTypes.string,
  cardVector: PropTypes.string,
  cardText1: PropTypes.string,
  cardGroup: PropTypes.string,
  cardImg: PropTypes.string,
  cardText2: PropTypes.string,
  cardRectangle1: PropTypes.string,
  cardText3: PropTypes.string,
  cardRectangle2: PropTypes.string,
};
