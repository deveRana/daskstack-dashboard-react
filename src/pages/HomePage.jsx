import React from "react";
import Dashboard from "../components/Dashboard";
import DefaultLayout from "../Layout/DefaultLayout";
import ChartComponent from "../components/Chart";

const HomePage = () => {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
};

export default HomePage;
