/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Card = ({
  variasi,
  className,
  rectangle = "/img/rectangle-8-8.png",
  text = "Nama Kursus Pijar Apa Saja Terserah",
  frameClassName,
  group = "/img/group-2-7.png",
  vector = "/img/vector-1-4.svg",
  rectangleClassName,
  img = "/img/rectangle-8-2.png",
  text1 = "Nama Mitra",
  text2 = "999 Kursus",
  ...props
}) => {
  const navigate = useNavigate();

  // Handle click based on variation
  const handleClick = () => {
    if (variasi === "regular-freemium") {
      navigate("/detailkursusfreemium");  // Path halaman freemium
    } else if (variasi === "regular-paid") {
      navigate("/detailkursuspaid");  // Path halaman paid
    }
  };
  return (
    
    <div className={`card ${variasi} ${className}`}{...props}onClick={handleClick}style={{ cursor: "pointer" }}>
      <div className="overlap-group">
        <div className="group">
          {["student-freemium", "student-paid"].includes(variasi) && (
            <div className="div">
              <img className="img" alt="Rectangle" src={rectangle} />
              <img
                className="vector"
                alt="Vector"
                src={variasi === "student-freemium" ? "/img/vector-2-1.svg" : "/img/vector-2.svg"}
              />
              {variasi === "student-freemium" && <img className="vector-2" alt="Vector" src="/img/vector-3.svg" />}
            </div>
          )}

          {["mitra", "regular-freemium", "regular-paid"].includes(variasi) && (
            <img
              className={`rectangle-2 ${rectangleClassName}`}
              alt="Rectangle"
              src={variasi === "mitra" ? img : rectangle}
            />
          )}
        </div>
        {["mitra", "regular-freemium", "regular-paid"].includes(variasi) && (
          <div className={`frame-2 ${frameClassName}`}>
            <div className="frame-3">
              {variasi === "mitra" && (
                <>
                  <div className="nama-mitra">{text1}</div>
                  <div className="element-kursus">{text2}</div>
                </>
              )}

              {["regular-freemium", "regular-paid"].includes(variasi) && (
                <>
                  <p className="nama-kursus-pijar">{text}</p>
                  <div className="text-wrapper-2">MyEduSolve</div>
                  <div className="frame-4">
                    <div className="frame-5">
                      <img className="group-2" alt="Group" src={group} />
                      <div className="text-wrapper-3">4.7</div>
                    </div>
                    <div className="text-wrapper-4">(23 Ulasan)</div>
                  </div>
                </>
              )}
            </div>
            {["regular-freemium", "regular-paid"].includes(variasi) && (
              <div className="IDR-wrapper">
                <div className="IDR-2">
                  {variasi === "regular-paid" && (
                    <>
                      <p className="span-wrapper">
                        <span className="span">IDR 399.000</span>
                      </p>
                    </>
                  )}

                  {variasi === "regular-freemium" && (
                    <>
                      <div className="text-wrapper-6">GRATIS</div>
                      <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                          <div className="text-wrapper-7">IDR 49.000</div>
                          <img className="vector-3" alt="Vector" src={vector} />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {["student-freemium", "student-paid"].includes(variasi) && (
          <>
            <div className="frame-6">
              <div className="frame-3">
                <p className="nama-kursus-pijar">{text}</p>
                <div className="text-wrapper-2">MyEduSolve</div>
                <div className="frame-4">
                  <div className="frame-5">
                    <img className="group-2" alt="Group" src="/img/group-2-7.png" />
                    <div className="text-wrapper-3">4.7</div>
                  </div>
                  <div className="text-wrapper-4">(23 Ulasan)</div>
                </div>
              </div>
              <div className="group-3">
                {variasi === "student-paid" && (
                  <>
                    <p className="IDR">
                      <span className="span">IDR</span>
                      <span className="text-wrapper-5"> 319.200</span>
                    </p>
                    <div className="div-wrapper">
                      <div className="text-wrapper-8">STUDENT KIT PRICE</div>
                    </div>
                  </>
                )}

                {variasi === "student-freemium" && (
                  <div className="overlap-group-3">
                    <div className="text-wrapper-9">GRATIS</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-8">STUDENT KIT PRICE</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-wrapper-10">20% OFF</div>
          </>
        )}

        {variasi === "student-freemium" && <div className="text-wrapper-11">PREMIUM</div>}
      </div>
    </div>
  );
};

Card.propTypes = {
  variasi: PropTypes.oneOf(["regular-freemium", "student-freemium", "regular-paid", "mitra", "student-paid"]),
  rectangle: PropTypes.string,
  text: PropTypes.string,
  group: PropTypes.string,
  vector: PropTypes.string,
  img: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
