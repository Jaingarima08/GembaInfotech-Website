import {
  FaFileMedical,
  FaShieldAlt,
  FaChartBar,
  FaUserMd,
  FaCheckCircle,
  FaLaptopMedical,
} from "react-icons/fa";

const offerings = [
  {
    icon: <FaFileMedical className="text-red-500 text-3xl mb-3" />,
    title: "Comprehensive Medicare Billing",
    description:
      "We manage the full lifecycle of Insurance claims — from eligibility verification to final reimbursement. Our team ensures clean claim submission, timely follow-ups, Rectifying Denials and error-free processing.",
  },
  {
    icon: <FaCheckCircle className="text-red-500 text-3xl mb-3" />,
    title: "Reduced Claim Denials",
    description:
      "With our expert handling and advanced validation systems, we significantly reduce errors, denials, and rejections to ensure you get paid faster.",
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-3xl mb-3" />,
    title: "Regulatory Compliance",
    description:
      "Stay fully compliant with CMS guidelines and updates. Our billing practices are built around accuracy, security, and up-to-date Medicare policies.",
  },
  {
    icon: <FaChartBar className="text-red-500 text-3xl mb-3" />,
    title: "Transparent Reporting & Analytics",
    description:
      "Gain full visibility into your revenue cycle. Our real-time dashboards provide performance metrics, aging reports, and reimbursement summaries.",
  },
  {
    icon: <FaUserMd className="text-red-500 text-3xl mb-3" />,
    title: "Dedicated Billing Experts",
    description:
      "Get access to a team of Certified billing professionals who act as an extension of your staff — always available and always accountable.",
  },
  {
    icon: <FaLaptopMedical className="text-red-500 text-3xl mb-3" />,
    title: "Virtual Assistance",
    description:
      "Our virtual assistance services offer real-time support for patients and providers, helping with appointment scheduling, billing inquiries, and follow-ups—improving operational efficiency and patient satisfaction.",
  },
];

const MedicareCards = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-start">
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base text-justify tracking-tight md:tracking-normal ">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MedicareCards;
