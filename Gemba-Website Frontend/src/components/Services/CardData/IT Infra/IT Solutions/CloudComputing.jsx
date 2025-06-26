import React, { useState } from 'react';
import cloudcomputing from '../../../../../assets/cloudcomputing.jpeg';

const CloudComputing = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">CLOUD COMPUTING</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          Our Cloud Computing Service has transformed how businesses manage their IT infrastructure, providing seamless access to powerful computing resources without the need for on-site hardware. With Infrastructure as a Service (IaaS), businesses can effortlessly scale resources up or down based on demand, ensuring cost-efficiency by paying only for what they use. This flexibility enables organizations to stay agile and optimize their operations while minimizing overhead.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          {/* Remote Access */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Remote Access")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Remote Access</span>
              <span>{openSection === "Remote Access" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Remote Access" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Cloud computing allows businesses to access powerful computing resources remotely, without the need for physical hardware. This provides businesses with greater flexibility and scalability in managing their IT infrastructure.
              </div>
            </div>
          </div>

          {/* Infrastructure as a Service */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Infrastructure as a Service")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Infrastructure as a Service</span>
              <span>{openSection === "Infrastructure as a Service" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Infrastructure as a Service" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Infrastructure as a Service (IaaS) offers businesses on-demand access to virtualized resources, with a pay-as-you-go model. This flexibility allows businesses to scale their resources up or down based on need, ensuring they only pay for what they use.
              </div>
            </div>
          </div>

          {/* IT Infrastructure Management */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("IT Infrastructure Management")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>IT Infrastructure Management</span>
              <span>{openSection === "IT Infrastructure Management" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "IT Infrastructure Management" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Cloud computing has revolutionized the way businesses manage their IT infrastructure, providing greater flexibility, scalability, and cost-effectiveness. It has also enabled businesses to focus on their core activities rather than IT infrastructure management.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={cloudcomputing}
          alt="Cloud Computing"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default CloudComputing;
