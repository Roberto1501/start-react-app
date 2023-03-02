import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import NavBar from "../pages/NavBar";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
