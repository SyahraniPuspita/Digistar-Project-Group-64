import PropTypes from "prop-types";
import React from "react";
import "./verifStudentKit.css";

export const VerifStudentKit = ({ property1, className, group = "img/group-2.png" }) => {
  return (
    <div className={`verif-student-kit ${property1} ${className}`}>
      <div className="frame">
        <img
          className="vector"
          alt="Vector"
          src={
            property1 === "fail"
              ? "img/image.png"
              : property1 === "warning"
              ? "img/group-3.png"
              : property1 === "info"
              ? group
              : "img/vector.svg"
          }
        />
        <div className="universitas">
          {property1 === "success" && <>Universitas Indonesia</>}

          {property1 === "fail" && (
            <p className="text-wrapper-2">Tidak terdeteksi sebagai e-mail student. Silakan periksa kembali.</p>
          )}

          {["info", "warning"].includes(property1) && <>Masukkan e-mail student</>}
        </div>
      </div>
    </div>
  );
};

VerifStudentKit.propTypes = {
  property1: PropTypes.oneOf(["warning", "fail", "success", "info"]),
  group: PropTypes.string,
};