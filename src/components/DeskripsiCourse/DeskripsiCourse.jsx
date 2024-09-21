import PropTypes from "prop-types";
import React, { useState } from "react";
import "./style.css";

export const DeskripsiCourse = ({ initialMode = "shorten", className, pelatihanIniClassName, varian }) => {
  // State untuk mengontrol apakah teks dipendekkan atau diperluas
  const [mode, setMode] = useState(initialMode);

  // Event handler untuk mengubah mode (toggle antara "shorten" dan "expand")
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "shorten" ? "expand" : "shorten"));
  };

  return (
    <div className={`deskripsi-course ${mode} ${className}`}>
      <div className="frame-8">
        <div className={`ellipse ${varian === "reg-freemium" ? "ellipse-freemium" : "ellipse-paid"}`} />
        <div className="text-wrapper-4">Deskripsi Pelatihan</div>
      </div>
      {/* Rendering teks berdasarkan mode (dipendekkan atau diperluas) */}
      <p className={`pelatihan-ini ${pelatihanIniClassName}`}>
        <span className="span">Pelatihan ini menggunakan mode </span>
        <span className="text-wrapper-5">video learning</span>
        <span className="span">
          {" "}
          dengan okupasi IndoTask 2020 / wartawan. Pelatihan Teknik Menulis Berita untuk Wartawan adalah program
          pelatihan intensif yang dirancang untuk meningkatkan keterampilan menulis dan peliputan berita bagi wartawan
          pemula maupun berpengalaman. Dalam era informasi yang serba cepat dan digital, kemampuan menulis berita yang
          akurat, tajam, dan menarik sangat penting untuk menjaga kredibilitas dan profesionalisme seorang wartawan.
          Pelatihan ini bertujuan untuk membekali peserta dengan teknik-teknik dasar dan lanjutan dalam penulisan
          berita, serta etika jurnalistik yang diperlukan dalam dunia media masa kini dengan tujuan khusus Peserta mampu
          melakukan perencanaan dan mengusulkan topik liputan, mampu mencari dan mengumpulkan data dan informasi, mampu
          melakukan wawancara dengan narasumber, mampu menulis berita berdasarkan data dan informasi dari hasil liputan
          dan wawancara dan peserta mampu mengedit naskah berita liputan.
        </span>
      </p>
      {/* Tombol untuk memperluas atau menyembunyikan teks */}
      <div  className={`selengkapnya ${varian === "reg-freemium" ? "text-freemium" : "text-paid"}`} onClick={toggleMode} style={{ cursor: "pointer" }}>
        {mode === "shorten" ? <>Selengkapnya</> : <>Sembunyikan</>}
      </div>
    </div>
  );
};

DeskripsiCourse.propTypes = {
  initialMode: PropTypes.oneOf(["expand", "shorten"]),
  className: PropTypes.string,
  pelatihanIniClassName: PropTypes.string,
};


