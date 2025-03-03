import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* SEO Optimized Meta Tags */}
        <meta name="description" content="VedaWiki - The Ultimate Encyclopedia on Indian Knowledge & History" />
        <meta name="keywords" content="VedaWiki, Indian Encyclopedia, History, Knowledge" />
        <meta name="author" content="Abhishek Verma" />
        
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
