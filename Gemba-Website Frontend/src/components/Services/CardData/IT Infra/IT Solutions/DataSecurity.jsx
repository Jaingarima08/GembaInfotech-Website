import React, { useState } from 'react';
import dataSecurity from '../../../../../assets/dataSecurity.png';

const DataSecurity = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">DATA SECURITY</h2>
        <p className="text-gray-600">
          We provide comprehensive computing and server storage solutions designed to streamline data management and maximize performance.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("scalability")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Scalability</span>
              <span>{openSection === "scalability" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "scalability" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                Our computing and server storage solutions are designed with scalability in mind, allowing your infrastructure to grow alongside your business. This ensures you always have the capacity to meet evolving demands with ease.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("reliability")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Reliability</span>
              <span>{openSection === "reliability" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "reliability" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                Our solutions are designed for maximum reliability, featuring redundant systems that ensure minimal downtime and safeguard against data loss.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("security")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Security</span>
              <span>{openSection === "security" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "security" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                We recognize the critical importance of data security and provide robust features to defend against unauthorized access, hacking, and evolving cyber threats.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={dataSecurity}
          alt="Data Security"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default DataSecurity;
