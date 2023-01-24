import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import Rental from "./components/Rental";
import Whyus from "./components/Whyus";
import Aboutus from "./components/Aboutus";
import ContactUsM from "./components/ContactusM";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUsM />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
