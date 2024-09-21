import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { CheckboxOff4 } from "../../icons/CheckboxOff4";
import { CheckboxOnVariant3 } from "../../icons/CheckboxOnVariant3";
import { Chip } from "../Chip";
import "./style.css";

export const ListKeranjang = ({
  varian,
  className,
  chipText = "WEBINAR",
  frame = "https://c.animaapp.com/Mj45bpJj/img/frame-37299.svg",
  line = "https://c.animaapp.com/Mj45bpJj/img/line-16.svg",
  elementPrakerja = "https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-3@2x.png",
  star = "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
  img = "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
  star1 = "https://c.animaapp.com/Mj45bpJj/img/star-28-3@2x.png",
  star2 = "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
  star3 = "https://c.animaapp.com/Mj45bpJj/img/star-30-3@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    varian: varian || "off",
  });

  return (
    <div
      className={`list-keranjang ${state.varian} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="frame">
        {["hover", "off"].includes(state.varian) && <input type="checkbox" id="select-all" name="pilih-semua" value="Select All"></input>}

        {state.varian === "on" && <CheckboxOnVariant3 className="checkbox-on" />}

        <img
          className="element-prakerja"
          alt="Element prakerja"
          src={
            state.varian === "hover"
              ? "https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-5@2x.png"
              : state.varian === "on"
              ? "https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-4@2x.png"
              : elementPrakerja
          }
        />
        <div className="div">
          <p className="text-wrapper">Teknik Menulis Berita Untuk Wartawan</p>
          <Chip className="instance-node" divClassName="chip-instance" text={chipText} />
          <div className="margin">
            <div className="container">
              <div className="div-wrapper">
                <div className="text-wrapper-2">Akademi Kopitani</div>
              </div>
            </div>
          </div>
          <div className="frame-2">
            <div className="frame-3">
              <img
                className="star"
                alt="Star"
                src={
                  state.varian === "hover"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
                    : state.varian === "on"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
                    : star
                }
              />
              <img
                className="star"
                alt="Star"
                src={
                  state.varian === "hover"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
                    : state.varian === "on"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
                    : img
                }
              />
              <img
                className="img"
                alt="Star"
                src={
                  state.varian === "hover"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-28-5@2x.png"
                    : state.varian === "on"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-28-4@2x.png"
                    : star1
                }
              />
              <img
                className="star"
                alt="Star"
                src={
                  state.varian === "hover"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
                    : state.varian === "on"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
                    : star2
                }
              />
              <img
                className="star"
                alt="Star"
                src={
                  state.varian === "hover"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
                    : state.varian === "on"
                    ? "https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
                    : star3
                }
              />
            </div>
            <div className="container-wrapper">
              <div className="container-2">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">5.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-4">
          <div className="text-wrapper-4">IDR 49.000</div>
          <img
            className="frame-5"
            alt="Frame"
            src={
              state.varian === "hover"
                ? "https://c.animaapp.com/Mj45bpJj/img/frame-37299-1.svg"
                : state.varian === "on"
                ? "https://c.animaapp.com/Mj45bpJj/img/frame-37299-2.svg"
                : frame
            }
          />
        </div>
      </div>
      <img
        className="line"
        alt="Line"
        src={
          state.varian === "hover"
            ? "https://c.animaapp.com/Mj45bpJj/img/line-16-1.svg"
            : state.varian === "on"
            ? "https://c.animaapp.com/Mj45bpJj/img/line-16-2.svg"
            : line
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.varian === "off") {
    switch (action) {
      case "click":
        return {
          varian: "on",
        };

      case "mouse_enter":
        return {
          varian: "hover",
        };
    }
  }

  if (state.varian === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          varian: "off",
        };
    }
  }

  return state;
}

ListKeranjang.propTypes = {
  varian: PropTypes.oneOf(["off", "on", "hover"]),
  chipText: PropTypes.string,
  frame: PropTypes.string,
  line: PropTypes.string,
  elementPrakerja: PropTypes.string,
  star: PropTypes.string,
  img: PropTypes.string,
  star1: PropTypes.string,
  star2: PropTypes.string,
  star3: PropTypes.string,
};