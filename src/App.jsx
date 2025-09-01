import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Abouthim from "./Pages/Abouthim";
import Home from "./Pages/Home";
import MainLayout from "./Layouts/MainLayout";
import Abouther from "./Pages/Abouther";
import Gallery from "./Pages/Gallery";
import Location from "./Pages/Location";
import BrideGroom from "./Pages/BrideGroom";
import Story from "./Pages/Story";
import QrCodePage from "./Pages/QrCodePage";
import Gift from "./Pages/Gift";
import Bridesmaid from "./Pages/BridesMaid";
import ScrollToTop from "./Components/ScrollToTup";
import { useEffect, useState } from "react";
import Preloader from "./Components/PreLoader";



const App = () => {

  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about-him" element={<Abouthim />} />
          <Route path="/about-her" element={<Abouther />} />
          <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/groom" element={<BrideGroom/>} />
        <Route path="/bridesmaid" element={<Bridesmaid/>} />
        <Route path="/story" element={<Story/>} />
        <Route path="/qr-code" element={<QrCodePage />} />
        <Route path="/gift" element={<Gift />} />

      </Route>
      </Routes>
    </Router>
  )
}

export default App;


