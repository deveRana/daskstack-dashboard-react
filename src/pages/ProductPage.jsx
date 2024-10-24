import React from "react";
import ProductsBanner from "../components/ProductsBanner";
import Products from "../components/Products";
import DefaultLayout from "../Layout/DefaultLayout";

const ProductPage = () => {
  return (
    <DefaultLayout>
      <ProductsBanner />
      <Products />
    </DefaultLayout>
  );
};

export default ProductPage;
