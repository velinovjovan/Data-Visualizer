import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChartsPage from "./pages/ChartsPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/charts" element={<ChartsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
