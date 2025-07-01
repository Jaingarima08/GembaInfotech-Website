import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import {
  FaFileInvoiceDollar,
  FaUserShield,
  FaSearchPlus,
  FaRocket,
  FaChartLine,
  FaUsersCog,
  FaClipboardCheck,
  FaHandsHelping,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const tabs = [
  {
    label: "Benefits",
    content: [
      {
        icon: (
          <FaFileInvoiceDollar className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Accurate Insurance Claims Submission with End-to-End Management",
      },
      {
        icon: (
          <FaUserShield className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "HIPAA-Compliant, Secure Billing Systems for Protected Patient Data",
      },
      {
        icon: (
          <FaSearchPlus className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Fewer Denials and Rejections with Intelligent Claim Validation",
      },
      {
        icon: (
          <FaRocket className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Faster Reimbursements through Automated and Timely Processing",
      },
      {
        icon: (
          <FaChartLine className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Improved Revenue Cycle Performance with Real-Time Dashboards",
      },
      {
        icon: (
          <FaUsersCog className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Dedicated Insurance Billing Specialists for Personalized Support",
      },
      {
        icon: (
          <FaClipboardCheck className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Compliance with CMS Guidelines and Billing Regulations",
      },
      {
        icon: (
          <FaHandsHelping className="text-red-500 text-3xl mt-1 transition-transform duration-300 hover:scale-110 animate-pulse" />
        ),
        text: "Seamless Coordination with Healthcare Providers and Staff",
      },
    ],
  },
  
];

const MedicareBenefits = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 md:py-20 px-6 md:px-12 bg-gradient-to-b from-gray-100 to-blue-100">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8" data-aos="fade-up">
         Revenue Cycle Management and Medical Billing at Gemba
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300 ${
              activeTab === index
                ? "bg-red-500 text-white"
                : "bg-white text-red-500 border border-red-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tabs[activeTab].content.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {item.icon}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
   <div className="mt-12 text-center" data-aos="fade-up">
  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `font-semibold 
       text-sm sm:text-base md:text-lg  
       px-2 sm:px-6 md:px-8             
       py-2 sm:py-3                   
       rounded-full shadow-lg 
       transition-transform hover:scale-105 ${
         isActive
           ? "bg-blue-600 text-white"
           : "bg-blue-500 hover:bg-blue-600 text-white"
       }`
    }
  >
    📞 Contact Us for a Free Consultation
  </NavLink>
</div>

    </section>
  );
};

export default MedicareBenefits;
