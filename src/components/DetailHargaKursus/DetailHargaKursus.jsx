import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const DetailHargaKursus = ({ varian, className }) => {
  const navigate = useNavigate();
  const handleClickPembayaran = () => {
    // Navigasi ke Pembayaran
    navigate("/pembayaran");
  };
  return (

    <div className={`detail-harga-kursus ${varian} ${className}`}>
      {["reg-freemium", "reg-paid"].includes(varian) && (
        <div className="div-1">
          <img
            className="element-prakerja"
            alt="Element prakerja"
            src={
              varian === "reg-freemium"
                ? "https://c.animaapp.com/2SEX4X9W/img/4832-prakerja-wartawan-thumbnail---343-x-179-1-4@2x.png"
                : "https://c.animaapp.com/IMLcrDb6/img/rectangle-8-25@2x.png"
            }
          />
          <div className="frame-2">
            <div className="frame-3">
              <div className="container-wrapper">
                <div className="container-wrapper">
                  <div className="container">
                    <div className="div-2">
                      {varian === "reg-freemium" && <>Harga Akses Premium :</>}

                      {varian === "reg-paid" && <>Harga Kursus Webinar :</>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper">Rp 49.000</div>
            </div>
            <div className="frame-4">
              <img
                className="heart"
                alt="Heart"
                src={
                  varian === "reg-paid"
                    ? "https://c.animaapp.com/2SEX4X9W/img/heart-1-3@2x.png"
                    : "https://c.animaapp.com/2SEX4X9W/img/heart-1-4@2x.png"
                }
              />
              <img
                className="share"
                alt="Share"
                src={
                  varian === "reg-paid"
                    ? "https://c.animaapp.com/2SEX4X9W/img/share-1-3@2x.png"
                    : "https://c.animaapp.com/2SEX4X9W/img/share-1-4@2x.png"
                }
              />
            </div>
          </div>
          <div className="frame-5">
            <Button
              text={varian === "reg-freemium" ? "Akses Gratis" : "Tambahkan ke Keranjang"}
              varian="custom-width-big-outline"
            />
            <Button
              text={varian === "reg-paid" ? "Beli Sekarang" : "Tambahkan ke Keranjang"}
              varian={varian === "reg-paid" ? "custom-width-big-filled" : "custom-width-big-outline"}
            />
            {varian === "reg-freemium" && (
              <Button  text="Beli Premium Sekarang" varian="custom-width-big-filled" onClick={handleClickPembayaran} style={{ cursor: "pointer" }}/>
            )}
          </div>
        </div>
      )}

      {["student-freemium", "student-paid"].includes(varian) && (
        <>
          <div className="frame-6">
            <img
              className="element-prakerja"
              alt="Element prakerja"
              src={
                varian === "student-paid"
                  ? "https://c.animaapp.com/2SEX4X9W/img/4832-prakerja-wartawan-thumbnail---343-x-179-1-2@2x.png"
                  : "https://c.animaapp.com/2SEX4X9W/img/4832-prakerja-wartawan-thumbnail---343-x-179-1-4@2x.png"
              }
            />
            <div className="frame-2">
              <div className="frame-3">
                <div className="container-wrapper">
                  <div className="container-wrapper">
                    <div className="container">
                      <div className="div-2">Spesial Student Kit</div>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="overlap-group">
                    <div className="margin">
                      <div className="container-wrapper">
                        <div className="container">
                          <div className="text-wrapper-2">IDR 49.000</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="line"
                      alt="Line"
                      src={
                        varian === "student-paid"
                          ? "https://c.animaapp.com/2SEX4X9W/img/line-24-1.svg"
                          : "https://c.animaapp.com/2SEX4X9W/img/line-24.svg"
                      }
                    />
                  </div>
                </div>
                <div className="text-wrapper">IDR 39.200</div>
              </div>
              <div className="frame-4">
                <img
                  className="heart"
                  alt="Heart"
                  src={
                    varian === "student-paid"
                      ? "https://c.animaapp.com/2SEX4X9W/img/heart-1-3@2x.png"
                      : "https://c.animaapp.com/2SEX4X9W/img/heart-1-4@2x.png"
                  }
                />
                <img
                  className="share"
                  alt="Share"
                  src={
                    varian === "student-paid"
                      ? "https://c.animaapp.com/2SEX4X9W/img/share-1-3@2x.png"
                      : "https://c.animaapp.com/2SEX4X9W/img/share-1-4@2x.png"
                  }
                />
              </div>
            </div>
            <div className="frame-7">
              <Button
                className="button-instance"
                text={varian === "student-freemium" ? "Akses Gratis" : "Tambahkan ke Keranjang"}
                varian="custom-width-big-outline"
              />
              <Button
                className="button-instance"
                text={varian === "student-paid" ? "Beli Premium Sekarang" : "Tambahkan ke Keranjang"}
                varian={varian === "student-paid" ? "custom-width-big-filled" : "custom-width-big-outline"}
              />
              {varian === "student-freemium" && (
                <Button className="button-instance" text="Beli Premium Sekarang" varian="custom-width-big-filled" />
              )}
            </div>
          </div>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/2SEX4X9W/img/vector-4-1.svg" />
          <div className="text-wrapper-3">20% OFF</div>
        </>
      )}
    </div>
    
  );
};

DetailHargaKursus.propTypes = {
  varian: PropTypes.oneOf(["student-freemium", "reg-freemium", "reg-paid", "student-paid"]),
};
