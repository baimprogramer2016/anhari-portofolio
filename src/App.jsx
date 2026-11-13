import React, { useState } from "react";
import p from "./assets/p.jpeg";
import cv from "./assets/cv_anhari.pdf";

function App() {
  // State untuk menyimpan data portofolio yang sedang diklik
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  // Data Skills
  const skills = ["Laravel", "Inertia React", "Flutter", "PHP", "React JS"];

  // Data Portofolio (Ditambahkan field 'photos')
  const portfolios = [
    {
      title: "HRMS Mobile App",
      company: "Sun Motor Group",
      description:
        "Aplikasi manajemen SDM dengan fitur absensi, ijin sakit, cuti, lembur , tugas dll berbasis lokasi",
      tags: ["Flutter", "Firebase", "Laravel", "React", "PostgreSQL"],
      photos: [
        "hrms_mobile.jpeg",
        "hrms_mobile_1.jpeg",
        "hrms_mobile_2.jpeg",
        "hrms_mobile_3.jpeg",
      ],
    },
    {
      title: "Mobile Workshop Service",
      company: "Sun Motor Group",
      description: "Aplikasi tracking service kendaraan berbasis lokasi",
      tags: ["Flutter", "Laravel"],
      photos: ["mws_1.png", "mws_2.jpeg"],
    },
    {
      title: "Edoc",
      company: "Sun Motor Group",
      description:
        "Aplikasi manajemen dokumen berbasis web untuk internal perusahaan",
      tags: ["Laravel", "Inertia React"],
      photos: ["edoc_1.png", "edoc_2.png", "edoc_3.png"],
    },
    {
      title: "Bridging SIMRS & Satu Sehat",
      company:
        "PT. Smarthub Technologies untuk RSUD Cileungsi, RS LNG Badan Bontang, RSUD Padang Sidempuan",
      description:
        "Aplikasi bridging data rekam medis dari SIMRS ke Satu Sehat Kemenkes RI dengan API",
      tags: ["Laravel"],
      photos: ["ss_1.png", "ss_2.png"],
    },
    {
      title: "Remote Control Monitoring",
      company: "Akebono Astra Brake",
      description:
        "Aplikasi monitoring remote control berbasis web untuk AC, Genset, Lampu di lingkungan pabrik",
      tags: ["Laravel"],
      photos: ["rc_1.png", "rc_2.png", "rc_3.png"],
    },
    {
      title: "B2B Asuransi Uang Online & Umum",
      company: "BRI Insurance",
      description:
        "Aplikasi B2B untuk pengajuan penutupan asuransi secara online pada lingkungan BRI Group",
      tags: ["PHP", "WSDL"],
      photos: ["api_bri.jpeg"],
    },
    {
      title: "PMIS",
      company: "PT Prosys Bangun Persada",
      description:
        "Aplikasi manajemen proyek berbasis web untuk internal perusahaan, monitoring revisi dokumen, progress proyek, dan laporan proyek",
      tags: ["Laravel"],
      photos: ["pmis_1.png", "pmis_2.png", "pmis_3.png"],
    },
    {
      title: "Management CV Karyawan",
      company: "PT Prosys Bangun Persada",
      description:
        "Aplikasi manajemen cv karyawan berbasis web untuk internal perusahaan",
      tags: ["Laravel", "Inertia React"],
      photos: ["cv_4.png", "cv_1.png", "cv_2.png", "cv_3.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-600">
            Dev.Portofolio
          </span>
          <div className="space-x-6 hidden md:block font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-800 transition-colors">
              Tentang
            </a>
            <a href="#skills" className="hover:text-blue-800 transition-colors">
              Keahlian
            </a>
            <a
              href="#portfolio"
              className="hover:text-blue-800 transition-colors"
            >
              Portofolio
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="about"
        className="max-w-5xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-gray-500 font-semibold tracking-wide uppercase mb-2">
            Halo, Saya
          </h2>
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
            Anhari
          </h1>
          <h3 className="text-2xl font-medium text-slate-600 mb-6">
            Full-Stack Developer
          </h3>
          <p className="text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            Membangun sistem yang bekerja dengan baik adalah motivasi terbaik.
            Menulis kode yang rapi agar mudah dikembangkan di masa depan.
            Menjaga semuanya tetap sederhana dan tepat sasaran. Karena pada
            akhirnya, stabilitas lebih penting daripada kerumitan.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/6285814479788?text=" +
                    encodeURIComponent("Halo"),
                )
              }
              className="px-6 py-3 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              Hubungi Saya
            </button>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = cv;
                link.download = "CV_Anhari.pdf";
                link.click();
              }}
              className="cursor-pointer px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 font-semibold rounded-lg shadow-sm transition-all"
            >
              Lihat Resume
            </button>
          </div>
        </div>

        {/* Profile Photo Placeholder */}
        <div className="w-64 h-64 md:w-80 md:h-80 shrink-0">
          <img
            src={p}
            alt="Foto Profil"
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Keahlian & Teknologi
            </h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto rounded"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full font-medium shadow-sm hover:border-blue-900 hover:text-blue-900 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Portofolio Pekerjaan
            </h2>
            <div className="w-16 h-1 bg-blue-900 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolios.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedPortfolio(item)}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="h-40 bg-slate-100 rounded-xl mb-6 flex items-center justify-center text-slate-400 overflow-hidden">
                  {/* Gunakan foto pertama sebagai thumbnail jika ada, jika tidak gunakan SVG */}
                  {item.photos && item.photos.length > 0 ? (
                    <img
                      src={`/portofolio/${item.photos[0]}`}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none"; // Fallback jika gambar rusak
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}

                  <svg
                    className={`w-12 h-12 ${item.photos && item.photos.length > 0 ? "hidden" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-800 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog / Modal untuk Foto Portofolio */}
      {selectedPortfolio && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedPortfolio(null)} // Tutup modal saat overlay diklik
        >
          {/* Modal Container */}
          <div
            className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Cegah penutupan saat area putih diklik
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {selectedPortfolio.title}
                </h3>
                <p className="text-sm font-medium text-blue-800">
                  {selectedPortfolio.company}
                </p>
              </div>
              <button
                onClick={() => setSelectedPortfolio(null)}
                className="p-2 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body (Galeri Foto) */}
            <div className="p-6 overflow-y-auto bg-slate-50 flex-1">
              {selectedPortfolio.photos &&
              selectedPortfolio.photos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {selectedPortfolio.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="bg-slate-200 rounded-xl overflow-hidden shadow-sm border border-slate-200 aspect-video flex items-center justify-center group relative"
                    >
                      {/* Sesuaikan path /assets/ dengan struktur folder public atau src Anda */}
                      <img
                        src={`/portofolio/${photo}`}
                        alt={`${selectedPortfolio.title} - ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback tampilkan nama file jika gambar tidak ditemukan */}
                      <div className="absolute inset-0 hidden flex-col items-center justify-center text-slate-500 p-4 text-center">
                        <svg
                          className="w-10 h-10 mb-2 opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <span className="text-sm font-medium break-all">
                          {photo}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-48 text-slate-400">
                  <svg
                    className="w-16 h-16 mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <p className="text-lg">
                    Belum ada screenshot untuk proyek ini.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>© 2026 Anhari. Dibuat dengan React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
