import React, { useState } from 'react';
import fmsServices from '../../../../../assets/fmsServices.jpg';

const FMS_Services = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={fmsServices}
          alt="FMS Services"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">AMC/FMS SERVICES</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          We provide dependable and all-encompassing Annual Maintenance Contracts (AMC) and Facility Management Services (FMS) to ensure your systems and infrastructure operate seamlessly and remain in optimal condition year-round.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Proactive maintenance")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Proactive maintenance</span>
              <span>{openSection === "Proactive maintenance" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Proactive maintenance" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our AMC/FMS services focus on proactive maintenance to identify and address potential issues before they escalate. This includes routine inspections, performance optimization, and timely system upgrades, ensuring your infrastructure operates at peak efficiency and remains fully functional.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Comprehensive support")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Comprehensive support</span>
              <span>{openSection === "Comprehensive support" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Comprehensive support" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our AMC/FMS services provide comprehensive support to swiftly address any technical issues that may arise. This includes both on-site and remote assistance, prompt troubleshooting, and efficient repair services, all designed to minimize downtime and ensure seamless business continuity.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Monitoring and reporting")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Monitoring and reporting</span>
              <span>{openSection === "Monitoring and reporting" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Monitoring and reporting" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our AMC/FMS services include continuous monitoring and detailed reporting to track system performance and identify emerging trends or potential issues. This proactive approach enables timely interventions and optimization, ensuring your systems remain reliable, efficient, and fully optimized over the long term.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMS_Services;
