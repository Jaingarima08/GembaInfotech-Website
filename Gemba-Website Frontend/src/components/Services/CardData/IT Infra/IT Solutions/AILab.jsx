import React, { useState } from 'react';
import AILabimg from '../../../../../assets/AILab.webp';

const AILab = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col md:flex-row items-start p-6 md:p-12 space-y-6 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">SETTING UP ARTIFICIAL INTELLIGENCE LAB</h2>
        <p className="text-gray-600 text-justify tracking-tight md:tracking-normal ">
          We offer cutting-edge Machine Learning and Artificial Intelligence solutions designed to unlock the full potential of your data and automation processes. Our services include advanced predictive analytics, natural language processing, and computer vision, all tailored to enhance operational efficiency, drive innovation, and deliver measurable business value.
        </p>

        {/* Accordion Section */}
        <div className="space-y-2">
          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Predictive analytics")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Predictive analytics</span>
              <span>{openSection === "Predictive analytics" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Predictive analytics" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Deep Learning, Machine Learning, and Artificial Intelligence solutions can process vast amounts of data to uncover patterns and trends, empowering predictive analytics that support data-driven, informed decision-making for your business.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Automation")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Automation</span>
              <span>{openSection === "Automation" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Automation" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                These solutions can automate repetitive tasks and streamline complex processes, minimizing human error and boosting operational efficiency. Additionally, they enhance customer experiences through advanced natural language processing and personalized recommendations, driving greater engagement and satisfaction.
              </div>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <button
              onClick={() => toggleSection("Computer vision")}
              className="w-full text-left px-4 py-2 bg-gray-200 text-gray-800 flex justify-between items-center"
            >
              <span>Computer vision</span>
              <span>{openSection === "Computer vision" ? "-" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openSection === "Computer vision" ? "max-h-[500px] p-4" : "max-h-0 py-0 px-4"
              }`}
            >
              <div className="text-gray-600 bg-gray-50 text-justify tracking-tight md:tracking-normal ">
                Deep Learning, Machine Learning, and Artificial Intelligence solutions can analyze images and video, providing insights and enabling automation in areas such as object detection, facial recognition, and autonomous vehicles. This can increase safety, productivity, and convenience in a variety of industries.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center items-start">
        <img
          src={AILabimg}
          alt="Compute and Storage"
          className="w-84 h-auto md:h-72 object-cover"
        />
      </div>
    </div>
  );
};

export default AILab;
