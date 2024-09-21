/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Footer = ({ className, sosmed = "/img/sosmed-2.svg", SVG = "/img/svg-2.svg" }) => {
  return (
    <div className={`footer ${className}`}>
      <div className="link-kebijakan">Kebijakan Privasi</div>
      <div className="text-wrapper-12-1">•</div>
      <div className="link-syarat-dan">Syarat dan Ketentuan</div>
      <p className="p">©2020-2024 Pijar Mahir. All Right Reserved</p>
      <div className="link">
        <div className="text-wrapper-13-1">Layanan Pengaduan Konsumen</div>
        <p className="text-wrapper-14-1">Gedung Telkom Direktorat Business and Technology</p>
        <div className="container">
          <p className="jl-prof-DR-soepomo">
            Jl. Prof. DR. Soepomo No.139, RT.13/RW.2, Tebet Bar., Kec.
            <br />
            Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
            <br />
            12810
          </p>
        </div>
      </div>
      <img className="telkom-putih" alt="Telkom putih" src="/img/telkom-putih-1-2.png" />
      <div className="text-wrapper-15-1">powered by</div>
      <img className="sosmed" alt="Sosmed" src={sosmed} />
      <div className="frame-10-1">
        <img
          className="png-transparent"
          alt="Png transparent"
          src="/img/png-transparent-google-play-app-store-apple-apple-text-rectangle-4.png"
        />
        <img
          className="png-transparent-2"
          alt="Png transparent"
          src="/img/png-transparent-google-play-app-store-apple-apple-text-rectangle-5.png"
        />
      </div>
      <div className="text-wrapper-16-1">Kontak Pelanggaran Usaha</div>
      <p className="direktorat-jenderal">
        Direktorat Jenderal Perlindungan Konsumen dan Tertib
        <br />
        Niaga Kementerian Perdagangan Republik Indonesia
      </p>
      <img className="SVG" alt="Svg" src={SVG} />
      <div className="text-wrapper-17-1">Whatsapp: 0853 1111 1010</div>
      <a href="https://wa.me/6281288999576" target="_blank">
        <img className="whatsapp-icon" alt="Whatsapp icon" src="/img/whatsapp-icon-1-2.png" />
        </a>
      <div className="frame-11-1">
        <div className="frame-12-1">
          <div className="text-wrapper-18-1">Produk</div>
          <div className="link-2">
            <div className="text-wrapper-19-1">Tentang Pijar Mahir</div>
          </div>
          <div className="link-2">
            <div className="text-wrapper-20-1">Pijar Camp</div>
          </div>
          <div className="link-2">
            <div className="text-wrapper-21-1">Bermitra dengan Pijar Mahir</div>
          </div>
          <div className="link-2">
            <div className="text-wrapper-22-2">Pijar Mahir Enterprise</div>
          </div>
        </div>
        <div className="frame-13-2">
          <div className="text-wrapper-18-1">Support</div>
          <div className="link-2">
            <div className="text-wrapper-23-2">Bantuan</div>
          </div>
          <div className="link-2">
            <div className="text-wrapper-24-2">Hubungi Kami</div>
          </div>
        </div>
        <div className="frame-14-2">
          <div className="text-wrapper-18-1">Blog</div>
          <div className="link-2">
            <div className="text-wrapper-25-2">Berita</div>
          </div>
          <div className="link-2">
            <div className="program-promo">Program &amp; Promo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  sosmed: PropTypes.string,
  SVG: PropTypes.string,
};
