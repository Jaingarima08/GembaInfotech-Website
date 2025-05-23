/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SLFimg from "../../assets/SFLimg.PNG"

const Model = () => {
  return (
    <div className="pt-10 px-4 sm:px-6">
      <h1 className="text-blue-500 font-bold text-base text-start">
        OUR METHODOLOGY - SMARTER, FASTER AND LEARNER
      </h1>
      <hr />
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 my-4 text-start">
        Our proven approach for your long-term, sustainable results
      </p>

      <div className="flex flex-col sm:flex-wrap md:lg:relative bg-gray-100 p-2 lg:p-8 rounded-xl min-h-screen w-full justify-center items-center text-center">
  {/* Smarter Section */}
  <div className="flex-1 p-4 md:w-full lg:w-1/3 md:lg:mb-96 md:lg:left-12 md:lg:absolute text-start">
    <h1 className="text-xl lg:text-2xl font-bold text-blue-500 ">Smarter</h1>
    <p className="text-gray-600">The company aims to empower everyone across the value chain to
              make better decisions—from delivery truck drivers and forklift
              operators to foremen, sales executives, and the CEO—not just
              improving decision-making for managers and executives, but for
              every individual involved.</p>
  </div>

  {/* Image Section */}
  <div className="flex-1 p-4 w-full sm:w-1/2 md:lg:w-1/3">
    <img src={SLFimg} alt="Learning Image" className="w-full object-cover rounded-lg" />
  </div>

  {/* Faster Section */}
  <div className="flex-1 p-4 md:w-full lg:w-1/3 md:lg:mt-80 md:lg:left-12 md:lg:absolute text-start">
    <h1 className="text-xl lg:text-2xl font-bold text-green-500 ">Faster</h1>
    <p className="text-gray-600"> It reflects the organization's agility, speed, and responsiveness.
              By quickly addressing the needs of all stakeholders, the company
              gains a competitive edge and enhances its ability to adapt to
              changing business conditions.</p>
  </div>

  {/* The Learner Section */}
  <div className="flex-1 p-4 md:w-full lg:w-1/3 md:lg:mt-80 md:lg:absolute md:lg:right-12 text-start">
    <h1 className="text-xl lg:text-2xl font-bold text-[#EA5256] ">The Learner</h1>
    <p className="text-gray-600"> To succeed, companies must first focus on becoming smarter.
              Enhanced decision-making reduces delays, increases agility, and
              boosts service levels across the organization—paving the way for
              greater speed. This agility also uncovers inefficiencies and
              unnecessary costs, allowing the company to become leaner and more
              streamlined.</p>
  </div>
</div>

     </div>
  );
};

export default Model;
