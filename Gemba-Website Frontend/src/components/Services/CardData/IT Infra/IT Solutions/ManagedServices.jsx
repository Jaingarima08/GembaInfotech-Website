import React, { useState } from 'react';
import manageServices from '../../../../../assets/manageServices'; // Make sure this path is correct

const ManagedServices = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={manageServices}
          alt="Manage Services"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">MANAGED SERVICES</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          Our team of experts is dedicated to ensuring your network infrastructure operates seamlessly, minimizing downtime and optimizing productivity. With our managed services, you can focus on what matters most—growing your business—while we handle the complexities of maintaining and securing your network.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Comprehensive Network Solutions")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Comprehensive Network Solutions</span>
              <span>{openSection === "Comprehensive Network Solutions" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Comprehensive Network Solutions" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                With our managed services, you gain access to a comprehensive range of network solutions, including Wi-Fi, firewall, and router management—all from a single trusted provider.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Expert Team Support")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Expert Team Support</span>
              <span>{openSection === "Expert Team Support" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Expert Team Support" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our managed services are supported by a team of experts committed to keeping your network infrastructure running smoothly. We proactively monitor your network, quickly identify potential issues, and resolve them swiftly to minimize downtime and ensure uninterrupted performance.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Focus on Core Business")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Focus on Core Business</span>
              <span>{openSection === "Focus on Core Business" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Focus on Core Business" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                By outsourcing your network management to a trusted provider like us, you can concentrate on your core business activities. This allows you to boost productivity, streamline operations, and drive business growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagedServices;
