import PropTypes from "prop-types";
import React from "react";
import { DropdownMateri } from "../DropdownMateri";
import "./style.css";

export const DropdownLms = ({
  varian,
  className,
  fluent = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid.svg",
  fluentMdl = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-1.svg",
  img = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-2.svg",
  fluent1 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-3.svg",
  fluent2 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-4.svg",
  fluent3 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-5.svg",
  fluent4 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-6.svg",
  fluent5 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-7.svg",
  fluent6 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-8.svg",
  fluent7 = "https://c.animaapp.com/ali3WNzS/img/fluent-mdl2-completed-solid-9.svg",
}) => {
  return (
    <div className={`dropdown-LMS ${className}`}>
      <div className="frame">
        <div className="div-wrapper">
          <div className="text-wrapper">Materi Pelatihan</div>
        </div>
        <img
          className="vector"
          alt="Vector"
          src={
            varian === "shorten"
              ? "https://c.animaapp.com/ali3WNzS/img/vector.svg"
              : "https://c.animaapp.com/ali3WNzS/img/vector-2.svg"
          }
        />
      </div>
      {varian === "expand" && (
        <div className="div">
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Content Marketing Strategy</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">SEO (Search Engine Optimization)</div>
            </div>
          </div>
          <DropdownMateri className="dropdown-materi-course" text="Social Media Marketing" varian="closed" />
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Email Marketing Automation</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">PPC (Pay-Per-Click) Advertising</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Conversion Rate Optimization (CRO)</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Analytics and Data-Driven Marketing</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Affiliate Marketing</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">E-commerce Marketing</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="alur-penggunaan-wrapper">
              <div className="alur-penggunaan">Digital Strategy &amp; Planning</div>
            </div>
          </div>
          <img className="fluent" alt="Fluent" src={fluent} />
          <img className="fluent-mdl" alt="Fluent" src={fluentMdl} />
          <img className="img" alt="Fluent" src={img} />
          <img className="fluent-2" alt="Fluent" src={fluent1} />
          <img className="fluent-3" alt="Fluent" src={fluent2} />
          <img className="fluent-4" alt="Fluent" src={fluent3} />
          <img className="fluent-5" alt="Fluent" src={fluent4} />
          <img className="fluent-6" alt="Fluent" src={fluent5} />
          <img className="fluent-7" alt="Fluent" src={fluent6} />
          <img className="fluent-8" alt="Fluent" src={fluent7} />
        </div>
      )}
    </div>
  );
};

DropdownLms.propTypes = {
  varian: PropTypes.oneOf(["expand", "shorten"]),
  fluent: PropTypes.string,
  fluentMdl: PropTypes.string,
  img: PropTypes.string,
  fluent1: PropTypes.string,
  fluent2: PropTypes.string,
  fluent3: PropTypes.string,
  fluent4: PropTypes.string,
  fluent5: PropTypes.string,
  fluent6: PropTypes.string,
  fluent7: PropTypes.string,
};