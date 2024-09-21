import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Button } from "../Button";
import "./style.css";
import { Button } from "../Button";


export const Kursus = ({
  tipe,
  className,
  rectangle = "https://c.animaapp.com/5iaNpuWz/img/rectangle-8-15@2x.png",
  text = "Nama Kursus Pijar Apa Saja Terserah",
  frameClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    tipe: tipe 
  });
  return (
    <div
      className={`kursus ${state.tipe} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="overlap-group-2">
        {(state.tipe === "LP-reg-paid" ||
          state.tipe === "LP-stud-free" ||
          state.tipe === "LP-stud-paid" ||
          state.tipe === "h-mycourse" ||
          state.tipe === "h-reg-paid" ||
          state.tipe === "h-stud-free" ||
          state.tipe === "h-stud-paid" ||
          state.tipe === "n-mycourse" ||
          state.tipe === "n-reg-paid" ||
          state.tipe === "n-stud-free" ||
          state.tipe === "n-stud-paid") && (
          <div className="group-3">
            {["LP-reg-paid", "h-mycourse", "h-reg-paid", "n-mycourse", "n-reg-paid"].includes(state.tipe) && (
              <img className="rectangle-3" alt="Rectangle" src={rectangle} />
            )}

            {["LP-stud-free", "LP-stud-paid", "h-stud-free", "h-stud-paid", "n-stud-free", "n-stud-paid"].includes(
              state.tipe
            ) && (
              <div className="overlap-group-3">
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-15@2x.png"
                />
                <img
                  className="vector"
                  alt="Vector"
                  src={
                    ["LP-stud-free", "h-stud-free", "n-stud-free"].includes(state.tipe)
                      ? "https://c.animaapp.com/5iaNpuWz/img/vector-2-5.svg"
                      : "https://c.animaapp.com/5iaNpuWz/img/vector-2-2.svg"
                  }
                />
                {["LP-stud-free", "h-stud-free", "n-stud-free"].includes(state.tipe) && (
                  <img className="vector-2" alt="Vector" src="https://c.animaapp.com/5iaNpuWz/img/vector-3-2.svg" />
                )}
              </div>
            )}
          </div>
        )}

        {["LP-reg-paid", "h-reg-paid", "n-reg-paid"].includes(state.tipe) && (
          <>
            <div className={`frame-8 ${frameClassName}`}>
              <div className="frame-9">
                <p className="nama-kursus-pijar">{text}</p>
                <div className="text-wrapper-15">MyEduSolve</div>
                <div className="frame-10">
                  <div className="frame-11">
                    <img className="group-4" alt="Group" src="https://c.animaapp.com/5iaNpuWz/img/group-2-2@2x.png" />
                    <div className="text-wrapper-16">4.9</div>
                  </div>
                  <div className="div-2">(245 Ulasan)</div>
                </div>
              </div>
              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-17">IDR</div>
                  <div className="text-wrapper-17">1.235.000</div>
                </div>
                <div className="IDR-wrapper">
                  <p className="div-3">
                    <span className="span">IDR</span>
                    <span className="text-wrapper-18">&nbsp;</span>
                  </p>
                </div>
                <div className="group-5">
                  <div className="div-3">988.000</div>
                </div>
              </div>
            </div>
            <img className="vector-3" alt="Vector" src="https://c.animaapp.com/5iaNpuWz/img/vector-5-2.svg" />
          </>
        )}

        {["LP-reg-free", "h-mitra", "h-reg-free", "n-mitra", "n-reg-free"].includes(state.tipe) && (
          <div
            className="rectangle-wrapper"
            onMouseEnter={() => {
              dispatch("mouse_enter_368");
            }}
            onMouseLeave={() => {
              dispatch("mouse_leave_368");
            }}
          >
            <img
              className="rectangle-5"
              alt="Rectangle"
              src={
                ["h-mitra", "n-mitra"].includes(state.tipe)
                  ? "https://c.animaapp.com/5iaNpuWz/img/rectangle-8-7@2x.png"
                  : "https://c.animaapp.com/5iaNpuWz/img/rectangle-8-15@2x.png"
              }
            />
          </div>
        )}

        {(state.tipe === "LP-reg-free" ||
          state.tipe === "LP-stud-free" ||
          state.tipe === "h-mitra" ||
          state.tipe === "h-reg-free" ||
          state.tipe === "h-stud-free" ||
          state.tipe === "n-mitra" ||
          state.tipe === "n-reg-free" ||
          state.tipe === "n-stud-free") && (
          <div className="frame-14">
            <div className="frame-15">
              {["h-mitra", "n-mitra"].includes(state.tipe) && (
                <>
                  <div className="text-wrapper-19">Nama Mitra</div>
                  <div className="text-wrapper-20">999 Kursus</div>
                </>
              )}

              {["LP-reg-free", "LP-stud-free", "h-reg-free", "h-stud-free", "n-reg-free", "n-stud-free"].includes(
                state.tipe
              ) && (
                <>
                  <p className="nama-kursus-pijar-2">{text}</p>
                  <div className="text-wrapper-15">MyEduSolve</div>
                  <div className="frame-10">
                    <div className="frame-11">
                      <img
                        className="group-4"
                        alt="Group"
                        src="https://c.animaapp.com/5iaNpuWz/img/group-2-11@2x.png"
                      />
                      <div className="text-wrapper-16">4.7</div>
                    </div>
                    <div className="div-2">
                      {["LP-stud-free", "h-stud-free", "n-stud-free"].includes(state.tipe) && <>(23 Ulasan)</>}

                      {["LP-reg-free", "h-reg-free", "n-reg-free"].includes(state.tipe) && <>(953 Ulasan)</>}
                    </div>
                  </div>
                </>
              )}
            </div>
            {["LP-reg-free", "LP-stud-free", "h-reg-free", "h-stud-free", "n-reg-free", "n-stud-free"].includes(
              state.tipe
            ) && (
              <div className="frame-wrapper">
                <div className="frame-18">
                  {["LP-stud-free", "h-stud-free", "n-stud-free"].includes(state.tipe) && (
                    <>
                      <div className="group-6">
                        <div className="text-wrapper-21">STUDENT KIT PRICE</div>
                      </div>
                      <div className="text-wrapper-22">GRATIS</div>
                    </>
                  )}

                  {["LP-reg-free", "h-reg-free", "n-reg-free"].includes(state.tipe) && <>GRATIS</>}
                </div>
              </div>
            )}
          </div>
        )}

        {["LP-stud-paid", "h-mycourse", "h-stud-paid", "n-mycourse", "n-stud-paid"].includes(state.tipe) && (
          <div className={`frame-16 ${frameClassName}`}>
            <div className="frame-9">
              <p className="nama-kursus-pijar-3">{text}</p>
              <div className="text-wrapper-15">MyEduSolve</div>
              {["LP-stud-paid", "h-stud-paid", "n-stud-paid"].includes(state.tipe) && (
                <div className="frame-10">
                  <div className="frame-11">
                    <img className="group-4" alt="Group" src="https://c.animaapp.com/5iaNpuWz/img/group-2-8@2x.png" />
                    <div className="text-wrapper-16">4.9</div>
                  </div>
                  <div className="div-2">(317 Ulasan)</div>
                </div>
              )}
            </div>
            {["LP-stud-paid", "h-stud-paid", "n-stud-paid"].includes(state.tipe) && (
              <div className="group-7">
                <div className="frame-17">
                  <div className="group-6">
                    <div className="text-wrapper-21">STUDENT KIT PRICE</div>
                  </div>
                  <div className="frame-11">
                    <p className="div-4">
                      <span className="span">IDR</span>
                      <span className="text-wrapper-18">&nbsp;</span>
                    </p>
                    <div className="div-4">319.200</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {["LP-stud-free", "LP-stud-paid", "h-stud-free", "h-stud-paid", "n-stud-free", "n-stud-paid"].includes(
          state.tipe
        ) && <div className="text-wrapper-23">20% OFF</div>}

        {["LP-stud-free", "h-stud-free", "n-stud-free"].includes(state.tipe) && (
          <div className="text-wrapper-24">PREMIUM</div>
        )}

        {["h-mycourse", "n-mycourse"].includes(state.tipe) && (
          <Button text="Belajar Sekarang" varian="short-big-filled"/>
        )} 
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.tipe === "n-reg-paid") {
    switch (action) {
      case "mouse_enter":
        return {
          tipe: "h-reg-paid",
        };
    }
  }

  if (state.tipe === "h-reg-paid") {
    switch (action) {
      case "mouse_leave":
        return {
          tipe: "n-reg-paid",
        };
    }
  }

  if (state.tipe === "n-reg-free") {
    switch (action) {
      case "mouse_enter_368":
        return {
          tipe: "h-reg-free",
        };
    }
  }

  if (state.tipe === "h-reg-free") {
    switch (action) {
      case "mouse_leave_368":
        return {
          tipe: "n-reg-free",
        };
    }
  }

  if (state.tipe === "n-mitra") {
    switch (action) {
      case "mouse_enter":
        return {
          tipe: "h-mitra",
        };
    }
  }

  if (state.tipe === "h-mitra") {
    switch (action) {
      case "mouse_leave":
        return {
          tipe: "n-mitra",
        };
    }
  }

  if (state.tipe === "n-stud-paid") {
    switch (action) {
      case "mouse_enter":
        return {
          tipe: "h-stud-paid",
        };
    }
  }

  if (state.tipe === "h-stud-paid") {
    switch (action) {
      case "mouse_leave":
        return {
          tipe: "n-stud-paid",
        };
    }
  }

  if (state.tipe === "n-stud-free") {
    switch (action) {
      case "mouse_enter":
        return {
          tipe: "h-stud-free",
        };
    }
  }

  if (state.tipe === "h-stud-free") {
    switch (action) {
      case "mouse_leave":
        return {
          tipe: "n-stud-free",
        };
    }
  }

  if (state.tipe === "n-mycourse") {
    switch (action) {
      case "mouse_enter":
        return {
          tipe: "h-mycourse",
        };
    }
  }

  if (state.tipe === "h-mycourse") {
    switch (action) {
      case "mouse_leave":
        return {
          tipe: "n-mycourse",
        };
    }
  }

  return state;
}

Kursus.propTypes = {
  tipe: PropTypes.oneOf([
    "n-mycourse",
    "h-reg-free",
    "LP-reg-paid",
    "n-reg-free",
    "h-mitra",
    "LP-stud-free",
    "n-reg-paid",
    "n-stud-paid",
    "n-mitra",
    "h-stud-free",
    "h-stud-paid",
    "h-mycourse",
    "n-stud-free",
    "h-reg-paid",
    "LP-stud-paid",
    "LP-reg-free",
  ]),
  rectangle: PropTypes.string,
  text: PropTypes.string,
};
