import React from "react";
import PricingCard from "./PricingCard";

const PricingPlans = () => {
  const plans = [
    {
      name: "Basic",
      value: "basic",
      description: "A simple plan for individuals.",
      price: "$10",
      billingCycle: "month",
      features: [
        {
          title: "Free Setup",
          status: true,
        },
        {
          title: "Bandwidth Limit 10 GB",
          status: true,
        },
        {
          title: "20 User Connection",
          status: true,
        },
        {
          title: "Analytics Report",
          status: false,
        },
        {
          title: "Public API Access",
          status: false,
        },
        {
          title: "Plugins Intregation",
          status: false,
        },
        {
          title: "Custom Content Management",
          status: false,
        },
      ],
    },
    {
      name: "Standard",
      value: "standard",
      description: "For professionals who need more features.",
      price: "$25",
      billingCycle: "month",
      features: [
        {
          title: "Free Setup",
          status: true,
        },
        {
          title: "Bandwidth Limit 10 GB",
          status: true,
        },
        {
          title: "20 User Connection",
          status: true,
        },
        {
          title: "Analytics Report",
          status: true,
        },
        {
          title: "Public API Access",
          status: true,
        },
        {
          title: "Plugins Intregation",
          status: false,
        },
        {
          title: "Custom Content Management",
          status: false,
        },
      ],
    },
    {
      name: "Premium",
      value: "premium",
      description: "Custom solutions for large organizations.",
      price: "$50",
      billingCycle: "month",
      features: [
        {
          title: "Free Setup",
          status: true,
        },
        {
          title: "Bandwidth Limit 10 GB",
          status: true,
        },
        {
          title: "20 User Connection",
          status: true,
        },
        {
          title: "Analytics Report",
          status: true,
        },
        {
          title: "Public API Access",
          status: true,
        },
        {
          title: "Plugins Intregation",
          status: true,
        },
        {
          title: "Custom Content Management",
          status: true,
        },
      ],
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <div className="flex flex-wrap justify-start gap-10">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
