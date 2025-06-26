import React from "react";

const FunctionalSupport = () => {
  const services = [
    {
      id: 1,
      title: "Configuration of SAP Modules",
      description:
        "Setup and configuration of SAP modules and sub-modules to fit business requirements and processes.",
    },
    {
      id: 2,
      title: "Geographical Business Rollouts",
      description:
        "Support for business unit rollouts across different geographical locations, ensuring smooth integration and compliance.",
    },
    {
      id: 3,
      title: "Cross-Module Process Changes",
      description:
        "Implement changes to business processes with cross-module impacts to enhance overall system efficiency.",
    },
    {
      id: 4,
      title: "Month-End and Year-End Activities",
      description:
        "Manage and support month-end and year-end closing activities to ensure accurate financial reporting and compliance.",
    },
    {
      id: 5,
      title: "User Training",
      description:
        "Provide training sessions for users to ensure effective utilization of SAP functionalities and modules.",
    },
    {
      id: 6,
      title: "SAP Upgrades and Migration Support",
      description:
        "Functional support for SAP upgrades and migration to S/4 HANA, including planning, execution, and optimization.",
    },
  ];

  return (
    <div>
      <div className="w-full lg:mx-auto px-4 md:px-6 my-8 sm:text-start lg:text-center max-w-[600px] ">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Functional Support Services
        </div>
        <div className="text-gray-600 my-2 text-justify tracking-tight md:tracking-normal ">
          Leveraging our deep SAP specialization and industry expertise, we
          offer robust post-implementation support to activate new
          functionalities and processes. Our approach combines process redesign
          and targeted user training to optimize the use of your SAP system,
          ensuring maximum efficiency and effectiveness.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">
                {service.title}
              </h3>
              <p className="mt-4 sm:mt-5 text-gray-600 text-base text-justify tracking-tight md:tracking-normal ">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionalSupport;
