import React from "react";
import { BannerHome } from "../../components/BannerHome";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { FreemiumCourses } from "../../components/FreemiumCourses";
import { KategoriKursus } from "../../components/KategoriKursus";
import { Testimoni } from "../../components/Testimoni";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import DropdownCategories from "../../components/DropdownCategories";
import "./style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../icons/Cart.svg";
import Notification from "../../icons/Notification.svg";
import DropdownProfile from "../../components/DropdownProfile";
import { StudentKitUpgradeDialog } from "../../components/UpgradeStudentKit";
import { StudentKitUpgradeSuccess } from "../../components/UpgradeStudentKitSuccess";

export const HomeLogIn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [isUpgradeDialogOpen, setIsUpgradeDialogOpen] = useState(false);

  const toggleSuccessDialog = () => {
    setIsSuccessDialogOpen(!isSuccessDialogOpen);
    setIsUpgradeDialogOpen(false);
  };

  const onSuccessUpgradeClose = () => {
    toggleSuccessDialog();
    navigate("/loginstudentkit");
  }

  const toggleUpgradeDialog = () => {
    setIsUpgradeDialogOpen(!isUpgradeDialogOpen);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimoniData.length - 2
        : (prevIndex - 2 + testimoniData.length) % testimoniData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % testimoniData.length);
  };
  const testimoniData = [
    {
      ellipse: "/img/ellipse-1-1.png",
      text: "DITERIMA KERJA DI PERUSAHAAN BESAR",
      text1:
        "Setelah dapat banyak kursus dan sertifikasi di Pijar, CV dan skill-ku meningkat drastis dan aku dapat offering dari 12 perusahaan besar!",
      text2: "Adinda Aletheia",
    },
    {
      ellipse: "/img/ellipse-1-2.png",
      text: "KERJA REMOTE DI PERUSAHAAN SINGAPORE",
      text1:
        "Dulu aku nganggur 2 tahun sehabis lulus, setelah pakai Pijar aku jadi bisa maksimalkan potensiku dan kini aku WFH di Perusahaan Singapore dengan gaji dua digit.",
      text2: "Alvandreas Joan Z.",
    },
    {
      ellipse: "/img/ellipse-1-2.png",
      text: "KERJA REMOTE DI USA",
      text1:
        "Dulu aku nganggur 2 tahun sehabis lulus, setelah pakai Pijar aku jadi bisa maksimalkan potensiku dan kini aku WFH di Perusahaan Singapore dengan gaji dua digit.",
      text2: "Alvandreas Joan Z.",
    },
    {
      ellipse: "/img/ellipse-1-1.png",
      text: "DITERIMA KERJA DI PERUSAHAAN BUMN",
      text1:
        "Setelah dapat banyak kursus dan sertifikasi di Pijar, CV dan skill-ku meningkat drastis dan aku dapat offering dari 12 perusahaan besar!",
      text2: "Adinda Aletheia",
    },
  ];

  const navigate = useNavigate();

  const handleClickKeranjang = () => {
    // Navigasi ke halaman keranjang
    navigate("/keranjang");
  };

  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };

  const handleClickKategoriFilter = () => {
    // Navigasi ke halaman login
    navigate("/kategorifilter");
  };

  return (
    <div className="home-log-in">
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img
                  className="SVG-2"
                  alt="Svg"
                  src="https://c.animaapp.com/IMLcrDb6/img/svg-13.svg"
                />
                <div className="text-wrapper-27">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img
                  className="SVG-2"
                  alt="Svg"
                  src="https://c.animaapp.com/IMLcrDb6/img/svg-14.svg"
                />
                <div className="text-wrapper-27">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img
                  className="SVG-2"
                  alt="Svg"
                  src="https://c.animaapp.com/IMLcrDb6/img/svg-15.svg"
                />
                <div className="text-wrapper-27">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img
                  className="SVG-2"
                  alt="Svg"
                  src="https://c.animaapp.com/IMLcrDb6/img/svg-16.svg"
                />
                <div className="text-wrapper-27">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-2">
            <LogoDefault4
              className="logo-default"
              onClick={handleClickHome}
              style={{ cursor: "pointer" }}
            />
            <div className="menu-search">
              <img
                className="SVG-3"
                alt="Svg"
                src="https://c.animaapp.com/IMLcrDb6/img/svg-17.svg"
              />
              <div className="menu-text">
                <div className="text-wrapper-28">
                  Kategori
                  <DropdownCategories />
                </div>
                <div className="non-course">
                  <div className="text-wrapper-29">Lowongan Kerja</div>
                </div>
                <div className="non-course-2">
                  <div className="text-wrapper-29">Non-Course</div>
                  <div class="dropdown-content">

                  <div class="category">
                        <a href="/reviewcv">Review CV</a>
                      </div>
                      <div class="category">
                        <a href="/reviewproject">Review Project</a>
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
                    <div className="overlap-group-6">
                      <div className="container-2">
                        <p className="text-wrapper-30">
                          Cari kursus yang kamu inginkan
                        </p>
                      </div>
                      <div className="container-3" />
                    </div>
                  </div>
                  <img
                    className="margin"
                    alt="Margin"
                    src="https://c.animaapp.com/IMLcrDb6/img/margin-2.svg"
                  />
                </div>
              </div>
              <img
                src={Cart}
                alt="icon"
                onClick={handleClickKeranjang}
                style={{ cursor: "pointer" }}
              />
              <img src={Notification} alt="icon" />
              <DropdownProfile onStudentKitClicked={toggleUpgradeDialog} />
            </div>
          </div>
        </div>
      </div>
      <div className="konten">
        <StudentKitUpgradeDialog isOpen={isUpgradeDialogOpen} onOpenSuccessDialog={toggleSuccessDialog} toggle={toggleUpgradeDialog} />
        <StudentKitUpgradeSuccess isOpen={isSuccessDialogOpen} onClose={onSuccessUpgradeClose} />
        <BannerHome
          bannerAtas="https://c.animaapp.com/IMLcrDb6/img/banner-atas-4.png"
          varian="new-features"
        />
        <div className="kategori-kursus-2">
          <KategoriKursus
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-2@2x.png"
            text="Mahir Teknologi"
          />
          <KategoriKursus
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-3@2x.png"
            text="Mahir Marketing"
          />
          <KategoriKursus
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-4@2x.png"
            text="Mahir Digital"
          />
          <KategoriKursus
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-5@2x.png"
            text="UKM"
          />
          <KategoriKursus
            divClassName="pengembangan-diri"
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-6@2x.png"
            text="Pengembangan Diri"
          />
          <KategoriKursus
            divClassName="mahir-telekomunikasi"
            hover="off"
            rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-4-7@2x.png"
            text="Mahir Telekomunikasi"
          />
        </div>
        <div className="freemium-paid">
          <div className="inovasi-grup">
            <div className="freemium-2">
              <Chip className="chip-instance" text="KURSUS FREEMIUM" />
              <FreemiumCourses
                cardFrameClassName="freemium-courses-2"
                cardGroup="https://c.animaapp.com/IMLcrDb6/img/group-2-27@2x.png"
                cardImg="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-10@2x.png"
                cardRectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-9@2x.png"
                cardRectangle1="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-11@2x.png"
                cardRectangle2="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-12@2x.png"
                cardText="Artificial Intelligence &amp; Machine Learning"
                cardText1="UI/UX Design untuk Pemula"
                cardText2="Back End Developer Entry Level"
                cardText3="Data Analyst Entry Level-Intermediate"
                cardVector="https://c.animaapp.com/IMLcrDb6/img/vector-1-14.svg"
                className="freemium-courses-instance"
              />
            </div>
            <div className="paid">
              <Chip
                text="KURSUS WEBINAR"
                style={{
                  backgroundColor: "white",
                  color: "var(--foundationneutraln-900)",
                }}
              />
              <div className="paid-courses">
                <Card
                  className="design-component-instance-node-2"
                  group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
                  rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-13@2x.png"
                  text="Self-Dev : How to Stay Productive"
                  variasi="regular-paid"
                />
                <Card
                  className="design-component-instance-node-2"
                  group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
                  rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-14@2x.png"
                  text="Personal Branding in Instagram"
                  variasi="regular-paid"
                />
                <Card
                  className="design-component-instance-node-2"
                  group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
                  rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-15@2x.png"
                  text="Self-Dev : How to Stay Positive"
                  variasi="regular-paid"
                />
                <Card
                  className="design-component-instance-node-2"
                  group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
                  rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-16@2x.png"
                  text="How to Make Decision with Pressure"
                  variasi="regular-paid"
                />
              </div>
            </div>
            {/* <button className="button">
              <div className="text-wrapper-31" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>Lihat Semua</div>
            </button> */}
            <button className="button-2">
              <div
                className="text-wrapper-32"
                onClick={handleClickKategoriFilter}
                style={{ cursor: "pointer" }}
              >
                Lihat Semua
              </div>
            </button>
            <button className="button-3">
              <div
                className="text-wrapper-32"
                onClick={handleClickKategoriFilter}
                style={{ cursor: "pointer" }}
              >
                Lihat Semua
              </div>
            </button>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper-33">BEST SELLER</div>
          <div className="paid-courses">
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-13@2x.png"
              text="Self-Dev : How to Stay Productive"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-11@2x.png"
              text="Back End Developer Entry Level"
              variasi="regular-freemium"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-15@2x.png"
              text="Self-Dev : How to Stay Positive"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-12@2x.png"
              text="Data Analyst Entry Level-Intermediate"
              variasi="regular-freemium"
            />
          </div>
          <div
            className="text-wrapper-36"
            onClick={handleClickKategoriFilter}
            style={{ cursor: "pointer" }}
          >
            Lihat Semua
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper-33">POPULER SAAT INI</div>
          <div className="paid-courses">
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-21@2x.png"
              text="Build Your Own Business Now"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-24@2x.png"
              text="Marketing with Facebook Ads"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-23@2x.png"
              text="SEO &amp; SEM dalam Digital Marketing"
              variasi="regular-freemium"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-12@2x.png"
              text="Data Analyst Entry Level-Intermediate"
              variasi="regular-freemium"
            />
          </div>
          <div
            className="text-wrapper-34"
            onClick={handleClickKategoriFilter}
            style={{ cursor: "pointer" }}
          >
            Lihat Semua
          </div>
        </div>

        <div className="div-2">
          <div className="text-wrapper-33">TERBAIK UNTUK KAMU</div>
          <div className="paid-courses">
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-26@2x.png"
              text="Copywriting untuk Digital Marketing"
              variasi="regular-freemium"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-25@2x.png"
              text="Marketing with Google Ads &amp; Youtube"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-27@2x.png"
              text="Marketing with Social Media : Ig, TikTok, X"
              variasi="regular-paid"
            />
            <Card
              className="design-component-instance-node-2"
              group="https://c.animaapp.com/IMLcrDb6/img/group-2-26@2x.png"
              rectangle="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-12@2x.png"
              text="Data Analyst Entry Level-Intermediate"
              variasi="regular-freemium"
            />
          </div>
          <div
            className="text-wrapper-35"
            onClick={handleClickKategoriFilter}
            style={{ cursor: "pointer" }}
          >
            Lihat Semua
          </div>
        </div>
        <div className="mitra-2">
          <div className="text-wrapper-33">KURSUS BERDASARKAN MITRA</div>
          <div className="mitra-3">
            <Card
              className="design-component-instance-node-2"
              img="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-29@2x.png"
              rectangleClassName="card-4"
              text1="Alterra Academy"
              text2="37 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-30@2x.png"
              rectangleClassName="card-4"
              text1="MyEduSolve"
              text2="56 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-31@2x.png"
              rectangleClassName="card-4"
              text1="Cariilmu"
              text2="18 Kursus"
              variasi="mitra"
            />
            <Card
              className="design-component-instance-node-2"
              img="https://c.animaapp.com/IMLcrDb6/img/rectangle-8-32@2x.png"
              rectangleClassName="card-4"
              text1="Sertifikasiku"
              text2="25 Kursus"
              variasi="mitra"
            />
          </div>
        </div>
        <div className="banner-bawah">
          <p className="text-wrapper-33">SPESIAL HANYA DI PIJAR MAHIR</p>
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
                {testimoniData
                  .slice(currentIndex, currentIndex + 2)
                  .map((item, index) => (
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
                {Array.from({
                  length: Math.ceil(testimoniData.length / 2),
                }).map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${
                      index === Math.floor(currentIndex / 2) ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="judul-3">
            <div className="overlap-group-7">
              <img
                className="quote-mark"
                alt="Quote mark"
                src="/img/quote-mark.png"
              />
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
        footerWrapperFooterSosmed="https://c.animaapp.com/IMLcrDb6/img/sosmed-3.svg"
        footerWrapperFooterSvg="https://c.animaapp.com/IMLcrDb6/img/svg-18.svg"
        overlapClassName="footer-4"
      />
    </div>
  );
};
