import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "./style.css";

export const BannerHome = ({ varian, bannerAtas = "https://c.animaapp.com/IMLcrDb6/img/banner-atas-2.png" }) => {
  const banners = [
    "https://c.animaapp.com/IMLcrDb6/img/banner-atas-3.png",
    "https://c.animaapp.com/IMLcrDb6/img/banner-atas-2.png",
    "https://c.animaapp.com/IMLcrDb6/img/banner-atas-1.png",
    "https://c.animaapp.com/IMLcrDb6/img/banner-atas.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(intervalId); // Cleanup interval saat komponen unmount
  }, [banners.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index); // Mengganti slide sesuai dot yang diklik
  };

  return (
    <div className="banner-home">
      <img
        className="banner-atas"
        alt="Banner atas"
        src={banners[currentIndex]} // Gambar berdasarkan index yang aktif
      />

      {/* Dot Pagination */}
      <div className="dots-pagination">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)} // Fungsi untuk mengganti slide ketika dot diklik
          />
        ))}
      </div>

      <div className={`dots ${varian}`}>
        {varian === "pay-later" && (
          <>
            <div className="background" />
            <div className="div" />
            <div className="div" />
            <div className="div" />
          </>
        )}

        {["freemium", "new-features", "student-kit"].includes(varian) && (
          <div className="frame">
            <div className="div" />
            <div className="background-2" />
            <div className="background-3" />
            <div className="background-4" />
          </div>
        )}
      </div>
    </div>
  );
};

BannerHome.propTypes = {
  varian: PropTypes.oneOf(["freemium", "student-kit", "new-features", "pay-later"]),
  bannerAtas: PropTypes.string,
};

