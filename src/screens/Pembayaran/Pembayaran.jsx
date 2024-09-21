import React from "react";
import { Button } from "../../components/Button";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { RingkasanPembelian } from "../../components/RingkasanPembelian";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import "./style.css";
import { useNavigate } from "react-router-dom";
import DropdownCategories from "../../components/DropdownCategories";
import DropdownProfile from "../../components/DropdownProfile";
import Cart from "../../icons/Cart.svg"
import Notification from "../../icons/Notification.svg"

export const Pembayaran = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };
  const handleClickKeranjang = () => {
    // Navigasi ke halaman keranjang
    navigate("/keranjang");
  };
  return (
    <div className="pembayaran">
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/SIP04sTs/img/svg-13.svg" />
                <div className="text-wrapper-18">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/SIP04sTs/img/svg-14.svg" />
                <div className="text-wrapper-18">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/SIP04sTs/img/svg-15.svg" />
                <div className="text-wrapper-18">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/SIP04sTs/img/svg-16.svg" />
                <div className="text-wrapper-18">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="header-2">
            <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
            <div className="menu-search">
              <img className="SVG-3" alt="Svg" src="https://c.animaapp.com/SIP04sTs/img/svg-17.svg" />
              <div className="menu-text">
                <div className="text-wrapper-19">Kategori
                  <DropdownCategories/>
                </div>
                <div className="non-course">
                  <div className="text-wrapper-20">Lowongan Kerja</div>
                </div>
                <div className="non-course-2">
                  <div className="text-wrapper-20">Non-Course</div>
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
                    <div className="overlap-group-2">
                      <div className="container-2">
                        <p className="text-wrapper-21">Cari kursus yang kamu inginkan</p>
                      </div>
                      <div className="container-3" />
                    </div>
                  </div>
                  <img className="margin" alt="Margin" src="https://c.animaapp.com/SIP04sTs/img/margin-2.svg" />
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
        <div className="frame-8">
          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <Button text="" varian="short-big-outline" />
              <div className="frame-9">
                <img
                  className="svgrepo-iconcarrier"
                  alt="Svgrepo iconcarrier"
                  src="https://c.animaapp.com/SIP04sTs/img/svgrepo-iconcarrier@2x.png"
                />
                <div className="text-wrapper-22">Gunakan Promo</div>
              </div>
            </div>
          </div>
          <RingkasanPembelian/>
          <div className="frame-10">
            <div className="text-wrapper-23">Total Harga:</div>
            <div className="text-wrapper-24">IDR 0</div>
          </div>
          <Button  text="Checkout" varian="custom-width-big-filled" style={{ cursor: "pointer" }}/>
        </div>
      </div>
      <div className="frame-11">
        <div className="text-wrapper-25">Pembayaran</div>
        <div className="text-wrapper-26-1">Pilih Metode Pembayaran</div>
      </div>
      <div className="group-3">
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="frame-12">
              <div className="frame-13-1">
                <div className="frame-14">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="linkaja-svg"
                    alt="Linkaja svg"
                    src="https://c.animaapp.com/SIP04sTs/img/linkaja-svg-1@2x.png"
                  />
                </div>
              </div>
              <div className="group-4-1">
                <div className="frame-15">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="img-2"
                    alt="Img"
                    src="https://c.animaapp.com/SIP04sTs/img/943c971903518e53ffd324dd51e46a90-1@2x.png"
                  />
                </div>
              </div>
              <div className="group-5-1">
                <div className="overlap-group-4">
                  <div className="rectangle" />
                  <div className="frame-16">
                    <input type="radio" id="free" name="price" value="Gratis"></input>
                    <img
                      className="logo-dana-blue-svg"
                      alt="Logo dana blue svg"
                      src="https://c.animaapp.com/SIP04sTs/img/logo-dana-blue-svg-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="overlap-group-4">
                  <div className="rectangle" />
                  <div className="frame-17">
                    <input type="radio" id="free" name="price" value="Gratis"></input>
                    <img
                      className="logo-ovo-purple-svg"
                      alt="Logo ovo purple svg"
                      src="https://c.animaapp.com/SIP04sTs/img/logo-ovo-purple-svg-1@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="group-5">
                <div className="overlap-group-4">
                  <div className="rectangle" />
                  <div className="frame-18">
                    <input type="radio" id="free" name="price" value="Gratis"></input>
                    <img
                      className="logo-ovo-purple-svg-2"
                      alt="Logo ovo purple svg"
                      src="https://c.animaapp.com/SIP04sTs/img/logo-ovo-purple-svg-1-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-27">E-WALLET</div>
          </div>
        </div>
      </div>
      <div className="group-6">
        <div className="overlap-3">
          <div className="frame-12">
            <div className="group-4-1">
              <div className="frame-19">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <img
                  className="img-2"
                  alt="Img"
                  src="https://c.animaapp.com/SIP04sTs/img/943c971903518e53ffd324dd51e46a90-1-1@2x.png"
                />
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-20">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="logo-dana-blue-svg-2"
                    alt="Logo dana blue svg"
                    src="https://c.animaapp.com/SIP04sTs/img/logo-dana-blue-svg-1-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-27">STUDY NOW PAY LATER</div>
        </div>
      </div>
      <div className="virtual-account">
        <div className="overlap-4">
          <div className="group-7">
            <div className="overlap-group-5">
              <div className="text-wrapper-27">VIRTUAL ACCOUNT</div>
            </div>
          </div>
          <div className="frame-21">
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-22">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="bank-mandiri-logo"
                    alt="Bank mandiri logo"
                    src="https://c.animaapp.com/SIP04sTs/img/bank-mandiri-logo-2016-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-23">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="bank-permata"
                    alt="Bank permata"
                    src="https://c.animaapp.com/SIP04sTs/img/bank-permata--koleksilogo-com-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-24">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="maybank-PNG"
                    alt="Maybank PNG"
                    src="https://c.animaapp.com/SIP04sTs/img/maybank-png-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-25">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="BNI-logo-svg"
                    alt="Bni logo svg"
                    src="https://c.animaapp.com/SIP04sTs/img/bni-logo-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-26">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="BANK-BRI-logo-svg"
                    alt="Bank BRI logo svg"
                    src="https://c.animaapp.com/SIP04sTs/img/bank-bri-logo-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-26">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="CIMB-niaga-logo-svg"
                    alt="Cimb niaga logo svg"
                    src="https://c.animaapp.com/SIP04sTs/img/cimb-niaga-logo-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-27">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="element-danamon-svg"
                    alt="Element danamon svg"
                    src="https://c.animaapp.com/SIP04sTs/img/2560px-danamon-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-group-4">
                <div className="rectangle" />
                <div className="frame-28">
                  <input type="radio" id="free" name="price" value="Gratis"></input>
                  <img
                    className="bank-syariah"
                    alt="Bank syariah"
                    src="https://c.animaapp.com/SIP04sTs/img/bank-syariah-indonesia-svg-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConcreteComponentNode
        className="footer-3"
        footerWrapperFooterClassName="footer-4"
        footerWrapperFooterSosmed="https://c.animaapp.com/SIP04sTs/img/sosmed-3.svg"
        footerWrapperFooterSvg="https://c.animaapp.com/SIP04sTs/img/svg-18.svg"
      />
    </div>
  );
};