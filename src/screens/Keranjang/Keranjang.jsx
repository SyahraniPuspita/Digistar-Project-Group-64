import React from "react";
import { Button } from "../../components/Button";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { ListKeranjang } from "../../components/ListKeranjang";
import { CheckboxOff4 } from "../../icons/CheckboxOff4";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import { RingkasanPembelian } from "../../components/RingkasanPembelian";
import { useNavigate } from "react-router-dom";
import DropdownCategories from "../../components/DropdownCategories";
import DropdownProfile from "../../components/DropdownProfile";
import Cart from "../../icons/Cart.svg"
import Notification from "../../icons/Notification.svg"
import "./style.css";



export const Keranjang = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };

  const handleClickKeranjang = () => {
    // Navigasi ke halaman keranjang
    navigate("/keranjang");
  };

  const handleClickPembayaran = () => {
    // Navigasi ke Pembayaran
    navigate("/pembayaran");
  };
  
  return (
    <div className="keranjang">
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/Mj45bpJj/img/svg-13.svg" />
                <div className="text-wrapper-21">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/Mj45bpJj/img/svg-14.svg" />
                <div className="text-wrapper-21">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/Mj45bpJj/img/svg-15.svg" />
                <div className="text-wrapper-21">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/Mj45bpJj/img/svg-16.svg" />
                <div className="text-wrapper-21">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-2">
            <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
            <div className="menu-search">
              <img className="SVG-3" alt="Svg" src="https://c.animaapp.com/Mj45bpJj/img/svg-17.svg" />
              <div className="menu-text">
                <div className="text-wrapper-22-1">Kategori
                <DropdownCategories/>
                </div>
                <div className="non-course">
                  <div className="text-wrapper-23-1">Lowongan Kerja</div>
                </div>
                <div className="non-course-2">
                  <div className="text-wrapper-23-1">Non-Course</div>
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
                    <div className="overlap-group-2">
                      <div className="container-3">
                        <p className="text-wrapper-24-1">Cari kursus yang kamu inginkan</p>
                      </div>
                      <div className="container-4" />
                    </div>
                  </div>
                  <img className="margin-2" alt="Margin" src="https://c.animaapp.com/Mj45bpJj/img/margin-2.svg" />
                </div>
              </div>
              <img src={Cart} alt="icon" onClick={handleClickKeranjang} style={{ cursor: "pointer" }}/>
              <img src={Notification} alt="icon" />
              <DropdownProfile/>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-14">
          <ListKeranjang
            chipText="VIDEO PEMBELAJARAN"
            className="list-keranjang-instance"
            frame="https://c.animaapp.com/Mj45bpJj/img/frame-37299-3.svg"
            line="https://c.animaapp.com/Mj45bpJj/img/line-16-3.svg"
            varian="off"
          />
          <ListKeranjang
            chipText="VIDEO PEMBELAJARAN"
            className="list-keranjang-instance"
            elementPrakerja="https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-4@2x.png"
            frame="https://c.animaapp.com/Mj45bpJj/img/frame-37299-4.svg"
            img="https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
            line="https://c.animaapp.com/Mj45bpJj/img/line-16-4.svg"
            star="https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
            star1="https://c.animaapp.com/Mj45bpJj/img/star-28-4@2x.png"
            star2="https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
            star3="https://c.animaapp.com/Mj45bpJj/img/star-30-4@2x.png"
            varian="off"
          />
          <ListKeranjang
            chipText="VIDEO PEMBELAJARAN"
            className="list-keranjang-instance"
            elementPrakerja="https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-5@2x.png"
            frame="https://c.animaapp.com/Mj45bpJj/img/frame-37299-5.svg"
            img="https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
            line="https://c.animaapp.com/Mj45bpJj/img/line-16-5.svg"
            star="https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
            star1="https://c.animaapp.com/Mj45bpJj/img/star-28-5@2x.png"
            star2="https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
            star3="https://c.animaapp.com/Mj45bpJj/img/star-30-5@2x.png"
            varian="off"
          />
          <ListKeranjang
            chipText="VIDEO PEMBELAJARAN"
            className="list-keranjang-instance"
            elementPrakerja="https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-6@2x.png"
            frame="https://c.animaapp.com/Mj45bpJj/img/frame-37299-6.svg"
            img="https://c.animaapp.com/Mj45bpJj/img/star-30-6@2x.png"
            line="https://c.animaapp.com/Mj45bpJj/img/line-16-6.svg"
            star="https://c.animaapp.com/Mj45bpJj/img/star-30-6@2x.png"
            star1="https://c.animaapp.com/Mj45bpJj/img/star-28-6@2x.png"
            star2="https://c.animaapp.com/Mj45bpJj/img/star-30-6@2x.png"
            star3="https://c.animaapp.com/Mj45bpJj/img/star-30-6@2x.png"
            varian="off"
          />
          <ListKeranjang
            chipText="VIDEO PEMBELAJARAN"
            className="list-keranjang-instance"
            elementPrakerja="https://c.animaapp.com/Mj45bpJj/img/4832-prakerja-wartawan-thumbnail---343-x-179-4-7@2x.png"
            frame="https://c.animaapp.com/Mj45bpJj/img/frame-37299-7.svg"
            img="https://c.animaapp.com/Mj45bpJj/img/star-30-7@2x.png"
            line="https://c.animaapp.com/Mj45bpJj/img/line-16-7.svg"
            star="https://c.animaapp.com/Mj45bpJj/img/star-30-7@2x.png"
            star1="https://c.animaapp.com/Mj45bpJj/img/star-28-7@2x.png"
            star2="https://c.animaapp.com/Mj45bpJj/img/star-30-7@2x.png"
            star3="https://c.animaapp.com/Mj45bpJj/img/star-30-7@2x.png"
            varian="off"
          />
        </div>
      </div>
      <div className="frame-15">
        <div className="text-wrapper-25-1">Keranjang</div>
        <div className="frame-16">
        <input type="checkbox" id="select-all" name="pilih-semua" value="Select All"></input>
          <div className="margin-3">
            <div className="container-5">
              <div className="container-6">
                <div className="text-wrapper-26-1">Pilih Semua</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-17">
        <div className="frame-18">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <Button  text="" varian="short-big-outline" />
              <div className="frame-19">
                <img
                  className="svgrepo-iconcarrier"
                  alt="Svgrepo iconcarrier"
                  src="https://c.animaapp.com/Mj45bpJj/img/svgrepo-iconcarrier@2x.png"
                />
                <div className="text-wrapper-27">Gunakan Promo</div>
              </div>
            </div>
          </div>
          <RingkasanPembelian/>
          <div className="frame-20">
            <div className="text-wrapper-28">Total Harga:</div>
            <div className="text-wrapper-29">IDR 0</div>
          </div>
          <Button text="Checkout" varian="custom-width-big-filled" onClick={handleClickPembayaran} style={{ cursor: "pointer" }}/>
        </div>
      </div>
      <ConcreteComponentNode
        className="footer-3"
        footerWrapperFooterClassName="footer-4"
        footerWrapperFooterSosmed="https://c.animaapp.com/Mj45bpJj/img/sosmed-3.svg"
        footerWrapperFooterSvg="https://c.animaapp.com/Mj45bpJj/img/svg-18.svg"
      />
    </div>
  );
};
