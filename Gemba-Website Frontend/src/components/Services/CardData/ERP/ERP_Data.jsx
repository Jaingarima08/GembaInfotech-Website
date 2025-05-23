import React from 'react';

const ERP_Data = [
    {
      title: "Streamlined Operations",
      description: "Gemba InfoTech's ERP solutions automate workflows, integrate systems, and improve overall efficiency, allowing businesses to focus on growth."
    },
    {
      title: "Data-Driven Decision-Making",
      description: "With Gemba's ERP solutions, companies gain real-time access to business-critical data, enabling quicker, data-backed decisions."
    },
    {
      title: "Cost Efficiency",
      description: "By integrating various business functions into one system, Gemba InfoTech's ERP reduces manual errors, and optimizes resource use to lower operational costs."
    },
    {
      title: "Enhanced Collaboration",
      description: "Gemba ERP connects departments, enabling seamless communication and collaboration across the business, leading to better productivity and teamwork."
    },
    {
      title: "Customizable and Scalable Solutions",
      description: "Gemba InfoTech provides tailored ERP systems that can grow with your business, ensuring scalability to meet future needs."
    },
    {
      title: "Compliance and Security",
      description: "Gemba's ERP ensures adherence to industry regulations while providing robust security features to safeguard sensitive business data and reduce compliance risks."
    }
  ];

const Card = ({ title, description }) => (
  <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
  <h2 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">{title}</h2>
    <p className="my-2 sm:my-4 text-gray-600 text-base">{description}</p>
  </div>
);

const ERPData = () => (
  <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
    {ERP_Data.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
  </div>
);

export default ERPData;