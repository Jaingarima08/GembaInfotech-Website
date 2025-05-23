import React from 'react';
import { FaCode, FaChartBar, FaServer, FaSyncAlt, FaCogs } from 'react-icons/fa';
import { RiAuctionFill } from "react-icons/ri";
import { TbUserDollar } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";

const solutions = [
  {
    icon: <FaCode size={40} className="text-[#EA5256]" />,
    title: "Application Development",
    description: "We have established a structured onsite-offshore methodology for developments including...",
    link: "/application-development"
  },
  {
    icon: <FaServer size={40} className="text-[#EA5256]" />,
    title: "Migration and Upgrades",
    description: "Keeping SAP Solutions updated with changes and developments is key for sustained growth. Call us...",
    link: "/migration"
  },
  {
    icon: <FaSyncAlt size={40} className="text-[#EA5256]" />,
    title: "Implementation and Transformations",
    description: "SAP brings lots of capabilities and possibilities to transform businesses dramatically. You need the right...",
    link: "/implimentation"
  },
  {
    icon: <FaCogs size={40} className="text-[#EA5256]" />,
    title: "Application Management Services",
    description: "Use SAP optimally by engaging us for development, integration, testing, support, and training...",
    link: "/appmang"
  },
  {
    icon: <FaChartBar size={40} className="text-[#EA5256]" />,
    title: "SAP Analytics",
    description: "Analytics solutions are a core part of SAP Business Technology, allowing users to provide real-time...",
    link: "/SAP"
  },
  {
    icon: <RiAuctionFill size={40} className="text-[#EA5256]" />,
    title: "Reverse Auction Procurement Software",
    description: "Procurement software designed to cater specifically to your needs...",
    link: "/ReverseAuction"
  },
  {
    icon: <TbUserDollar size={40} className="text-[#EA5256]" />,
    title: "Vendor Portal",
    description: "Revolutionize the way you handle vendor relationships with the Gemba Vendor Portal...",
    link: "/vendor-portal"
  },
  {
    icon: <FaUsersGear size={40} className="text-[#EA5256]" />,
    title: "ERP",
    description: "Enhance your business efficiency with cutting-edge ERP technology for seamless operations and growth...",
    link: "/ERP"
  }
];

const SolutionCard = ({ icon, title, description, link }) => (
  <div className="bg-white p-6 mx-2 lg:mx-0 lg:mb-6 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-tl-2xl rounded-br-2xl">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <a href={link} className="text-blue-500 font-semibold flex items-center justify-center transition-colors duration-300 hover:text-blue-700">
      Know More<span className="ml-2">→</span>
    </a>
  </div>
);

const SolutionsGrid = () => {
  return (
    <div className="px-4 sm:px-6 pt-10">
      <h1 className="text-blue-500 font-bold text-base ">WHAT WE DO?</h1>
      <hr />
      <p className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl my-4">Transforming Ideas into Digital Realities</p>
      
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((service, index) => (
            <div key={index} className="transform translate-y-4">
              <SolutionCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsGrid;
