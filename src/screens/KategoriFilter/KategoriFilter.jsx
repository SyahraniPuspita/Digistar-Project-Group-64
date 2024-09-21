import React from "react";
import { Card } from "../../components/Card";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import "./style.css";
import { useNavigate } from "react-router-dom";
import  DropdownCategories  from "../../components/DropdownCategories";
import Notification from "../../icons/Notification.svg"
import  DropdownProfile  from "../../components/DropdownProfile";
import Cart from "../../icons/Cart.svg"

export const KategoriFilter = () => {
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
    <div className="kategori-filter">
      <div className="div-2">
        <div className="navigation-bar">
          <div className="navigasi-atas">
            <div className="menu-navbar-atas">
              <div className="item">
                <div className="link-3">
                  <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/7tuEZOfx/img/svg-13.svg" />
                  <div className="text-wrapper-28">Pijar Prakerja</div>
                </div>
              </div>
              <div className="item">
                <div className="link-3">
                  <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/7tuEZOfx/img/svg-14.svg" />
                  <div className="text-wrapper-28">Pijar Mahir for Business</div>
                </div>
              </div>
              <div className="item">
                <div className="link-3">
                  <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/7tuEZOfx/img/svg-15.svg" />
                  <div className="text-wrapper-28">Pijar Camp</div>
                </div>
              </div>
              <div className="item">
                <div className="link-3">
                  <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/7tuEZOfx/img/svg-16.svg" />
                  <div className="text-wrapper-28">Pijar Mahir for UKM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="header">
            <div className="header-2">
            <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
              <div className="menu-search">
                <img className="SVG-3" alt="Svg" src="https://c.animaapp.com/7tuEZOfx/img/svg-17.svg" />
                <div className="menu-text">
                  <div className="text-wrapper-29">Kategori
                    <DropdownCategories/>  
                  </div>
                  <div className="non-course">
                    <div className="text-wrapper-30">Lowongan Kerja
                    </div>
                  </div>
                  <div className="non-course-2">
                    <div className="text-wrapper-30">Non-Course</div>
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
                          <p className="text-wrapper-31">Cari kursus yang kamu inginkan</p>
                        </div>
                        <div className="container-3" />
                      </div>
                    </div>
                    <img className="margin" alt="Margin" src="https://c.animaapp.com/7tuEZOfx/img/margin-2.svg" />
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
            <div className="container-4">
              <div className="container-5">
                <div className="div-wrapper-2">
                  <div className="text-wrapper-32" onClick={handleClickHome} style={{ cursor: "pointer" }}>Beranda</div>
                </div>
                <div className="container-6">
                  <div className="text-wrapper-33">/</div>
                </div>
              </div>
              <div className="div-wrapper-2">
                <div className="text-wrapper-33">Mahir Marketing</div>
              </div>
            </div>
            <div className="container-7">
              <div className="text-wrapper-34">Mahir Marketing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-sort">
        <div className="filter">
          <div className="container-8">
            <img className="SVG-margin" alt="Svg margin" src="https://c.animaapp.com/7tuEZOfx/img/svg-margin.svg" />
            <div className="container-9">
              <div className="text-wrapper-35">Filter</div>
            </div>
          </div>
        </div>
        <div className="container-10">
          <div className="container-11">
          <div class="custom-dropdown-container">
            <label for="items">Tampilkan</label>
            <select id="items" name="items" class="custom-dropdown">
              <option value="10" selected>10</option>
              <option value="20">20</option>
              <option value="30" >30</option> 
            </select>
          </div>
          </div>
          <div className="container-13">
          <div class="custom-dropdown-container">
            <label for="items">Urutkan</label>
            <select id="items" name="items" class="custom-dropdown">
              <option value="10" selected>Paling Tinggi</option>
              <option value="20">Harga Tertinggi</option>
              <option value="30" >Harga Terendah</option> 
              <option value="30" >Terbaru</option>
              <option value="30" >Rating Tertinggi</option>
              <option value="30" >Rating Terendah</option>
            </select>
          </div>
          </div>
        </div>
      </div>
      <div className="konten">
        <div className="filter-box">
          <div className="container-16">
            <div className="container-17">
              <div className="container-18">
                <div className="text-wrapper-39">Jenis Pelatihan</div>
              </div>
              {/* <button className="button">
                <div className="text-wrapper-40">Lihat Semua</div>
              </button> */}
            </div>
            <div className="div-2">
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Video Pembelajaran (241)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Kelas Webinar (121)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Kelas Offline (3)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="container-16">
            <div className="container-20">
              <div className="container-18">
                <div className="text-wrapper-39">Harga</div>
              </div>
            </div>
            <div className="div-2">
            <div className="div-3">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Gratis (7)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">&lt; Rp100.000 (23)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Rp100.000 - Rp499.000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">Rp500.000 - Rp999.000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="radio" id="free" name="price" value="Gratis"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-41">&gt; Rp999.000 (105)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="price-filter">
                <input type="number" id="minPrice" name="minPrice" class="price-input" placeholder="MIN"></input>
                <span class="separator">-</span>
                <input type="number" id="maxPrice" name="maxPrice" class="price-input" placeholder="MAX"></input>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="container-16">
            <div className="container-20">
              <div className="container-18">
                <div className="text-wrapper-45">Rating</div>
              </div>
            </div>
            <div className="div-3">
            <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
              <div className="margin-3">
                <div className="container-19">
                  <div className="container-4">
                    <img
                      className="SVG-margin-2"
                      alt="Svg margin"
                      src="https://c.animaapp.com/7tuEZOfx/img/svg-margin-1.svg"
                    />
                    <div className="text-wrapper-44">4 Keatas (377)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="container-16">
            <div className="container-17">
              <div className="container-18">
                <div className="text-wrapper-46">Mitra Pelatihan</div>
              </div>
              <button className="button">
                <div className="text-wrapper-40">Lihat Semua</div>
              </button>
            </div>
            <div className="div-2">
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-47">Pijar Mahir (48)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-47">STUDiLMU (26)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-47">GETI Incubator (23)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-47">Skill Academy (19)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="div-3">
                <input type="checkbox" id="video" name="trainingType" value="Video Pembelajaran"></input>
                <div className="margin-3">
                  <div className="container-19">
                    <div className="container-4">
                      <div className="text-wrapper-47">Cakap (18)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-14-1">
          <div className="courses">
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-5@2x.png"
              text="Data Analyst in Business Marketing"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-6@2x.png"
              text="Digital Marketing Intermediate to Expert"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-7@2x.png"
              text="Dasar-Dasar Digital Marketing"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-8@2x.png"
              text="How to Make Your Customers Interest"
              variasi="regular-paid"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-9@2x.png"
              text="Make Your Brand More Famous Than Ever"
              variasi="regular-paid"
            />
            <Card
              className="card-instance"
              frameClassName="design-component-instance-node"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-9@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-10@2x.png"
              text="Decision Making with Data"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-4.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-11@2x.png"
              text="Copywriting untuk Digital Marketing"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-12@2x.png"
              text="SEO &amp; SEM dalam Digital Marketing"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-13@2x.png"
              text="Marketing with Social Media : Ig, TikTok, X"
              variasi="regular-paid"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-14@2x.png"
              text="Marketing with Google Ads &amp; YouTube"
              variasi="regular-paid"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-15@2x.png"
              text="Mahir Marketing Plan"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-16@2x.png"
              text="Financial Planning"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-17@2x.png"
              text="Digital Marketing Entry Level"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-18@2x.png"
              text="Marketing with Facebook Ads"
              variasi="regular-paid"
            />
            <Card
              className="card-instance"
              group="https://c.animaapp.com/7tuEZOfx/img/group-2-18@2x.png"
              rectangle="https://c.animaapp.com/7tuEZOfx/img/rectangle-8-19@2x.png"
              text="Optimasi AI dalam Kehidupan Sehari-hari"
              variasi="regular-freemium"
              vector="https://c.animaapp.com/7tuEZOfx/img/vector-1-10.svg"
            />
          </div>
          <div className="navigation-number">
            <img className="container-22" alt="Container" src="https://c.animaapp.com/7tuEZOfx/img/container.svg" />
            <div className="button-wrapper">
              <button className="button-2">
                <div className="text-wrapper-48">1</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-3">
                <div className="text-wrapper-49">2</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-4">
                <div className="text-wrapper-49">3</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-5">
                <div className="text-wrapper-49">4</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-4">
                <div className="text-wrapper-49">5</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-6">
                <div className="text-wrapper-49">6</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-7">
                <div className="text-wrapper-49">7</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-8">
                <div className="text-wrapper-50">...</div>
              </button>
            </div>
            <div className="button-wrapper">
              <button className="button-9">
                <div className="text-wrapper-51">38</div>
              </button>
            </div>
            <img className="container-22" alt="Container" src="https://c.animaapp.com/7tuEZOfx/img/container-1.svg" />
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
