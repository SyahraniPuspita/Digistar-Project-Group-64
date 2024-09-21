import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Kursus } from "../../components/Kursus";
import { TabMenu } from "../../components/TabMenu";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import  DropdownCategories  from "../../components/DropdownCategories";
import Notification from "../../icons/Notification.svg"
import Cart from "../../icons/Cart.svg"
import  DropdownProfile  from "../../components/DropdownProfile";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import Nocourse from "../../icons/nocourse.png";
import "./style.css";

export const KursusSaya = () => {
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
    // Navigasi ke halaman login
    navigate("/kategorifilter");
  };

  const handleClickLmsFreemium = () => {
    // Navigasi ke halaman login
    navigate("/lmsfreemium");
  };
    const offlineCourses = (
        <div className="kursus-wrapped">
            <Kursus
            className="kursus-instance"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-16@2x.png"
            text="Data Analyst in Business Marketing"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-2"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-17@2x.png"
            text="Digital Marketing Intermediate to Expert"
            tipe="h-mycourse"
        />
        <Kursus
            className="kursus-3"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-18@2x.png"
            text="Dasar-Dasar Digital Marketing"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-4"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-19@2x.png"
            text="How to Make Your Customers Interest"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-5"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-20@2x.png"
            text="Make Your Brand More Famous Than Ever"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-7"
            frameClassName="kursus-6"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-21@2x.png"
            text="Decision Making with Data"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-8"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-22@2x.png"
            text="Copywriting untuk Digital Marketing"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-9"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-23@2x.png"
            text="SEO &amp; SEM dalam Digital Marketing"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-10"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-24@2x.png"
            text="Marketing with Social Media : Ig, TikTok, X"
            tipe="n-mycourse"
        />
        <Kursus
            className="kursus-11"
            rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-25@2x.png"
            text="Marketing with Google Ads &amp; YouTube"
            tipe="n-mycourse"
        />
        </div>
            
      );
    
      const onlineCourses = (
        <div className="offline-wrapped">
            <img src={Nocourse} alt="nocourse" />
            <div className="text-wrapper-32">Yah, kursusmu masih kosong, nih. Yuk cari dulu!</div>
        </div>
      );
  return (
    <div className="kursus-saya-online">
      <ConcreteComponentNode
        className="design-component-instance-node"
        footerWrapperFooterClassName="footer-3"
        footerWrapperFooterSosmed="https://c.animaapp.com/5iaNpuWz/img/sosmed-3.svg"
      />
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-2">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/5iaNpuWz/img/svg-14.svg" />
                <div className="text-wrapper-25">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-2">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/5iaNpuWz/img/svg-15.svg" />
                <div className="text-wrapper-25">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-2">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/5iaNpuWz/img/svg-16.svg" />
                <div className="text-wrapper-25">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-2">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/5iaNpuWz/img/svg-17.svg" />
                <div className="text-wrapper-25">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-6" />
        <div className="header">
          <div className="overlap-2">
            <div className="rectangle-7" />
            <div className="header-2">
              <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
              <div className="menu-search">
                <img className="SVG-3" alt="Svg" src="https://c.animaapp.com/5iaNpuWz/img/svg-18.svg" />
                <div className="menu-text">
                  <div className="text-wrapper-26">Kategori
                    <DropdownCategories/>
                  </div>
                  <div className="non-course">
                    <div className="text-wrapper-27">Lowongan Kerja</div>
                  </div>
                  <div className="non-course-2">
                    <div className="text-wrapper-27">Non-Course</div>
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
                      <div className="overlap-group-4-1">
                        <div className="container-2">
                          <p className="text-wrapper-28">Cari kursus yang kamu inginkan</p>
                        </div>
                        <div className="container-3" />
                      </div>
                    </div>
                    <img className="margin" alt="Margin" src="https://c.animaapp.com/5iaNpuWz/img/margin-4.svg" />
                  </div>
                </div>
                <img src={Cart} alt="icon" onClick={handleClickKeranjang} style={{ cursor: "pointer" }}/>
                <img src={Notification} alt="icon" />
                <DropdownProfile/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlap-3">
        <div className="header-wrapper">
          <div className="header-3">
            <div className="container-4">
              <div className="container-5">
                <div className="div-wrapper-2">
                  <div className="text-wrapper-29">Beranda</div>
                </div>
                <div className="container-6">
                  <div className="text-wrapper-30">/</div>
                </div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-30">Profil</div>
              </div>
            </div>
            <div className="container-7">
              <div className="text-wrapper-31">Kursus Saya</div>
            </div>
          </div>
        </div>
        <TabMenu
        leftText="Kursus Online"
        rightText="Kursus Offline"
        contentA={<div>{offlineCourses}</div>}
        contentB={<div className="offline-wrapped">
            <img src={Nocourse} alt="nocourse" />
            <div className="text-wrapper-32">Yah, kursusmu masih kosong, nih. Yuk cari dulu!</div>
            <Button text="Cari Kursus Sekarang" varian="short-big-filled" onClick={handleClickKategoriFilter} style={{ cursor: "pointer" }}/>
        </div>}
        onClick={handleClickLmsFreemium} style={{ cursor: "pointer" }}
      />
      </div>
      <div className="filter-box">
        <div className="container-8">
          <div className="container-wrapper">
            <div className="container-9">
              <div className="text-wrapper-32">Penyelenggara</div>
            </div>
          </div>
          <div className="form">
            <div className="label">
                <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">  
                  <div className="text-wrapper-33">Pijar Mahir</div>
                </div>
              </div>
              
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Mitra Pelatihan</div>
                </div>
              </div>
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Semua</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-8">
          <div className="container-wrapper">
            <div className="container-9">
              <div className="text-wrapper-32">Tipe Pelatihan</div>
            </div>
          </div>
          <div className="form">
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Prakerja</div>
                </div>
              </div>
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Non-Prakerja</div>
                </div>
              </div>
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Semua</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-8">
          <div className="container-wrapper">
            <div className="container-9">
              <div className="text-wrapper-32">Metode Kursus</div>
            </div>
          </div>
          <div className="form">
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Video Pembelajaran</div>
                </div>
              </div>
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Webinar</div>
                </div>
              </div>
            </div>
            <div className="label">
            <input type="radio" id="free" name="price" value="Gratis"></input>
              <div className="container-10">
                <div className="container-4">
                  <div className="text-wrapper-33">Semua</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* <Kursus
        className="kursus-instance"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-16@2x.png"
        text="Data Analyst in Business Marketing"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-2"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-17@2x.png"
        text="Digital Marketing Intermediate to Expert"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-3"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-18@2x.png"
        text="Dasar-Dasar Digital Marketing"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-4"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-19@2x.png"
        text="How to Make Your Customers Interest"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-5"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-20@2x.png"
        text="Make Your Brand More Famous Than Ever"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-7"
        frameClassName="kursus-6"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-21@2x.png"
        text="Decision Making with Data"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-8"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-22@2x.png"
        text="Copywriting untuk Digital Marketing"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-9"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-23@2x.png"
        text="SEO &amp; SEM dalam Digital Marketing"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-10"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-24@2x.png"
        text="Marketing with Social Media : Ig, TikTok, X"
        tipe="n-mycourse"
      />
      <Kursus
        className="kursus-11"
        rectangle="https://c.animaapp.com/5iaNpuWz/img/rectangle-8-25@2x.png"
        text="Marketing with Google Ads &amp; YouTube"
        tipe="n-mycourse"
      /> */}
    </div>
  );
};