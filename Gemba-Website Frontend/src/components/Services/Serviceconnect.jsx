import React from 'react';
import servicel from '../../assets/servicel.jpeg';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Serviceconnect = () => {
  return (
    <div
    className="h-[50vh] sm:h-[60vh] lg:h-[65vh] top-0 relative"
    style={{
      backgroundImage: `url(${servicel})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="px-4 sm:px-6 md:px-12 pt-12 md:pt-20 bg-black bg-opacity-25 h-full">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white ">Connect with Our <br />
    Experts
    </p>

    <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
            <NavLink to="/contact">Get Started</NavLink>
            <FaArrowRightLong className="text-lg md:text-xl" />
          </button>
  </div>
  <p className='mt-6 text-white sm:text-base lg:text-lg'>Leave the Worries to Us. Focus on Your Business. <br /> We'll Handle the Rest.</p>
  </div>
  </div>
  )
}

export default Serviceconnect