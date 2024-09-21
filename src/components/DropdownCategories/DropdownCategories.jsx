import React, { useState } from 'react';
import './style.css';


const DropdownCategories = () => {
    const categories = [
        {
            category: 'Pengembangan',
            subCategories: [
                {
                    subCategory: 'Pengembangan Web',
                    subSubCategories: ['JavaScript', 'ReactJS', 'Angular', 'CSS', 'Next.js', 'HTML', 'ASP.NET Core', 'Node.js']
                },
                {
                subCategory: 'Ilmu Data',
                subSubCategories: ['Pembelajaran Mesin', 'Python', 'Kecerdasan Buatan (AI)', 'Pembelajaran Mendalam', 'AI Generatif (GenAI)', 'LangChain', 'Pemrosesan Bahasa Alami (NLP)', 'R (Bahasa Pemrograman)']
                },
                {
                    subCategory: 'Pengembangan Seluler',
                    subSubCategories: ['Google Flutter', 'Pengembangan IOS', 'Pengembangan Android', 'React Native', 'Dart (Bahasa Pemrograman)', 'Swift', 'Kotlin', 'Pengembangan Aplikasi Seluler', 'SwiftUI']
                },
                {
                    subCategory: 'Bahasa Pemrograman',
                    subSubCategories: ['Python', 'Java', 'C# (Bahasa Pemrograman)', 'C++ (Bahasa Pemrograman)', 'ReactJS', 'C (Bahasa Pemrograman)', 'Go (Bahasa Pemrograman)', 'Spring Framework', 'Rust (Bahasa Pemrograman)']
                },
                {
                    subCategory: 'Pengembangan Game',
                    subSubCategories: ['Unreal Engine', 'Unity', 'Dasar - dasar Pengembangan Game', 'C# (Bahasa Pemrograman)', 'Pengembangan Game 3D', 'Godot', 'C++ (Bahasa Pemrograman)', 'Cetak Biru Unreal Engine', 'Pengembngan Game 2D']
                },
                {
                    subCategory: 'Desain dan Pengembangan Database',
                    subSubCategories: ['SQL', 'MySQL', 'Sistem Manajemen Database (DBMS)', 'SQL Server', 'PostgreSQL', 'Apache Kafka', 'Oracle SQL', 'MongoDB', 'Pemrograman Database']
                },
                {
                    subCategory: 'Pengujian Perangkat Lunak',
                    subSubCategories: ['Selenium WebDriver', 'Microsoft Playwright', 'Pengujian Otomatisasi', 'Java', 'Postman', 'ISTOB Certified Tester Foundation Level (CTFL)', 'Selenium Testing Framework', 'Pengujian API']
                },
                {
                    subCategory: 'Rekayasa Perangkat Lunak',
                    subSubCategories: ['Struktur Data', 'Algoritme', 'Arsitektur Perangkat Lunak', 'Certified Kubernetes Application Developer (CKAD)', 'Wawancara Coding', 'Layanan Mikro', 'Arduino', 'Algoritme Java']
                },
                {
                    subCategory: 'Alat Pengembangan Perangkat Lunak',
                    subSubCategories: ['Docker', 'Git', 'Kubernetes', 'Rekayasa Prompt', 'GitHub', 'JIRA', 'Konfluensi', 'CI/CD', 'Terraform']
                },
                {
                    subCategory: 'Pengembangan Tanpa Kode',
                    subSubCategories: ['AI Generatif (GenAI)', 'WordPress', 'Pemrograman Visual Bubble', 'Microsoft Power Apps', 'Microsoft Power Platform', ' Microsoft Power Automate', 'Desain Web', 'Miscrosoft 365 Copilot', 'GPT Kustom/GPT Builder']
                }
            ]
        },
        {
            category: 'Bisnis',
            subCategories: [
                {
                    subCategory: 'Kewirausahaan',
                    subSubCategories: ['Dasar-Dasar Bisnis', 'Dasar-Dasar Kewirausahaan', 'Strategi Bisnis', 'Bisnis Online', 'Bekerja Lepas', 'Rintisan', 'ChatGPT', 'Rencana Bisnis', 'QuickBooks']
                },
                {
                    subCategory: 'Komunikasi',
                    subSubCategories: ['Keahlian Komunikasi', 'Keahlian Presentasi', 'Berbicara Di Depan Umum', 'Menulis', 'Menulis Fiksi', 'Komunikasi Bisnis','Penulisan Bisnis', 'Ketegasan', 'Penulisan dan Etiket Email']
                },
                {
                    subCategory: 'Penjualan',
                    subSubCategories: ['Keahlian Penjualan', 'Penjualan B2B', 'LinkedIn', 'Layanan Pelanggan', 'Manajemen Penjualan', 'Pengembangan Bisnis', 'Telepon Buta', 'Pembuatan Prospek', 'Cold Email']
                },
                {
                    subCategory: 'Strategi Bisnis',
                    subSubCategories: ['IIBA Entry Certificate in Business Analysis (ECBA)', 'Environmental, Social and Governance (ESG)', 'Konsultasi Manajemen', 'Rekayasa Prompt', 'Kecerdasan Buatan (AI)', 'AI Generatif (Gen AI)', 'TOGAF']
                },
                {
                    subCategory: 'Operasi',
                    subSubCategories: ['Rantai Pasokan', 'Manajemen Logistik', 'Skill Asisten Virtual', 'Manajemen Operasi', 'Manajemen Kualitas', 'Lean']
                },
                {
                    subCategory: 'Manajemen Proyek',
                    subSubCategories: ['PMI PMBOK', 'Agile', 'Scrum', 'Scrum Master Profesional (PSM)', 'Manajemen Risiko Proyek']
                },
                {
                    subCategory: 'Hukum Bisnis',
                    subSubCategories: ['Hukum', 'Etika dan Tata Kelola AI', 'Manajemen Kontrak', 'Hukum Kontak', 'TI Layananan Kesehatan']
                },
                {
                    subCategory: 'Analisis & Kecerdasan Bisnis',
                    subSubCategories: ['Microsoft Power BI', 'SQL', 'Pemodelan Data', 'Analisis Data', 'Analisis Bisnis', 'Tableau', 'Intelijen Bisnis (BI)', 'Analitik Bisnis']
                },
                {
                    subCategory: 'Sumber Daya Manusia',
                    subSubCategories: ['Merekrut dan Mempekerjakan', 'Analitik SDM', 'Hukum Ketenagakerjaan', 'Pembelajaran dan Pengembangan Korporat (L&D)', 'Manajemen Konflik', 'Kecerdasan Emosional', 'Keahlian Wawancara']
                },
                {
                    subCategory: 'Industri',
                    subSubCategories: ['Industri Minyak dan Gas', 'Kesehatan dan Keselamatan Tempat Kerja', 'Teknik Kontrol', 'Teknik Kimia', 'Penerbangan', 'Teknik Listrik', 'Aspen Plus']
                },
                {
                    subCategory: 'E-Commerce',
                    subSubCategories: ['Amazon FBA', 'Dropshipping', 'Shopify Dropshipping', 'Etsy', 'Menjual di Amazon', 'Amazon Kindle Direct Publishing (KDP)', 'Bisnis Online']
                },
                {
                    subCategory: 'Media',
                    subSubCategories: ['Search Engine Optimization (SEO)', 'Pembuatan Konten', 'Penulisan Cerita dan Penulisan Naskah', 'Pembuatan Buku Audio', 'Amazon Kindle Direct Publishing (KDP)', 'Jurnalisme', 'AI Generatif (GenAI)', 'Scrivener', 'Menulis Kreatif']
        
                },
                {
                    subCategory: 'Real Estate',
                    subSubCategories: ['Investasi Real Estate', 'Hosting Airbnb', 'Konstruksi', 'Hipotek', 'Pemodelan Keuangan', 'Pemasaran Real Estate', 'Renovasi-Jual Real Estate', 'Bisnis Notaris']
        
                }
            ]
        },
        {
            category: 'Keuangan & Akuntansi',
            subCategories: [
                {
                    subCategory: 'Akuntansi & Laporan Keuangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
        
                },
                {
                    subCategory: 'Kepatuhan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
        
                },
                {
                    subCategory: 'Ekonomi',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
        
                },
                {
                    subCategory: 'Keuangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
        
                },
                {
                    subCategory: 'Sertifikasi dan Persiapan Ujian Keuangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
        
                },
                {
                    subCategory: 'Pemodelan dan Analisis Keuangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
                },
                {
                    subCategory: 'Investasi dan Perdagangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
                },
                {
                    subCategory: 'Alat Manajemen Keuangan',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
                },
                {
                    subCategory: 'Pajak',
                    subSubCategories: ['Akuntansi', 'Pembukuan', 'QuickBooks', 'Akuntansi Keuangan', 'Dasar-Dasar Keuangan', 'TallyPrime (Tally.ERP)', 'Ujian Uniform CPA', 'International Financial Reporting Standards (IFRS)', 'Xero']
                },
            ]
        },
        {
            category: 'TI & Perangkat Lunak',
            subCategories: [
                {
                    subCategory: 'Sub category 1',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Produktivitas Kantor',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Pengembangan Personal',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Desain',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Pemasaran',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Gaya Hidup',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        }
        ,{
            category: 'Fotografi & Video',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Kesehatan & Kebugaran',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Musik',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        },
        {
            category: 'Pengajaran & Akademis',
            subCategories: [
                {
                subCategory: 'Sub category 1',
                subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                },
                {
                    subCategory: 'Sub category 2',
                    subSubCategories: ['Sub sub category 1', 'Sub sub category 2', 'Sub sub category 3']
                }
            ]
        }
        ];
    return (
        <div className="dropdown">
            <ul className="dropdown-menu">
                {categories.map((item, categoryIndex) => (
                    <li key={categoryIndex} className="dropdown-item">
                        <span>{item.category}</span>
                        <ul className="dropdown-submenu">
                            {item.subCategories.map((sub, subIndex) => (
                                <li key={subIndex} className="dropdown-item">
                                    <span>{sub.subCategory}</span>
                                    <ul className="dropdown-subsubmenu">
                                        {sub.subSubCategories.map((subSub, subSubIndex) => (
                                            <li key={subSubIndex} className="dropdown-item">
                                                <span>{subSub}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default DropdownCategories;
