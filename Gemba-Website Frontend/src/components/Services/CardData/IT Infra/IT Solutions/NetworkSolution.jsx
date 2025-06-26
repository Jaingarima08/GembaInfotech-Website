import React, { useState } from 'react';
import networkimg from "../../../../../assets/network.jpg"; // Ensure this path is correct

const NetworkSolution = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={networkimg}
          alt="Network Solutions"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">NETWORK SOLUTIONS</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          Our service delivers robust network solutions designed to protect your valuable data and assets, offering strong defense against cyber threats and ensuring comprehensive security.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Network Infrastructure Design and Implementation")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Network Infrastructure Design and Implementation</span>
              <span>{openSection === "Network Infrastructure Design and Implementation" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Network Infrastructure Design and Implementation" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Another key objective is to design and implement customized network infrastructure tailored to each business's unique requirements. This process includes analyzing network needs, recommending suitable hardware and software solutions, and deploying and configuring network equipment for optimal performance and security.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Network Monitoring and Management")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Network Monitoring and Management</span>
              <span>{openSection === "Network Monitoring and Management" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Network Monitoring and Management" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our team is dedicated to delivering proactive monitoring and management services to ensure our clients' networks operate at peak performance. This includes real-time tracking of network traffic and performance metrics, as well as swift issue resolution to minimize downtime and maintain seamless connectivity.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Scalability and Future-Proofing")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Scalability and Future-Proofing</span>
              <span>{openSection === "Scalability and Future-Proofing" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Scalability and Future-Proofing" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                We design and implement network solutions that are scalable and future-ready, ensuring they can support growth and adapt to technological advancements. By considering factors like network capacity, flexibility, and emerging technologies, we build infrastructures that are resilient and ready for long-term success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSolution;
