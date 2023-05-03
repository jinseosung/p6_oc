import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./components/Error";
import ScrollToTop from "./utils/ScrollToTop";
import "./utils/style/style.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Navigate to="/404" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
