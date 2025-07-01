import React from "react";
// import medicare from "../../assets/doctors.webp";
import videoFile from "../../assets/video/medical_video.gif";
import MedicareCards from "./medicareCards";
import MedicareBenefits from "./medicareBenefits";
import ClientSuccessMetrics from "./ClientSuccessMetrics";

const Medicare = () => {
  return (
    <div className="pt-24 lg:pt-28 font-custom">
      <div className="relative w-full h-[400px]">
        <img
          src={videoFile}
          alt="medicare"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center px-4 md:px-12 text-left">
          <div className="text-white max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Empowering Healthcare Providers with Reliable, Accurate, and
              Scalable Billing Solutions
            </h2>
            <p className="text-sm md:text-base text-justify tracking-normal">
              At Gemba, we understand the unique challenges faced by healthcare
              providers in managing RCM billing Services. Our specialized
              Medical Billing Services are designed to ensure maximum
              reimbursements, regulatory compliance, and minimal administrative
              burden — so you can focus on delivering exceptional patient care.
            </p>
          </div>
        </div>
      </div>

      <ClientSuccessMetrics />
      <MedicareCards />
      <MedicareBenefits />
    </div>
  );
};

export default Medicare;
