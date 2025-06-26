import React, { useState } from 'react';
import backup from '../../../../../assets/backup.png';

const BackupSolutions = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">BACKUP & ARCHIVING SOLUTIONS</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          For secure and reliable backup and archiving solutions to safeguard your valuable data, our services have you covered. We offer robust backup and recovery options, along with secure archiving solutions designed for long-term data retention and compliance, ensuring your information is always protected and easily accessible when needed.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          {/* Data Protection */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Data protection")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Data protection</span>
              <span>{openSection === "Data protection" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Data protection" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our Backup & Archiving Solutions are specifically designed to safeguard your critical data from loss due to hardware failures, human error, cyberattacks, or natural disasters. With our solutions, you can rely on secure, high-performance backups that ensure your data can be quickly and easily restored whenever needed, providing peace of mind and minimizing potential disruptions.
              </div>
            </div>
          </div>

          {/* Long-term Retention */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Long-term retention")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Long-term retention</span>
              <span>{openSection === "Long-term retention" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Long-term retention" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Archiving Solutions provide long-term retention of data for compliance, legal, or historical purposes. This ensures that your data is stored securely and remains accessible for as long as necessary.
              </div>
            </div>
          </div>

          {/* Scalability */}
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Scalability")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Scalability</span>
              <span>{openSection === "Scalability" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Scalability" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Our Backup & Archiving Solutions are fully scalable to adapt to the evolving needs of your business. Whether you're managing a growing volume of data or need to reduce storage requirements, our flexible solutions can be seamlessly scaled up or down. This enables you to optimize costs while maintaining the highest levels of data availability, security, and integrity.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={backup}
          alt="Backup and Archiving"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default BackupSolutions;
