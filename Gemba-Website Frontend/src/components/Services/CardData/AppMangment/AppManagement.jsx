import React from "react";
import AppMang from "../../../../assets/AppMang.jpeg";
import SAPbasis from "../../../../assets/SAPbasis.png";
import cardfooter from "../../../../assets/cardfooter.jpg";
import cardheader from "../../../../assets/cardheader.jpg";
import TechnicalSupport from "./TechnicalSupport";
import FunctionalSupport from "./FunctionalSupport";
import app_items from "./AppMangData";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const AppManagement = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-2 md:p-6 lg:p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20 text-center">
            Application Management Services
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
          <img
            src={AppMang}
            alt="Below Header"
            className="w-full h-60 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Optimized Management, Guaranteed Results
          </p>
          <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto text-justify tracking-tight md:tracking-normal ">
            For over a decade, Gemba InfoTech has empowered businesses by
            simplifying IT processes and reducing costs. We work with
            organizations of all sizes, crafting tailored solutions that
            seamlessly integrate with existing infrastructure while boosting
            operational efficiency. Beyond IT management, we provide strategic
            insights and innovative methods to streamline business processes and
            enhance decision-making. Our expertise ensures you stay competitive
            in a rapidly evolving market. With Gemba InfoTech, you gain more
            than just technical support—you gain a strategic partner committed
            to your success.
          </p>
        </div>
      </div>

      <TechnicalSupport />
      <FunctionalSupport />

      <div className="flex flex-col sm:flex-col w-full px-4 md:px-6 lg:px-8 my-2 sm:my-4 md:my-6 lg:my-8 md:flex-row justify-between">
        <div className="w-full lg:w-1/2 text-start">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            SAP Basis Administration Services
          </div>
          <div className="text-gray-600 my-2 text-base">
            We deploy highly skilled, problem-solving consultants to ensure the
            most effective and optimized use of your SAP landscape.
          </div>

          <div className="w-full ">
            <ol className="pt-2 lg:pt-2 mx-5 sm:mx-6 md:mx-8 lg:mx-10 list-decimal text-gray-600">
              {app_items.map((item) => (
                <li key={item.id} className="p-1 rounded-lg">
                  <div className="text-base font-custom">{item.name}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-4">
    <img
      src={SAPbasis}
      alt="SAP Basis Services"
      className="w-full h-auto sm:max-h-[65vh] md:max-h-[70vh] lg:max-h-[80vh] md:pt-16 object-contain"
    />
  </div>
      </div>
      
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] ">
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
  );
};

export default AppManagement;
