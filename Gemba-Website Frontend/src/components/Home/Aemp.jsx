import React from "react";
import backgroundImage from '../../assets/emp.jpg'

const Aemp = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 py-8 sm:py-12 bg-gray-100">
        {/* Left Image Section */}
        <div
          className="bg-cover bg-center h-[30vh] sm:h-[40vh] lg:h-[48vh] w-full lg:w-[50%] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
          style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-[50%] bg-white p-4 sm:p-6 justify-between rounded-b-3xl lg:rounded-r-3xl lg:rounded-b-none  sm:h-[50vh] lg:h-[48vh] flex flex-col">
          <h1 className="text-blue-500 font-bold text-base ">WHO WE ARE?</h1>
          <hr className="mb-2 sm:mb-2" />
          <p className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl">
            Driven by Innovation, Defined by Expertise
          </p>
          <p className="mt-2 text-gray-600 ">
            Gemba is where innovation thrives. Our team of industry-leading experts collaborates to create groundbreaking solutions for purpose-driven clients, accelerating their journey with cutting-edge technology. We combine deep expertise and a commitment to efficiency to drive smarter, faster, and leaner digital transformations.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aemp;
