import React from "react";
import { MdOutlineHealthAndSafety, MdOutlineInventory } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaUsersGear, FaGears } from "react-icons/fa6";
import { FaParking, FaHandshake } from "react-icons/fa";

const products = [
  {
    icon: <FaParking size={40} className="text-[#EA5256]" />,
    title: "Parking Application",
    description:
      "Efficient parking solutions for seamless access, convenience, and security in every space.",
    link: "http://know2parking.com/",
    cta: "GET PARKING",
  },

  {
    icon: <FaHandshake size={40} className="text-[#EA5256]" />,
    title: "Channel Partner",
    description:
      "A channel partner promotes products or services to expand reach and drive growth.",
    link: "https://www.omniassist.co.in/",
    cta: "VISIT PARTNER"
  },

  {
    icon: <MdOutlineHealthAndSafety size={40} className="text-[#EA5256]" />,
    title: "Healthcare Management",
    description:
      "Enhancing patient care with advanced, integrated healthcare technology solutions.",
    link: "https://www.mobilityidealhealth.com/",
    cta: "VISIT HEALTHCARE",
  },

  {
    icon: <GrUserManager size={40} className="text-[#EA5256]" />,
    title: "HRMS Management",
    description:
      "Our HRMS management solutions streamline human resources processes with cutting-edge technology.",
  },
  {
    icon: <MdOutlineInventory size={40} className="text-[#EA5256]" />,
    title: "Inventory Management",
    description:
      "Our inventory management solutions ensure seamless operations through advanced automation.",
  },
  {
    icon: <LiaFileInvoiceDollarSolid size={40} className="text-[#EA5256]" />,
    title: "Assets Management",
    description:
      "Our asset management solutions ensure comprehensive tracking and optimal efficiency of your assets.",
  },
  {
    icon: <FaUsersGear size={40} className="text-[#EA5256]" />,
    title: "CRM",
    description:
      "Our CRM solutions boost growth by enhancing customer relationships through personalized, data-driven insights.",
  },
  {
    icon: <FaGears size={40} className="text-[#EA5256]" />,
    title: "ERP",
    description:
      "Our ERP solutions integrate and streamline business processes to enhance efficiency and drive informed decision-making.",
  },
];

const ProductCard = ({ icon, title, description, link, cta }) => (
  <div className="bg-white p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-tl-2xl rounded-br-2xl">
    {link ? (
      // If a link is provided, wrap the content in an anchor tag
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="mb-4 items-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4 tracking-normal ">{description}</p>
        <p className="font-bold text-xl text-[#EA5256]">{cta}</p>
      </a>
    ) : (
      // If no link, render the content normally
      <div>
        <div className="mb-4 items-center">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 tracking-normal ">{description}</p>
      </div>
    )}
  </div>
);

const ProductGrid = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-slate-200 pb-10">
      <div className="bg-gray-100 w-full">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold px-4 sm:px-6 py-6 text-gray-700 text-start lg:text-center">
          Our Ever-Growing Products
        </h1>
        <p className="bg-gradient-to-b from-gray-100 to-slate-200 text-gray-600 px-4 sm:px-6 text-justify tracking-tight md:tracking-normal ">
          Our diverse range of solutions spans across various key business
          functions, including Enterprise Resource Planning (ERP), Customer
          Relationship Management (CRM), Inventory Management, Assets
          Management, HRMS, and Healthcare Management. Each tool is designed to
          seamlessly integrate into your operations, providing a unified
          platform that improves visibility, automates tasks, and reduces
          inefficiencies. By streamlining workflows and offering real-time
          insights, our solutions empower businesses to make informed decisions,
          optimize processes, and enhance overall productivity across all
          departments.
        </p>
      </div>

      <div className="bg-gray-200 py-6 px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center">
          {products.map((Product, index) => (
            <div
              key={index}
              className="w-full md:w-[250px] lg:w-[300px] lg:h-[300px] transform translate-y-4 animate-fadeInUp delay-[100ms]"
            >
              <ProductCard key={index} {...Product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
