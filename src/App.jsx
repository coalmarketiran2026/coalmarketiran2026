import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";

import "./App.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import BackToTop from "./components/BackToTop";
import FloatingContact from "./components/FloatingContact";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import AnalysisPage from "./pages/AnalysisPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExportPage from "./pages/ExportPage";
import Welcome from "./components/Welcome";
import EncyclopediaPage from "./pages/EncyclopediaPage";
import CoalArticle from "./pages/CoalArticle";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.refresh();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
  <Welcome />

  <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductsPage />} />

        <Route path="/analysis" element={<AnalysisPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route
  path="/coal-article"
  element={<CoalArticle />}
/>

        <Route path="/export" element={<ExportPage />} />
        <Route
  path="/encyclopedia"
  element={<EncyclopediaPage />}
/>

      </Routes>



<FloatingContact />

<BackToTop />

<Footer />
    </>
  );
}

export default App;