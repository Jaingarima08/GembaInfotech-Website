import React from "react";
import SAPCloud from "../../../../assets/SAPCloud.jpg";
import SAPA from "../../../../assets/SAPA.png";
import SAP_items from "./SAP_Data";
import cardfooter from "../../../../assets/cardfooter.jpg";
import cardheader from "../../../../assets/cardheader.jpg";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const SAP = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20">
            SAP Analytics
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
          <img
            src={SAPCloud}
            alt="Below Header"
            className="w-full h-60 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">
            Real-Time Insights, Smarter Decisions
          </p>
          <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto text-justify tracking-tight md:tracking-normal ">
            SAP Business Technology Platform provides real-time insights using
            machine learning, AI, and business intelligence. It analyzes past
            and present data while simulating future scenarios for valuable
            business outcomes. The SAP Business Intelligence suite integrates
            and transforms data from multiple sources for visual analytics.
            Visual analytics eliminate guesswork and help monitor key business metrics. SAP Analytics and embedded machine learning accelerate
            digital transformation. Gemba InfoTech helps businesses automate
            processes and unlock growth by uncovering insights from all data
            types.
          </p>
        </div>
      </div>

      <div className="w-full lg:mx-auto md:px-6 px-4 my-8 sm:text-start lg:text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">SAP Business Intelligence and Analytics Solutions</div>
                <div className='text-gray-600 my-2'>Empowering businesses with real-time data insights and advanced analytics, SAP BI and Analytics Solutions drive informed decision-making. These solutions enable organizations to optimize processes, predict trends, and unlock growth through data-driven strategies.</div>
            </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
 
  <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
    <h2 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[60px] text-center items-center justify-center">SAP BW Offerings</h2>
    <p className="py-2 text-gray-600 text-base text-justify tracking-tight md:tracking-normal ">
      SAP BW provides a BI platform for data warehousing, analysis, and reporting.
      Supports management decision-making.
      Gemba InfoTech delivers comprehensive end-to-end SAP BW services.
    </p>
  </div>

  
  <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
    <h2 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[60px] text-center items-center justify-center">SAP HANA Offerings</h2>
    <p className="py-2 text-gray-600 text-base text-justify tracking-tight md:tracking-normal ">
      Gemba InfoTech specializes in In-Memory Computing and SAP HANA integration.
      Services include strategy, consulting, licensing, implementation, reporting, performance optimization.
    </p>
  </div>

 
  <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
    <h2 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[60px] text-center items-center justify-center">SAP Business Objects</h2>
    <p className="py-2 text-gray-600 text-base text-justify tracking-tight md:tracking-normal ">
      Expertise in strategy, implementation, and management of SAP Business Objects.
      Gemba InfoTech excels at integrating SAP Business Objects with SAP BW and SAP HANA.
    </p>
  </div>
</div>

<div className="flex flex-col sm:flex-col w-full px-4 md:px-6 lg:px-8 my-2 sm:my-4 md:my-6 lg:my-8 md:flex-row justify-between">
        <div className="w-full lg:w-1/2 text-start">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Analytics on The Cloud
          </div>
          <div className="text-gray-600 my-2 text-base">
          Enhance your enterprise's decision-making with SAP Analytics Cloud. Explore our comprehensive capabilities, including:
          </div>

          <div className="w-full ">
            <ol className="pt-2 lg:pt-2 mx-5 sm:mx-6 md:mx-8 lg:mx-10 list-decimal text-gray-600">
              {SAP_items.map((item) => (
                <li key={item.id} className="p-1 rounded-lg ">
                  <div className="text-base font-custom">{item.name}</div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-4 my-4 sm:my-6 md:my-16 lg:my-0">
          <img
            src={SAPA}
            alt="2"
            className="w-full max-h-[36vh] sm:max-h-[40vh] md:max-h-[44vh] lg:max-h-[48vh] object-contain"
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

export default SAP;
