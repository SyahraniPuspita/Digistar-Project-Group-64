import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./style.css";  // Ganti dengan style.css

export const MateriPelatihan = ({ varian = "reg-freemium" }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleDropdown = (id) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Data materi dengan status locked yang berubah berdasarkan varian
  const data = [
    { id: 1, title: "Pre-Test", locked: false },
    { id: 2, title: "Content Marketing Strategy", locked: false },
    { id: 3, title: "SEO (Search Engine Optimization)", locked: false },
    { id: 4, title: "Social Media Marketing", locked: false },
    { id: 5, title: "Email Marketing Automation", locked: false },
    { id: 6, title: "PPC (Pay-Per-Click) Advertising", locked: false },
    { id: 7, title: "Conversion Rate Optimization (CRO)", locked: false },
    { id: 8, title: "Analytics and Data-Driven Marketing", locked: false },
    { id: 9, title: "Affiliate Marketing", locked: false },
    { id: 10, title: "E-commerce Marketing", locked: false },
    { id: 11, title: "Digital Strategy & Planning", locked: false },
    { id: 12, title: "Pre-Exam", locked: true },
    { id: 13, title: "Final Exam", locked: true },
    { id: 14, title: "Panduan Project Akhir", locked: true },
    { id: 15, title: "Final Project", locked: true },
  ];

  // Jika varian adalah reg-paid, semua materi akan di-lock
  const modifiedData = data.map((item) => ({
    ...item,
    locked: varian === "reg-paid" ? true : item.locked,
  }));

  return (
    <div className="container">
      <ul>
        {modifiedData.map((item) => (
          <li key={item.id}>
            <div
              className="item-header"
              onClick={() => !item.locked && toggleDropdown(item.id)}
            >
              <span>{item.title}</span>
              {item.locked ? (
                <FontAwesomeIcon icon={faLock} className="locked-icon" />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`icon ${openItems[item.id] ? "open-icon" : ""}`}
                />
              )}
            </div>
            {openItems[item.id] && !item.locked && (
              <div className="item-detail">
                <p>Detail materi untuk {item.title}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};




