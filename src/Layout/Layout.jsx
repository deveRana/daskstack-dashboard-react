import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Products from "../components/Products";
import ProductsBanner from "../components/ProductsBanner";
import Favourites from "../components/Favourites";
import OrderList from "../components/OrderList";
import OrderListFilter from "../components/OrderListFilter";
import ProductStock from "../components/ProductStock";
import Calendar from "../components/Calendar";
import PricingPlans from "../components/PricingPlan";
import ToDoList from "../components/ToDoList";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-[83%] flex flex-col pl-6 pt-6 pb-20 pr-6">
          <ToDoList />
          <PricingPlans />
          <ProductStock />
          <OrderList />
          <OrderListFilter />
          <Calendar />
          <Dashboard />
          <ProductsBanner />
          <Products />
          <Favourites />
        </div>
      </div>
    </div>
  );
};

export default Layout;
