import React from "react";
import { Card } from "../../components/Card";
import { Chip } from "../../components/Chip";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { DeskripsiCourse } from "../../components/DeskripsiCourse";
import { DetailHargaKursus } from "../../components/DetailHargaKursus";
import { RingkasanPembelian } from "../../components/RingkasanPembelian";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import { useNavigate } from "react-router-dom";
import  DropdownCategories  from "../../components/DropdownCategories";
import Notification from "../../icons/Notification.svg"
import  DropdownProfile  from "../../components/DropdownProfile";
import Cart from "../../icons/Cart.svg"
import { MateriPelatihan } from "../../components/MateriPelatihan";
import "./style.css";

export const DetailKursusFreemium = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };

  const handleClickKeranjang = () => {
    // Navigasi ke halaman keranjang
    navigate("/keranjang");
  };

  const handleClickKategoriFilter = () => {
    // Navigasi ke Kategori Filter
    navigate("/kategorifilter");
  };

  const handleClickPembayaran = () => {
    // Navigasi ke Pembayaran
    navigate("/pembayaran");
  };
  return (
    <div className="detail-kursus">
      <div className="overlap-2">
        <img
          className="element-prakerja-2"
          alt="Element prakerja"
          src="https://c.animaapp.com/2SEX4X9W/img/4832-prakerja-wartawan-thumbnail---343-x-179-2.png"
        />
        <div className="rectangle-3" />
           
        <div className="frame-20">
          <DetailHargaKursus className="detail-harga-kursus-instance" varian="reg-freemium" />
          <div className="frame-21">
            <div className="frame-22">
              <div className="informasi-kursus">
                <Chip
                  className="chip-instance"
                  divClassName="design-component-instance-node"
                  text="VIDEO PEMBELAJARAN"
                  type="freemium"
                />
                <div className="frame-23">
                  <p className="text-wrapper-32">Digital Marketing Intermediate to Expert</p>
                  <div className="text-wrapper-33">Oleh : MyEduSolve</div>
                </div>
                <div className="frame-24">
                  <img className="group-8" alt="Group" src="https://c.animaapp.com/2SEX4X9W/img/group@2x.png" />
                  <p className="div-3">
                    <span className="text-wrapper-34">Minimal </span>
                    <span className="text-wrapper-35">SMA/SMAK sederajat</span>
                  </p>
                </div>
                <div className="frame-25">
                  <div className="frame-26">
                    <img
                      className="map-point"
                      alt="Map point"
                      src="https://c.animaapp.com/2SEX4X9W/img/map-point-1@2x.png"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-34">Pelatihan di </span>
                      <span className="text-wrapper-35">Pijar Mahir</span>
                    </p>
                  </div>
                  <div className="frame-26">
                    <img
                      className="img-2"
                      alt="Mingcute time"
                      src="https://c.animaapp.com/2SEX4X9W/img/mingcute-time-duration-fill.svg"
                    />
                    <p className="div-3">
                      <span className="text-wrapper-34">Durasi Belajar </span>
                      <span className="text-wrapper-35">8 jam&nbsp;&nbsp;45 menit</span>
                    </p>
                  </div>
                </div>
                <div className="frame-27">
                  <div className="frame-28">
                    <div className="frame-29">
                      <img className="star" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-5@2x.png" />
                      <img className="star" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-5@2x.png" />
                      <img className="star" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-5@2x.png" />
                      <img className="star" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-5@2x.png" />
                      <img className="star" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-5@2x.png" />
                    </div>
                    <div className="margin-2">
                      <div className="container-2">
                        <div className="container-3">
                          <div className="text-wrapper-36">5.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-30">
                    <img className="img-2" alt="Profile" src="https://c.animaapp.com/2SEX4X9W/img/profile.svg" />
                    <div className="margin-3">
                      <div className="container-4">
                        <div className="container-3">
                          <div className="text-wrapper-37">44 Peserta</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info">
                <div className="frame-31">
                  <img className="gg-info" alt="Gg info" src="https://c.animaapp.com/2SEX4X9W/img/gg-info.svg" />
                  <div className="text-wrapper-38">Info</div>
                </div>
                <div className="sertifikat-dan-wrapper">
                  <p className="sertifikat-dan">
                    <span className="text-wrapper-39">Sertifikat </span>
                    <span className="text-wrapper-39">dan </span>
                    <span className="text-wrapper-39">bagian terkunci </span>
                    <span className="text-wrapper-39">hanya dapat diakses oleh mode Premium</span>
                  </p>
                </div>
              </div>
            </div>
            <DeskripsiCourse
              className="deskripsi-course-instance"
              mode="shorten"
              pelatihanIniClassName="deskripsi-course-2"
              varian="reg-freemium"
            />
            <div className="detail-materi-course">
              <div className="frame-32">
              <div className="frame-8">
                  <div className="ellipse-1" style={{ backgroundColor: "var(--foundationpijar-bluep300)"}}/>
                  <div className="text-wrapper-4">Materi Pelatihan</div>
              </div>
              <MateriPelatihan varian="reg-freemium"/>

              </div>
              
            </div>
            <div className="detail-materi-course">
              <div className="frame-33">
              <div className="frame-8">
              <div className="ellipse-1" style={{ backgroundColor: "var(--foundationpijar-bluep300)"}}/>
                  <div className="text-wrapper-4">Rating dan Ulasan</div>
              </div>
                <div className="rating">
                  <div className="frame-35">
                    <div className="group-9">
                      <div className="overlap-group-5">
                        <div className="text-wrapper-42">4.7</div>
                        <div className="text-wrapper-43">/5</div>
                      </div>
                      <div className="text-wrapper-44">(20 Rating)</div>
                    </div>
                  </div>
                  <div className="frame-36">
                    <div className="frame-37">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">5</div>
                      </div>
                      <div className="group-10">
                        <div className="rectangle-4" />
                      </div>
                      <div className="text-wrapper-45">16</div>
                    </div>
                    <div className="frame-37">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">4</div>
                      </div>
                      <div className="group-10">
                        <div className="rectangle-5" />
                      </div>
                      <div className="text-wrapper-45">3</div>
                    </div>
                    <div className="frame-37">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">3</div>
                      </div>
                      <div className="group-10">
                        <div className="rectangle-6" />
                      </div>
                      <div className="text-wrapper-45">1</div>
                    </div>
                    <div className="frame-37">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">2</div>
                      </div>
                      <div className="group-10" />
                      <div className="text-wrapper-45">0</div>
                    </div>
                    <div className="frame-37">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">1</div>
                      </div>
                      <div className="group-10" />
                      <div className="text-wrapper-45">0</div>
                    </div>
                  </div>
                </div>
                <div className="frame-38">
                  <div className="frame-39">
                    <div className="text-wrapper-46">Retno Sulistyowati</div>
                    <div className="frame-40">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11@2x.png" />
                        <div className="text-wrapper-45">5</div>
                      </div>
                      <div className="text-wrapper-47">dua hari yang lalu</div>
                    </div>
                    <p className="text-wrapper-48">
                      Pelatihan yang sangat bermanfaat . Penyampaiannya jelas dan mudah dimengerti. Sukses selalu.
                    </p>
                    <img className="line-2" alt="Line" src="https://c.animaapp.com/2SEX4X9W/img/line-9.svg" />
                  </div>
                  <div className="frame-39">
                    <div className="text-wrapper-46">Retno Sulistyowati</div>
                    <div className="frame-40">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11-3@2x.png" />
                        <div className="text-wrapper-45">5</div>
                      </div>
                      <div className="text-wrapper-47">dua hari yang lalu</div>
                    </div>
                    <p className="text-wrapper-48">
                      Pelatihan yang sangat bermanfaat . Penyampaiannya jelas dan mudah dimengerti. Sukses selalu.
                    </p>
                    <img className="line-2" alt="Line" src="https://c.animaapp.com/2SEX4X9W/img/line-9-1.svg" />
                  </div>
                  <div className="frame-39">
                    <div className="text-wrapper-46">Retno Sulistyowati</div>
                    <div className="frame-40">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11-3@2x.png" />
                        <div className="text-wrapper-45">5</div>
                      </div>
                      <div className="text-wrapper-47">dua hari yang lalu</div>
                    </div>
                    <p className="text-wrapper-48">
                      Pelatihan yang sangat bermanfaat . Penyampaiannya jelas dan mudah dimengerti. Sukses selalu.
                    </p>
                    <img className="line-2" alt="Line" src="https://c.animaapp.com/2SEX4X9W/img/line-9-2.svg" />
                  </div>
                  <div className="frame-39">
                    <div className="text-wrapper-46">Retno Sulistyowati</div>
                    <div className="frame-40">
                      <div className="frame-28">
                        <img className="star-2" alt="Star" src="https://c.animaapp.com/2SEX4X9W/img/star-11-3@2x.png" />
                        <div className="text-wrapper-45">5</div>
                      </div>
                      <div className="text-wrapper-47">dua hari yang lalu</div>
                    </div>
                    <p className="text-wrapper-48">
                      Pelatihan yang sangat bermanfaat . Penyampaiannya jelas dan mudah dimengerti. Sukses selalu.
                    </p>
                    <img className="line-2" alt="Line" src="https://c.animaapp.com/2SEX4X9W/img/line-9-3.svg" />
                  </div>
                </div>
                <div className="navigation-number">
                  <img
                    className="container-5"
                    alt="Container"
                    src="https://c.animaapp.com/2SEX4X9W/img/container.svg"
                  />
                  <div className="button-wrapper">
                    <button className="button-2">
                      <div className="text-wrapper-49">1</div>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-3">
                      <div className="text-wrapper-50">2</div>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-4">
                      <div className="text-wrapper-50">3</div>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-5">
                      <div className="text-wrapper-50">4</div>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-6">
                      <div className="text-wrapper-51">...</div>
                    </button>
                  </div>
                  <div className="button-wrapper">
                    <button className="button-7">
                      <div className="text-wrapper-52">6</div>
                    </button>
                  </div>
                  <img
                    className="container-5"
                    alt="Container"
                    src="https://c.animaapp.com/2SEX4X9W/img/container-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-materi-course-1">
            <div className="frame-wrapper">
              <div className="frame-41">
                <div className="ellipse-3" />
                <div className="text-wrapper-41">Serupa dengan Kelas ini</div>
              </div>
            </div>
            <div className="frame-42">
              <img className="img-3" alt="Button prev" src="https://c.animaapp.com/2SEX4X9W/img/button---prev.svg" />
              <Card
                className="card-instance"
                group="https://c.animaapp.com/2SEX4X9W/img/group-2-6@2x.png"
                img="https://c.animaapp.com/2SEX4X9W/img/vector-3-2.svg"
                rectangle="https://c.animaapp.com/2SEX4X9W/img/rectangle-8-6@2x.png"
                text="Copywriting untuk Digital Marketing"
                variasi="student-freemium"
                vector="https://c.animaapp.com/2SEX4X9W/img/vector-2-3.svg"
              />
              <Card
                className="card-instance"
                group="https://c.animaapp.com/2SEX4X9W/img/group-2-6@2x.png"
                img="https://c.animaapp.com/2SEX4X9W/img/vector-3-2.svg"
                rectangle="https://c.animaapp.com/2SEX4X9W/img/rectangle-8-7@2x.png"
                text="SEO &amp; SEM dalam Digital Marketing"
                variasi="student-freemium"
                vector="https://c.animaapp.com/2SEX4X9W/img/vector-2-3.svg"
              />
              <Card
                className="card-instance"
                group1="https://c.animaapp.com/2SEX4X9W/img/group-2-6@2x.png"
                rectangle="https://c.animaapp.com/2SEX4X9W/img/rectangle-8-8@2x.png"
                text="Marketing with Social Media : Ig, TikTok, X"
                variasi="student-paid"
                vector1="https://c.animaapp.com/2SEX4X9W/img/vector-2-4.svg"
              />
              <img className="img-3" alt="Group" src="https://c.animaapp.com/2SEX4X9W/img/group-7@2x.png" />
            </div>
          </div>
      </div>
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img className="img-2" alt="Svg" src="https://c.animaapp.com/2SEX4X9W/img/svg-13.svg" />
                <div className="text-wrapper-53">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="img-2" alt="Svg" src="https://c.animaapp.com/2SEX4X9W/img/svg-14.svg" />
                <div className="text-wrapper-53">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="img-2" alt="Svg" src="https://c.animaapp.com/2SEX4X9W/img/svg-15.svg" />
                <div className="text-wrapper-53">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="img-2" alt="Svg" src="https://c.animaapp.com/2SEX4X9W/img/svg-16.svg" />
                <div className="text-wrapper-53">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-2">
          <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
            <div className="menu-search">
              <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/2SEX4X9W/img/svg-17.svg" />
              <div className="menu-text">
                <div className="text-wrapper-54">Kategori
                  <DropdownCategories/>
                </div>
                <div className="non-course">
                  <div className="text-wrapper-55">Lowongan Kerja</div>
                </div>
                <div className="non-course-2">
                  <div className="text-wrapper-55">Non-Course</div>
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
                      <div className="container-6">
                        <p className="text-wrapper-56">Cari kursus yang kamu inginkan</p>
                      </div>
                      <div className="container-7" />
                    </div>
                  </div>
                  <img className="margin-4" alt="Margin" src="https://c.animaapp.com/2SEX4X9W/img/margin-2.svg" />
                </div>
              </div>
              <img src={Cart} alt="icon" onClick={handleClickKeranjang} style={{ cursor: "pointer" }}/>
              <img src={Notification} alt="icon" />
              <DropdownProfile/>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrapper">
        <div className="header-3">
          <div className="container-3">
            <div className="container-8">
              <div className="div-wrapper-2">
                <div className="text-wrapper-57" onClick={handleClickHome} style={{ cursor: "pointer" }}>Beranda</div>
              </div>
              <div className="container-9">
                <div className="text-wrapper-58">/</div>
              </div>
            </div>
            <div className="div-wrapper-2">
              <div className="text-wrapper-57" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}>Marketing</div>
            </div>
            <div className="container-10">
              <div className="text-wrapper-58">/</div>
            </div>
            <div className="div-wrapper-2">
              <p className="text-wrapper-58">Digital Marketing Intermediate to Expert</p>
            </div>
          </div>
          <div className="container-11" />
        </div>
      </div>
      <ConcreteComponentNode
        className="footer-3"
        footerWrapperFooterClassName="footer-4"
        footerWrapperFooterSosmed="https://c.animaapp.com/2SEX4X9W/img/sosmed-3.svg"
        footerWrapperFooterSvg="https://c.animaapp.com/2SEX4X9W/img/svg-18.svg"
      />
    </div>
  );
};
