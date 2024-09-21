import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style.css";

export const TabMenu = ({ varian, className, leftText = "Tab Kiri", rightText = "Tab Kanan", contentA, contentB }) => {
  const [state, dispatch] = useReducer(reducer, {
    varian: varian || "kiri-aktif",
  });

  return (
    <div className={`tab-menu ${className}`}>
      {/* Tab Kiri */}
      <div
        className="frame-6"
        onClick={() => {
          dispatch("click_654");
        }}
      >
        <div className={`review-CV-wrapper ${state.varian}`}>
          <div className="review-CV">{leftText}</div>
        </div>
        <div className={`rectangle varian-0-${state.varian}`} />
      </div>

      {/* Tab Kanan */}
      <div
        className="frame-6"
        onClick={() => {
          dispatch("click");
        }}
      >
        <div className={`frame-7 varian-1-${state.varian}`}>
          <div className="review-CV-2">{rightText}</div>
        </div>
        <div className={`rectangle-2 varian-3-${state.varian}`} />
      </div>

      {/* Konten yang berubah sesuai dengan tab yang diklik */}
      <div className="tab-content">
        {state.varian === "kiri-aktif" ? (
          <div>{contentA}</div>
        ) : (
          <div style={{ height: 0, width: 0 }}>
            {contentB}
          </div>
        )}
      </div>
    </div>
  );
};

// Reducer untuk menangani klik tab kiri dan kanan
function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        varian: "kanan-aktif",
      };
    case "click_654":
      return {
        ...state,
        varian: "kiri-aktif",
      };
    default:
      return state;
  }
}

TabMenu.propTypes = {
  varian: PropTypes.oneOf(["kanan-aktif", "kiri-aktif"]),
  leftText: PropTypes.string,
  rightText: PropTypes.string,
  contentA: PropTypes.node, // Konten yang akan ditampilkan saat tab kiri aktif
  contentB: PropTypes.node, // Konten yang akan ditampilkan saat tab kanan aktif
};
