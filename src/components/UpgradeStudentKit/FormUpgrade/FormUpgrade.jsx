import React, { useState } from "react";
import PropTypes from "prop-types";
import { VerifStudentKit } from "../VerifStudentKit/VerifStudentKit";
import "./formUpgrade.css";

export const FormUpgrade = ({
  varian,
  className,
  verifStudentKitGroup,
  inputType = "email",
  inputType1 = "email",
  openDialog,
}) => {
  const [inputEmail, setInputEmail] = useState("");
  const [property1, setProperty1] = useState("info");

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputEmail(input);

    if (input === "") {
      setProperty1("warning");
    } else if (/@[a-zA-Z0-9-]+(\.[a-zA-Z]+)+$/.test(input)) {
      setProperty1("success");
    } else {
      setProperty1("fail");
    }
  };

  const handleUpgradeClick = () => {
    openDialog();
  };

  return (
    <div className={`form-upgrade ${className}`}>
      <div className="div">
        <div className="div">
          <p className="label-email">Email</p>
          <div className="text-box">
            <input
              className="input"
              placeholder="example@email.com"
              type={inputType}
              value={inputEmail}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <VerifStudentKit
          className="verif-student-kit-instance"
          group={verifStudentKitGroup}
          property1={property1}
        />
      </div>
      <button className="button" onClick={handleUpgradeClick}>
        <div className="text-wrapper">Upgrade</div>
      </button>
    </div>
  );
};

FormUpgrade.propTypes = {
  varian: PropTypes.oneOf(["ugrade-default"]),
  verifStudentKitGroup: PropTypes.string,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
  openDialog: PropTypes.func,
};
