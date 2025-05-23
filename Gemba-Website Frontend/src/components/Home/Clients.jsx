import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Clients = () => {
  // Create a ref for the slider
  const sliderRef = useRef("");

  const settings = {
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="px-4 sm:px-6 py-10">
      <div className="bg-gray-100 rounded-xl w-full justify-center items-center text-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold p-8 text-gray-700 text-center">
          Hear from our happy and satisfied clients
        </h1>

        {/* Connect the slider ref */}
        <Slider
          ref={sliderRef}
          {...settings}
          className="mx-12 sm:gap-2 md:gap-4 "
        >
          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-4xl">
            <p className="text-gray-600 flex items-start">
              <span>
                "Gemba InfoTech went above and beyond to understand our
                requirements and delivered SAP Solutions exceeding our
                expectations. Most importantly, they were always responsive to
                us and were relentless in seeing the job being completed to our
                satisfaction. Good job!"
              </span>
            </p>

            <div className="mt-6">
              <p className="text-xl font-bold text-gray-800">MOHD KAISHULLA</p>
              <p className="text-gray-600">
                Chief Information Officer (CIO) IT
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-4xl">
            <p className="text-gray-600 flex items-start">
              <span>
                "Gemba InfoTech went above and beyond to understand our
                requirements and delivered SAP Solutions exceeding our
                expectations. Most importantly, they were always responsive to
                us and were relentless in seeing the job being completed to our
                satisfaction. Good job!"
              </span>
            </p>

            <div className="mt-6">
              <p className="text-xl font-bold text-gray-800">MOHD KAISHULLA</p>
              <p className="text-gray-600">
                Chief Information Officer (CIO) IT
              </p>
            </div>
          </div>
        </Slider>

        {/* Arrow Buttons */}
        <div className="flex space-x-2 py-4 justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={() => sliderRef.current.slickPrev()} // Move to previous slide
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-900 hover:bg-gray-500 hover:text-white focus:outline-none"
          >
            <FaArrowLeft />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => sliderRef.current.slickNext()} // Move to next slide
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-900 hover:bg-gray-500 hover:text-white focus:outline-none"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
