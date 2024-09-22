import React, { useEffect, useRef } from "react";
// import { Button } from "src/components/Button";
import "./style.css";

export const StudentKitUpgradeSuccess = ({isOpen, onClose}) => {
  const successDialog = useRef();

  useEffect(() => {
    if (isOpen) {
      successDialog.current.showModal();
    } else {
      successDialog.current.close();
    }
  }, [isOpen]);

  const openHandler = () => {
    successDialog.current.showModal();
  }

  const closeHandler = () => {
    successDialog.current.close();
  };

  return (
    <dialog ref={successDialog}>
      <div className="student-kit-upgrade-s">
        <div className="frame">
          <div className="div">
            <img
              className="mask-group"
              alt="Mask group"
              src="img/mask-group.png"
            />
            <div className="frame-2">
              <p className="heading-masuk">Student Kit kamu sudah aktif!</p>
              <p className="text-wrapper">
                Kamu akan mendapatkan jharga spesial selama 1 tahun ke depan!
              </p>
            </div>
          </div>
          <button onClick={onClose} className="ok-button">OK</button>
        </div>
      </div>
    </dialog>
  );
};
