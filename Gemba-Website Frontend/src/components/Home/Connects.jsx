import React from "react";
import homeimg from "../../assets/homeimg.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Connects = () => {
  return (
    <div
      className="h-[50vh] sm:h-[60vh] lg:h-[65vh] "
      style={{
        backgroundImage: `url(${homeimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.7",
      }}
    >
      <div className="px-4 sm:px-6 md:px-12 pt-16 md:py-28 bg-black bg-opacity-25 h-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Responsive heading text */}
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Your Opportunity is our
            <br />
            Mission - Let's Connect
          </p>

          {/* Responsive button */}
          <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
            <NavLink to="/contact">Get Started</NavLink>
            <FaArrowRightLong className="text-lg md:text-xl" />
          </button>
        </div>

        {/* Responsive subtitle text */}
        <p className="mt-6 text-white sm:text-base lg:text-lg">
          Experience the Power of Instant Innovation
        </p>
      </div>
    </div>
  );
};

export default Connects;
