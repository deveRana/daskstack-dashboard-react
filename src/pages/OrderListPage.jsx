import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import OrderList from "../components/OrderList";

const OrderListPage = () => {
  return (
    <DefaultLayout>
      <OrderList />
    </DefaultLayout>
  );
};

export default OrderListPage;
