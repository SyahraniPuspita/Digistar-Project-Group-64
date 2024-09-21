import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { FreemiumCourses } from "../../components/FreemiumCourses";
import { KategoriKursus } from "../../components/KategoriKursus";
import { Testimoni } from "../../components/Testimoni";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import  DropdownCategories  from "../../components/DropdownCategories";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimoniData.length - 2 : (prevIndex - 2 + testimoniData.length) % testimoniData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 2) % testimoniData.length
    );
  };
  const testimoniData = [
    {
      ellipse: "/img/ellipse-1-1.png",
      text: "DITERIMA KERJA DI PERUSAHAAN BESAR",
      text1: "Setelah dapat banyak kursus dan sertifikasi di Pijar, CV dan skill-ku meningkat drastis dan aku dapat offering dari 12 perusahaan besar!",
      text2: "Adinda Aletheia",
    },
    {
      ellipse: "/img/ellipse-1-2.png",
      text: "KERJA REMOTE DI PERUSAHAAN SINGAPORE",
      text1: "Dulu aku nganggur 2 tahun sehabis lulus, setelah pakai Pijar aku jadi bisa maksimalkan potensiku dan kini aku WFH di Perusahaan Singapore dengan gaji dua digit.",
      text2: "Alvandreas Joan Z.",
    },
    {
      ellipse: "/img/ellipse-1-2.png",
      text: "KERJA REMOTE DI USA",
      text1: "Dulu aku nganggur 2 tahun sehabis lulus, setelah pakai Pijar aku jadi bisa maksimalkan potensiku dan kini aku WFH di Perusahaan Singapore dengan gaji dua digit.",
      text2: "Alvandreas Joan Z.",
    },
    {
      ellipse: "/img/ellipse-1-1.png",
      text: "DITERIMA KERJA DI PERUSAHAAN BUMN",
      text1: "Setelah dapat banyak kursus dan sertifikasi di Pijar, CV dan skill-ku meningkat drastis dan aku dapat offering dari 12 perusahaan besar!",
      text2: "Adinda Aletheia",
    }
  ];
  
  const navigate = useNavigate();

  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };

  const handleClickLandingPage = () => {
    // Navigasi ke halaman landing page
    navigate("/");
  };

  const handleClickKategoriFilter = () => {
    // Navigasi ke halaman login
    navigate("/kategorifilter");
  };

  const handleClickDetailKursus = () => {
    // Navigasi ke halaman login
    navigate("/detailkursus");
  };
  

  return (
    <div className="landing-page">
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="/img/svg-13.svg" />
                <div className="text-wrapper-27">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="/img/svg-14.svg" />
                <div className="text-wrapper-27">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="/img/svg-15.svg" />
                <div className="text-wrapper-27">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="/img/svg-16.svg" />
                <div className="text-wrapper-27">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="navigasi-bawah">
          <header className="header">
            <LogoDefault4 className="logo-default" onClick={handleClickLandingPage} style={{ cursor: "pointer" }}/>
            <div className="menu-search">
              <div className="menu-text">
                <div className="text-wrapper-28">Kategori
                  <DropdownCategories/>   
                </div>
                <div className="non-course">
                  <div className="text-wrapper-29">Lowongan Kerja</div>
                </div>
                <div className="non-course-2">
                  <div className="text-wrapper-29">Non-Course</div>
                  <div class="dropdown-content">
                      <div class="category">
                        <a href="#">Review CV</a>
                      </div>
                      <div class="category">
                        <a href="#">Review Project</a>
                      </div>
                      <div class="category">
                        <a href="#">Project Based Internship</a>
                      </div>
                  </div>
                </div>
              </div>
              <div className="search-bar">
                <div className="border">
                  <div className="input">
                    <div className="overlap-group-5">
                      <div className="container-2">
                        <p className="text-wrapper-30">Cari kursus yang kamu inginkan</p>
                      </div>
                      <div className="container-3" />
                    </div>
                  </div>
                  <img className="margin" alt="Margin" src="/img/margin-2.svg" />
                </div>
              </div>
              <div className="frame-15">
                <div className="frame-wrapper">
                  <div className="frame-16" onClick={handleClickHome} style={{ cursor: "pointer" }}>
                    <div className="rectangle-3"  />
                      <div className="text-wrapper-31">Masuk</div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-16">
                    <img className="rectangle-4" alt="Rectangle" src="/img/rectangle-190-1.svg" />
                    <div className="text-wrapper-32">Daftar</div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <img className="SVG-3" alt="Svg" src="/img/svg-17.svg" />
      </div>
      <div className="konten">
        <div className="hero-section">
          <div className="overlap-2">
            <div className="overlap-3">
              <div className="image">
                <div className="overlap-group-6">
                  <img className="rectangle-5" alt="Rectangle" src="/img/rectangle-11.png" />
                  <img className="rectangle-6" alt="Rectangle" src="/img/rectangle-12.png" />
                  <img className="rectangle-7" alt="Rectangle" src="/img/rectangle-13.png" />
                  <div className="ellipse-wrapper">
                    <div className="ellipse-2" />
                  </div>
                  <div className="rectangle-8" />
                  <div className="rectangle-9" />
                </div>
              </div>
              <p className="judul">Learn Many Things to Unlock Your Potential</p>
              <p className="deskripsi">
                Kembangkan diri sesukamu dengan Pijar Mahir. Kami menyediakan layanan course offline dan online gratis,
                review CV, review project, dan Project-Based Internship untuk menunjang persiapan kariermu.
              </p>
            </div>
            <div className="masuk-daftar">
              <Button varian="short-big-filled"/>
              <Button id="daftar-landingpage" text="Daftar" varian="short-big-outline"/>
            </div>
            <div className="achievement">
              <div className="total-kursus">
                <div className="text-wrapper-33">2.900+</div>
                <div className="text-wrapper-34">Kursus</div>
              </div>
              <div className="text-wrapper-35">|</div>
              <div className="div-2">
                <div className="text-wrapper-33">1.000.000+</div>
                <div className="text-wrapper-34">Pendaftar</div>
              </div>
              <div className="text-wrapper-35">|</div>
              <div className="div-2">
                <div className="text-wrapper-33">170+</div>
                <div className="text-wrapper-34">Mitra Pelatihan</div>
              </div>
            </div>
          </div>
        </div>
        <div className="kategori-kursus-2">
          <KategoriKursus hover="off" rectangle="/img/rectangle-4-2.png" text="Mahir Teknologi" />
          <KategoriKursus hover="off" rectangle="/img/rectangle-4-3.png" text="Mahir Marketing" />
          <KategoriKursus hover="off" rectangle="/img/rectangle-4-4.png" text="Mahir Digital" />
          <KategoriKursus hover="off" rectangle="/img/rectangle-4-5.png" text="UKM" />
          <KategoriKursus
            divClassName="pengembangan-diri"
            hover="off"
            rectangle="/img/rectangle-4-6.png"
            text="Pengembangan Diri"
          />
          <KategoriKursus
            divClassName="mahir-telekomunikasi"
            hover="off"
            rectangle="/img/rectangle-4-7.png"
            text="Mahir Telekomunikasi"
          />
        </div>
        <div className="freemium-paid">
          <div className="inovasi-grup">
            <div className="freemium">
              <Chip className="chip-instance" />
              <FreemiumCourses
                cardFrameClassName="freemium-courses-2"
                cardGroup="/img/group-2-9.png"
                cardImg="/img/rectangle-8-10.png"
                cardRectangle="/img/rectangle-8-9.png"
                cardRectangle1="/img/rectangle-8-11.png"
                cardRectangle2="/img/rectangle-8-12.png"
                cardText="Artificial Intelligence &amp; Machine Learning"
                cardText1="UI/UX Design untuk Pemula"
                cardText2="Back End Developer Entry Level"
                cardText3="Data Analyst Entry Level-Intermediate"
                cardVector="/img/vector-1-6.svg"
                className="freemium-courses-instance"
                
              />
            </div>
            <div className="paid">
            <Chip text="KURSUS WEBINAR" style={{ backgroundColor: "white", color: "var(--foundationneutraln-900)" }} />
              <div className="paid-courses">
                <Card
                  className="design-component-instance-node-2"
                  group="/img/group-2-7.png"
                  rectangle="/img/rectangle-8-13.png"
                  text="Self-Dev : How to Stay Productive"
                  variasi="regular-paid"
                  
                />
                <Card
                  className="design-component-instance-node-2"
                  group="/img/group-2-7.png"
                  rectangle="/img/rectangle-8-14.png"
                  text="Personal Branding in Instagram"
                  variasi="regular-paid"
                  
                />
                <Card
                  className="design-component-instance-node-2"
                  group="/img/group-2-7.png"
                  rectangle="/img/rectangle-8-15.png"
                  text="Self-Dev : How to Stay Positive"
                  variasi="regular-paid"
                  
                />
                <Card
                  className="design-component-instance-node-2"
                  group="/img/group-2-7.png"
                  rectangle="/img/rectangle-8-16.png"
                  text="How to Make Decision with Pressure"
                  variasi="regular-paid"
                 
                />
              </div>
            </div>
            <button className="button-2" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-36" >Lihat Semua</div>
            </button>
            <button className="button-3" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-37" >Lihat Semua</div>
            </button>
            <button className="button-4"onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>
              <div className="text-wrapper-37">Lihat Semua</div>
            </button>
          </div>
        </div>
        <div className="mitra-2">
          <div className="judul-2">KURSUS BERDASARKAN MITRA</div>
          <div className="mitra-3">
            <Card
              className="design-component-instance-node-2"
              img="/img/rectangle-8-17.png"
              rectangleClassName="card-4"
              text1="Alterra Academy"
              text2="37 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="/img/rectangle-8-18.png"
              rectangleClassName="card-4"
              text1="MyEduSolve"
              text2="56 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="/img/rectangle-8-19.png"
              rectangleClassName="card-4"
              text1="Cariilmu"
              text2="18 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="/img/rectangle-8-20.png"
              rectangleClassName="card-4"
              text1="Sertifikasiku"
              text2="25 Kursus"
              variasi="mitra"
            />
          </div>
        </div>
        <div className="banner-bawah">
          <p className="judul-2">SPESIAL HANYA DI PIJAR MAHIR</p>
          <div className="div-3">
            <div className="banner-bawah-a" />
            <div className="banner-bawah-b" />
          </div>
        </div>
        <div className="testimoni-2">
          <div className="isi">
            <button onClick={handlePrev} className="prev-button">
              &lt;
            </button>
            <button onClick={handleNext} className="next-button">
              &gt;
            </button>
            <div className="testimoni-2">
      <div className="testimoni-3">
        {testimoniData.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <Testimoni
            key={index}
            className="design-component-instance-node-2"
            ellipse={item.ellipse}
            text={item.text}
            text1={item.text1}
            text2={item.text2}
          />
        ))}
      </div>
      <div className="dots-container">
        {Array.from({ length: Math.ceil(testimoniData.length / 2) }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === Math.floor(currentIndex / 2) ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
          </div>
          <div className="judul-3">
            <div className="overlap-group-7">
              <img className="quote-mark" alt="Quote mark" src="/img/quote-mark.png" />
              <div className="judul-4">
                <div className="text-wrapper-38">Testimoni Dari Pelajar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConcreteComponentNode
        className="footer-3"
        footerWrapperFooterClassName="footer-5"
        footerWrapperFooterSosmed="/img/sosmed-3.svg"
        footerWrapperFooterSvg="/img/svg-18.svg"
        overlapClassName="footer-4"
      />
    </div>
    
  );
};
