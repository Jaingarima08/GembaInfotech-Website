import React from 'react';
import Vendorimg from '../../../../assets/Vendor.jpeg';
import cardfooter from '../../../../assets/cardfooter.jpg';
import cardheader from "../../../../assets/cardheader.jpg";
import VendorData from './VendorData';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Vendor = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
            <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-2 sm:p-4 md:p-6 lg:p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20 text-center">
                       Vendor Portal
                    </div>
                </div>
            </header>

            <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
                    <img
                        src={Vendorimg}
                        alt="Below Header"
                        className="w-full h-60 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">One Portal for Seamless Supplier Management</p>
                    <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto text-justify tracking-tight md:tracking-normal ">
                    Vendor Portals, also called Supplier Portals, are online platforms that enable businesses to collaborate with their external suppliers. These portals streamline communication, making it easier to manage orders, track shipments, and handle invoices. Suppliers can update product information, confirm purchase orders, and submit invoices directly through the portal. This improves transparency and reduces manual effort by centralizing all supplier interactions in one place. As a result, businesses can enhance their procurement processes and build stronger supplier relationships. Vendor Portals also ensure better control over supply chain operations.
                    </p>
                </div>
            </div>

            <div className="w-full lg:mx-auto md:px-6 px-4 my-8 sm:text-start lg:text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Elevate Your Supplier Interactions with Gemba's Vendor Portal</div>
                <div className='text-gray-600 my-2'>A Pre-Built Suite of Vendor Management Solutions is a comprehensive, ready-to-use set of tools designed to streamline and enhance the management of supplier relationships and procurement processes. Here's a detailed description:
</div>
            </div>
            <VendorData/>

            <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh]">
        <img
          src={cardfooter}
          alt="Footer Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute px-6 md:px-12 py-24 md:py-28 bg-black bg-opacity-25 h-full w-full">
          <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl pb-2">
            Want more?
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Speak to our experts
            </h3>

            <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
              <NavLink to="/contact"> Contact Us </NavLink>
              <FaArrowRightLong className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
            
            </div>
  )
}

export default Vendor