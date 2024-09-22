import React, { useRef, useEffect } from "react";
import "./style.css";

export const StudentKitActive = ({isOpen, toggle}) => {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  const openHandler = () => {
    dialog.current.showModal();
  };

  const closeHandler = () => {
    dialog.current.close();
  };

  return (
    <dialog ref={dialog}>
      <div className="student-kit-active">
        <div className="frame">
          <img
            className="happy-student-pana"
            alt="Happy student pana"
            src="img/pana-active.svg"
          />
          <div className="div">
            <p className="heading-masuk">
              <span className="text-wrapper">
                Yay! Kamu bisa menikmati benefit{" "}
              </span>
              <span className="span">Student Kit</span>
            </p>
            <p className="p">Akun student ini berlaku hingga</p>
            <p className="span-wrapper">
              <span className="text-wrapper-2">26 September 2025</span>
            </p>
          </div>
        </div>
        <button onClick={toggle}>
        <img
          className="carbon-close-filled"
          alt="Carbon close filled"
          src="img/carbon-close-filled.svg"
        />
        </button>
      </div>
    </dialog>
  );
};
