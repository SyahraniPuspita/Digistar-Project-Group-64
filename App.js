import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./src/screens/LandingPage/LandingPage";
import { HomeLogIn }  from "./src/screens/HomeLogin"; // Komponen Halaman Masuk (Login)
import { HomeLogInStudentKit }  from "./src/screens/HomeLoginStudentKit"; // Komponen Halaman Masuk (Login)
import { KategoriFilter } from "./src/screens/KategoriFilter";
import { Keranjang } from "./src/screens/Keranjang";
import { Pembayaran } from "./src/screens/Pembayaran/Pembayaran";
import { DetailKursusFreemium } from "./src/screens/DetailKursusFreemium";
import { DetailKursusPaid } from "./src/screens/DetailKursusPaid";
import { KursusSaya } from "./src/screens/KursusSaya";
import { LmsFreemium } from "./src/screens/LmsFreemium";
import { ReviewCv } from "./src/screens/ReviewCv";
import { ReviewProject } from "./src/screens/ReviewProject";
import { HasilReview } from "./src/screens/HasilReview";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<HomeLogIn />} />
        <Route path="/loginstudentkit" element={<HomeLogInStudentKit />} />
        <Route path="/kategorifilter" element={<KategoriFilter />} />
        <Route path="/keranjang" element={<Keranjang />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/detailkursusfreemium" element={<DetailKursusFreemium />} />
        <Route path="/detailkursuspaid" element={<DetailKursusPaid />} />
        <Route path="/kursussaya" element={<KursusSaya />} />
        <Route path="/lmsfreemium" element={<LmsFreemium />} />
        <Route path="/reviewcv" element={<ReviewCv />} />
        <Route path="/reviewproject" element={<ReviewProject />} />
        <Route path="/hasilreview" element={<HasilReview />} />
      </Routes>
    </Router>
  );
}

export default App;