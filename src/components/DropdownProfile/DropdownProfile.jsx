import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import Profile from "../../icons/Profile.svg"; // Ganti sesuai jalur ikon yang benar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faBook,
  faHeart,
  faUserFriends,
  faHistory,
  faTags,
  faCertificate,
  faGift,
  faUserCog,
  faSignOutAlt,
  faGraduationCap,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { StudentKitUpgradeDialog } from "../UpgradeStudentKit/index";

const DropdownProfile = ({onStudentKitClicked}) => {
  const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup dropdown
  const dropdownRef = useRef(null); // Ref untuk elemen dropdown

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState); // Membuka/menutup dropdown saat ikon diklik
  };

  useEffect(() => {
    // Fungsi untuk mendeteksi klik di luar elemen dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Menutup dropdown jika klik di luar elemen
      }
    };

    // Menambahkan event listener saat komponen di-mount
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const handleClickLandingPage = () => {
    // Navigasi ke halaman landing page
    navigate("/");
  };

  const handleClickKursusSaya = () => {
    // Navigasi ke halaman landing page
    navigate("/kursussaya");
  };

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="profile-icon" onClick={toggleDropdown}>
        <img src={Profile} alt="Profile Icon" className="profile-icon-image" />
      </div>

      {isOpen && (
        <div className="dropdown-menu-1">
          <div className="profile-info">
            <img src={Profile} alt="Profile" className="profile-avatar" />
            <div className="profile-details">
              <h4>Syahrani Puspita Wijaya</h4>
              <p>syahrani.spw@gmail.com</p>
            </div>
          </div>
          <ul>
            <li onClick={handleClickKursusSaya} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faBook} /> Kursus Saya
            </li>
            <li onClick={onStudentKitClicked}>
              {/* <StudentKitUpgradeDialog /> */}
              <FontAwesomeIcon icon={faGraduationCap} /> Student Kit{" "}
              <span className="new">NEW!</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} /> Review CV & Project Saya{" "}
              <span className="new">NEW!</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBookBookmark} /> Minat Pelatihan
            </li>
            <li>
              <FontAwesomeIcon icon={faUserFriends} /> Kode Referral{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faHistory} /> Riwayat Transaksi
            </li>
            <li>
              <FontAwesomeIcon icon={faTags} /> Promo
            </li>
            <li>
              <FontAwesomeIcon icon={faHeart} /> Wishlist Saya
            </li>
            <li>
              <FontAwesomeIcon icon={faCertificate} /> Sertifikat Saya
            </li>
            <li>
              <FontAwesomeIcon icon={faGift} /> Redeem E-Voucher
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCog} /> Pengaturan Profil
            </li>
            <li onClick={handleClickLandingPage} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Keluar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownProfile;
