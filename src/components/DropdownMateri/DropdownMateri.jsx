import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DropdownMateri = ({ varian, className, text = "Alur Penggunaan" }) => {
  const [state, dispatch] = useReducer(reducer, {
    varian: varian || "closed",
  });

  return (
    <div
      className={`dropdown-materi ${state.varian} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {["closed", "locked"].includes(state.varian) && (
        <div className="frame-2">
          <div className="alur-penggunaan-2">{text}</div>
          <img
            className="gridicons-dropdown"
            alt="Gridicons dropdown"
            src={
              state.varian === "locked"
                ? "https://c.animaapp.com/ali3WNzS/img/gridicons-dropdown-2.svg"
                : "https://c.animaapp.com/ali3WNzS/img/gridicons-dropdown.svg"
            }
          />
        </div>
      )}

      {state.varian === "open" && (
        <>
          <div className="frame-3">
            <div className="alur-penggunaan-3">{text}</div>
            <img
              className="gridicons-dropdown"
              alt="Gridicons dropdown"
              src="https://c.animaapp.com/ali3WNzS/img/gridicons-dropdown-1.svg"
            />
          </div>
          <div className="frame-4">
            <div className="text-wrapper-2">Deskripsi detail dropdown</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        varian: "open",
      };
  }

  return state;
}

DropdownMateri.propTypes = {
  varian: PropTypes.oneOf(["closed", "open", "locked"]),
  text: PropTypes.string,
};