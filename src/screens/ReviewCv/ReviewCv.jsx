import React from "react";
import { Button } from "../../components/Button";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { DropdownMateri } from "../../components/DropdownMateri";
import { KursusTestimoni } from "../../components/KursusTestimoni";
import { TabMenu } from "../../components/TabMenu";
import { LogoDefault2 } from "../../icons/LogoDefault2";
import "./style.css";
import { LogoDefault4 } from "../../icons/LogoDefault4";
import  DropdownCategories  from "../../components/DropdownCategories";
import Cart from "../../icons/Cart.svg"
import Notification from "../../icons/Notification.svg"
import  DropdownProfile from "../../components/DropdownProfile";
import { useNavigate } from "react-router-dom";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

export const ReviewCv = () => {

  const navigate = useNavigate();

  const handleClickKeranjang = () => {
    // Navigasi ke halaman keranjang
    navigate("/keranjang");
  };

  const handleClickHome = () => {
    // Navigasi ke halaman login
    navigate("/login");
  };

  const handleClickHasilReview = () => {
    // Navigasi ke halaman login
    navigate("/hasilreview");
  };
  return (
    <div className="review-CV">
      <div className="navigation-bar">
        <div className="navigasi-atas">
          <div className="menu-navbar-atas">
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/xc5GBsR3/img/svg-3.svg" />
                <div className="text-wrapper-18">Pijar Prakerja</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/xc5GBsR3/img/svg-4.svg" />
                <div className="text-wrapper-18">Pijar Mahir for Business</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/xc5GBsR3/img/svg-5.svg" />
                <div className="text-wrapper-18">Pijar Camp</div>
              </div>
            </div>
            <div className="item">
              <div className="link-3">
                <img className="SVG-2" alt="Svg" src="https://c.animaapp.com/xc5GBsR3/img/svg-6.svg" />
                <div className="text-wrapper-18">Pijar Mahir for UKM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-1">
          <div className="header-2">
            <LogoDefault4 className="logo-default" onClick={handleClickHome} style={{ cursor: "pointer" }}/>
            <div className="menu-search">
              <img className="SVG-3" alt="Svg" src="https://c.animaapp.com/IMLcrDb6/img/svg-17.svg" />
              <div className="menu-text">
                <div className="text-wrapper-28-2">Kategori
                  <DropdownCategories/> 
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
                    <div className="overlap-group-6-1">
                      <div className="container-2-1">
                        <p className="text-wrapper-30-1">Cari kursus yang kamu inginkan</p>
                      </div>
                      <div className="container-3" />
                    </div>
                  </div>
                  <img className="margin" alt="Margin" src="https://c.animaapp.com/IMLcrDb6/img/margin-2.svg" />
                </div>
              </div>
              <img src={Cart} alt="icon" onClick={handleClickKeranjang} style={{ cursor: "pointer" }}/>
              <img src={Notification} alt="icon" />
              <DropdownProfile/>
            </div>
          </div>
        </div>
      </div>
      <div className="konten">
        <div className="header-review-CV">
          <div className="teks">
            <div className="overlap-group-4">
              <p className="title">Review CV &amp; Project-mu oleh Para Expert</p>
              <div className="frame-12">
                <div className="frame-13">
                  <div className="text-wrapper-23">18.000+</div>
                  <div className="text-wrapper-24">CV telah direview</div>
                </div>
                <div className="text-wrapper-25">|</div>
                <div className="frame-14">
                  <div className="text-wrapper-23">5.000+</div>
                  <div className="text-wrapper-26">Project telah direview</div>
                </div>
              </div>
              <p className="description">
                Tingkatkan kualitas CV dan project&nbsp;&nbsp;melalui ulasan dari para ahli di bidangnya. Pengguna bisa
                mendapatkan feedback yang objektif dan membangun dalam waktu maksimal 2x24 jam.
              </p>
            </div>
          </div>
          <img className="image" alt="Image" src="https://c.animaapp.com/xc5GBsR3/img/image.png" />
        </div>
        <div className="tab-menu-summary">
          <TabMenu rightText="Review Project" leftText="Review CV" varian="kiri-aktif"
          />
          <div className="summary">
            <div className="frame-15">
              <div className="summary-2">
                <div className="frame-16">
                  <div className="text-wrapper-27">KUOTA REVIEW</div>
                  <div className="text-wrapper-28">5</div>
                </div>
                <div className="frame-17">
                  <div className="text-wrapper-29-1">SELESAI</div>
                  <div className="text-wrapper-28">3</div>
                </div>
                <div className="frame-17">
                  <div className="text-wrapper-29-1">DALAM PROSES</div>
                  <div className="text-wrapper-28">2</div>
                </div>
              </div>
              <Button  text="Lihat Hasil" varian="short-big-outline" style={{ width : "150px", right : "30px", cursor: "pointer"  }} onClick={handleClickHasilReview} />
              <div className="frame-18" />
            </div>
          </div>
          <div className="section-harga">
            <div className="banner-harga">
              <div className="paket">
                <div className="button-wrapper">
                  <Button
                    className="button-3"
                    divClassName="button-2"
                    frameClassName="design-component-instance-node"
                    text="Beli Sekarang"
                    varian="n-custsf"
                  />
                </div>
              </div>
              <div className="frame-wrapper-1">
                <div className="button-instance-wrapper">
                  <Button className="button-4" frameClassName="button-5" text="Beli Sekarang" varian="n-custsf" />
                </div>
              </div>
              <div className="paket-2">
                <div className="button-instance-wrapper">
                  <Button className="button-4" frameClassName="button-5" text="Beli Sekarang" varian="n-custsf" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deskripsi-upload">
          <div className="deskripsi">
            <div className="judul">Deskripsi</div>
            <div className="dropdown">
              <DropdownMateri
                className="dropdown-materi-course"
                divClassName="dropdown-materi-instance"
                text="Target Pengguna"
                text1={
                  <>
                    Mahasiswa dan fresh graduate yang sedang mempersiapkan CV buat melamar kerja.
                    <br />
                    Profesional yang pengen meningkatkan CV atau project mereka buat karier selanjutnya.
                    <br />
                    Freelancer yang ingin menampilkan portofolio project terbaik mereka di pasar kerja.
                  </>
                }
                varian="open"
              />
              <DropdownMateri
                className="dropdown-materi-course"
                divClassName="dropdown-materi-instance"
                text="Alur Penggunaan"
                text1={
                  <>
                    Upload CV atau Project
                    <br />
                    Pengguna bisa mengunggah dokumen CV atau link project mereka (misalnya link GitHub, website, atau
                    media lain yang relevan).
                    <br />
                    Pemilihan Kategori Ahli
                    <br />
                    Khusu review project, pengguna harus memilih kategori kategori project yang di-upload.
                    <br />
                    Proses Review
                    <br />
                    Ahli yang dipilih akan menerima permintaan review dan memberikan feedback dalam waktu maksimal 2x24
                    jam. Feedback ini meliputi poin-poin perbaikan, saran, dan insight sesuai dengan standar industri
                    terbaru.
                    <br />
                    Terima Feedback
                    <br />
                    Setelah selesai direview, pengguna akan mendapatkan notifikasi yang berisi hasil ulasan mereka.
                    Feedback ini bisa berupa catatan tertulis atau rekaman video singkat yang menjelaskan perubahan yang
                    direkomendasikan.
                  </>
                }
                varian="open"
              />
              <DropdownMateri
                className="dropdown-materi-course"
                divClassName="dropdown-materi-instance"
                text="Keunggulan Fitur"
                text1={
                  <>
                    Feedback Personal dan Terarah
                    <br />
                    Setiap review diberikan langsung oleh para profesional yang sudah berpengalaman di bidangnya, jadi
                    pengguna akan mendapatkan masukan yang spesifik dan sesuai dengan kebutuhan industri mereka.
                    <br />
                    Cepat dan Efisien
                    <br />
                    Proses review dijamin selesai dalam waktu maksimal 2x24 jam, jadi pengguna bisa segera melakukan
                    perbaikan dan update pada CV atau project mereka.
                    <br />
                    Relevan dan Up-to-Date
                    <br />
                    Saran dan masukan yang diberikan selalu mengikuti tren dan standar terbaru, sehingga pengguna dapat
                    memastikan bahwa CV atau project mereka relevan dan kompetitif di pasar kerja.
                  </>
                }
                varian="open"
              />
              <DropdownMateri
                className="dropdown-materi-course"
                divClassName="dropdown-materi-instance"
                text="Benefit untuk Pengguna"
                text1={
                  <>
                    Meningkatkan Kualitas CV dan Project
                    <br />
                    Pengguna bisa lebih percaya diri melamar pekerjaan karena CV dan project mereka sudah melalui proses
                    review yang detail dari para ahli.
                    <br />
                    Memperbesar Peluang Diterima Kerja
                    <br />
                    Dengan CV dan project yang lebih profesional dan standout, peluang pengguna buat diterima di
                    perusahaan impian atau project freelance jadi lebih besar.
                    <br />
                    Pembelajaran Tambahan
                    <br />
                    Pengguna nggak cuma dapat feedback, tapi juga belajar dari saran yang diberikan sehingga mereka bisa
                    terus memperbaiki diri di masa mendatang.
                  </>
                }
                varian="open"
              />
            </div>
          </div>
          <div className="upload-testimoni">
            <div className="upload">
              <div className="info">
                <div className="frame-19">
                  <img className="gg-info" alt="Gg info" src="https://c.animaapp.com/xc5GBsR3/img/gg-info.svg" />
                  <div className="text-wrapper-30">Info</div>
                </div>
                <div className="silakan-unggah-CV-wrapper">
                  <p className="silakan-unggah-CV">Silakan&nbsp;&nbsp;unggah CV kamu melalui kotak di bawah ini</p>
                </div>
              </div>
              <div className="box-upload">
                <div className="group-3">
                  <div className="frame-20">
                    <img
                      className="solar-upload-bold"
                      alt="Solar upload bold"
                      src="https://c.animaapp.com/xc5GBsR3/img/solar-upload-bold.svg"
                    />
                    <div className="text-wrapper-31">atau</div>
                    <div className="border-wrapper">
                      <div className="input-wrapper">
                        <div className="container-wrapper">
                          <div className="container-4">
                            <div className="text-wrapper-32">Masukkan Tautan</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button text="Unggah" varian="custom-width-big-filled" style={{ width: "593px"}}/>
              </div>
            </div>
            <div className="testimoni">
              <img className="group-4" alt="Group" src="https://c.animaapp.com/xc5GBsR3/img/group-7@2x.png" />
              <div className="frame-21">
                <div className="kursus-testimoni-wrapper">
                  <KursusTestimoni
                    className="kursus-testimoni-instance"
                    ellipse="https://c.animaapp.com/xc5GBsR3/img/ellipse-1-1@2x.png"
                    text="SETELAH REVIEW CV GAK PERNAH GAGAL SELEKSI ADMINISTRASI"
                    text1="Adinda Aletheia"
                  />
                </div>
                <img className="group-5" alt="Group" src="https://c.animaapp.com/xc5GBsR3/img/group-5@2x.png" />
              </div>
              <div className="group-6">
                <div className="overlap-group-5">
                  <img className="group-7" alt="Group" src="https://c.animaapp.com/xc5GBsR3/img/group-6@2x.png" />
                  <div className="heading">
                    <div className="text-wrapper-33">Testimoni Dari Pengguna</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConcreteComponentNode
        className="footer-3"
        footerWrapperFooterClassName="footer-5"
        footerWrapperFooterSosmed="https://c.animaapp.com/xc5GBsR3/img/sosmed-3.svg"
        footerWrapperFooterSvg="https://c.animaapp.com/xc5GBsR3/img/svg-8.svg"
        overlapClassName="footer-4"
      />
    </div>
  );
};