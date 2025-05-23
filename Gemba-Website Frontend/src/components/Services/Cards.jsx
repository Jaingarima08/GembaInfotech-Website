import React from "react";
import App from "../../assets/App.jpeg";
import migration from "../../assets/migration.jpg";
import appmng from "../../assets/appmng.jpeg";
import SAP from "../../assets/SAP.jfif";
import Reverse from "../../assets/Reverse.jpeg";
import imp from "../../assets/imp&trns.jpeg";
import vendor from "../../assets/vendor.webp";
import ERP from "../../assets/ERP.jpg";
import It_Infra from "../../assets/It_Infra.jpg";

const services = [
  {
    id: "01",
    title: "Application Development",
    image: App,
    description: "Tailored software solutions crafted to meet specific business needs, ensuring efficiency and scalability..",
      link: "/application-development",
  },
  {
    id: "02",
    title: "Migration and Upgrades",
    image: migration,
    description: "Smooth and efficient migration of legacy systems along with regular upgrades..",
      link: "/migration",
  },
  {
    id: "03",
    title: "Implementation and Transformations",
    image: imp,
    description: "End-to-end implementation services that ensure smooth adoption of new systems and technologies..",
      link: "/implimentation",
  },
  {
    id: "04",
    title: "Application Management Services",
    image: appmng,
    description: "Proactive application support and maintenance that maximize uptime and performance ..",
      link: "/appmang",
  },
  {
    id: "05",
    title: "SAP Analytics",
    image: SAP,
    description: "We provide expert SAP services for smooth implementation, integration, and customization for enhanced efficiency..",
      link: "/SAP",
  },
  {
    id: "06",
    title: "Reverse Auction Procurement Software",
    image: Reverse,
    description: "Advanced procurement tools that drive cost savings through reverse auctioning..",
      link: "/ReverseAuction",
  },
  {
    id: "07",
    title: "Vendor Portal",
    image: vendor,
    description: "Secure and intuitive portals that facilitate seamless collaboration and communication between vendors and businesses..",
      link: "/vendor-portal",
  },
  {
    id: "08",
    title: "ERP",
    image: ERP,
    description: "Comprehensive ERP solutions that streamline operations, improve decision-making, and enhance overall business performance..",
      link: "/ERP",
  },
  {
    id: "09",
    title: "IT Infra",
    image: It_Infra,
    description: "IT infrastructure is a collection of physical and virtual components that support the storage, processing, and analysis of data in an organization..",
      link: "/Infra",
  },
];

const ServiceCard = () => {
  return (
    <div className="bg-gray-200 py-10 px-4 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="relative w-full h-[250px] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-xl bg-white"
        >
          {/* Service Image */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
  
          {/* Overlay with Service ID and Title */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 md:p-6 cursor-pointer shadow-xl">
            <p className="text-white text-lg md:text-2xl font-bold">
              {service.id}
            </p>
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              {service.title}
            </h3>
          </div>
  
          {/* Hidden Overlay with More Info */}
          <div
            className="absolute inset-0 bg-slate-300 flex flex-col justify-start p-4 md:p-5 cursor-pointer hover:animate-slideUp opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <p className="text-[#EA5256] text-lg md:text-2xl font-bold mb-2">
              {service.id}
            </p>
            <h3 className="text-gray-700 text-xl md:text-2xl font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-gray-500 mb-4">
              {service.description}
            </p>
            <a
              href={service.link}
              className="text-blue-600 font-semibold flex items-center justify-center transition-colors duration-300 hover:text-blue-800"
            >
              Know More<span className="ml-2">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default ServiceCard;
