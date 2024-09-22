import React, { useRef, useEffect } from "react";
import { FormUpgrade } from "./FormUpgrade/FormUpgrade";
import "./style.css";

export const StudentKitUpgradeDialog = ({isOpen,toggle, onOpenSuccessDialog}) => {
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
      <div className="student-kit-upgrade">
        <div className="frame-2">
          <p className="heading-masuk">
            Wah, akunmu belum terdaftar
            <br />
            sebagai Akun Student
          </p>
          <p className="p">
            Yuk upgrade sekarang dan dapatkan harga spesial selama 1 tahun!
          </p>
          <FormUpgrade
            className="form-upgrade-instance"
            varian="ugrade-default"
            verifStudentKitGroup="img/group.png"
            openDialog={onOpenSuccessDialog}
          />
        </div>
        <img
          className="student-stress-pana"
          alt="Student stress pana"
          src="img/pana.svg"
        />
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

export default StudentKitUpgradeDialog;
