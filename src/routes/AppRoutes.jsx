// src/routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DefaultLayout from "../Layout/DefaultLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import FavouritesPage from "../pages/FavouritesPage";
import ProductStockPage from "../pages/ProductStockPage";
import OrderListPage from "../pages/OrderListPage";
import PricingPage from "../pages/PricingPage";
import ToDoPage from "../pages/ToDoPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import SignUpPage from "../pages/SignUpPage";
import SettingsPage from "../pages/SettingsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/order-lists" element={<OrderListPage />} />
      <Route path="/product-stocks" element={<ProductStockPage />} />
      <Route path="/pricing-plans" element={<PricingPage />} />
      <Route path="/todo-list" element={<ToDoPage />} />
      <Route path="/contacts" element={<ContactPage />} />
      <Route path="/allteam" element={<TeamPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
