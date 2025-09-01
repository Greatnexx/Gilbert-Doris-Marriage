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

const App = () => {
  return (
    <Router>
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


