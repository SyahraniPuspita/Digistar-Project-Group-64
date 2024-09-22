import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const KursusTestimoni = ({
  className,
  ellipse = "https://c.animaapp.com/xc5GBsR3/img/ellipse-1@2x.png",
  text = "DITERIMA KERJA DI&nbsp;&nbsp;12 PERUSAHAAN TERNAMA",
  text1 = "Alvandreas Joan Z.",
}) => {
  return (
    <div className={`kursus-testimoni ${className}`}>
      <div className="frame-4">
        <img className="ellipse" alt="Ellipse" src={ellipse} />
        <div className="frame-5">
          <div className="frame-6">
            <p className="DITERIMA-KERJA-DI">{text}</p>
            <p className="p">
              Testimoni user aku pengen makan tengah malem tapi males ngambilnya jadi yaudah aku nahan laper dulu
            </p>
          </div>
          <div className="alvandreas-joan-z">{text1}</div>
        </div>
      </div>
    </div>
  );
};

KursusTestimoni.propTypes = {
  ellipse: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};