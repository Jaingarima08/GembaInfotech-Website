import React, { useState } from 'react';
import surveillance from '../../../../../assets/surveillance.jpeg'; // Ensure this path is correct

const Surveillance = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8 bg-gray-100">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={surveillance}
          alt="Surveillance"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">SURVEILLANCE</h2>
        <p className="text-gray-600">
          Our Surveillance Solutions are designed to enhance the security and monitoring of your premises. Featuring high-definition cameras, advanced video analytics, and remote monitoring capabilities, our solutions provide real-time visibility and actionable insights, ensuring comprehensive protection and optimized operational oversight.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Enhanced security")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Enhanced security</span>
              <span>{openSection === "Enhanced security" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Enhanced security" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                Our Surveillance Solutions deliver robust security by continuously monitoring and recording activities, deterring criminal behavior, and enabling rapid response to security incidents. Equipped with high-quality cameras, sensors, and alarms, our solutions ensure comprehensive coverage and protection for your premises.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Real-time monitoring")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Real-time monitoring</span>
              <span>{openSection === "Real-time monitoring" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Real-time monitoring" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                Surveillance solutions provide real-time monitoring, empowering you to remotely oversee your premises with ease. This enhanced flexibility and visibility allow for rapid response to security incidents, streamlined operations management, and data-driven decision-making. By staying connected and informed, you can ensure a proactive approach to security and operational efficiency.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Video analytics")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Video analytics</span>
              <span>{openSection === "Video analytics" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Video analytics" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50">
                Surveillance solutions also feature advanced video analytics, including facial recognition, object tracking, and motion detection. These capabilities deliver valuable insights into your operations, helping you spot trends, identify anomalies, and enhance business processes for greater efficiency and security.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveillance;
