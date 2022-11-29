import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home";
import Catalog from "../page/Catalog";
import ProductDetail from "../components/ProductDetail";
import Cart from "../page/cart";
import Login from "../page//login/login";
import Accessories from "../page/accessories";
import Contact from "../page/contact";
import CheckOut from "../page/checkout";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<ProductDetail />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
};

export default Routers;
