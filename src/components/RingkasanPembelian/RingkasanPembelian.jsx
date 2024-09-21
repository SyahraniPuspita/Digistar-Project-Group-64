import React, { useState } from 'react';
import './style.css'; // Import file CSS

export const RingkasanPembelian = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="ringkasan-container">
            <div className="ringkasan-header" onClick={toggleDropdown}>
                <span>Ringkasan Pembelian</span>
                <svg
                    className={`arrow-icon ${isOpen ? 'open' : ''}`}
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 2.5L5 7.5L10 2.5"
                        stroke="#000"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="ringkasan-body">
                    <div className="ringkasan-content">
                        <p>Total Pembelian (0 kursus)</p>
                        <p>Rp0</p>
                    </div>
                </div>
            )}
        </div>
    );
};



