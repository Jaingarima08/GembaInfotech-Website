import React from 'react';
import infra from '../../../../assets/infra.jpg';
import cardfooter from '../../../../assets/cardfooter.jpg';
import cardheader from "../../../../assets/cardheader.jpg";
import Infra_items from './Infra_Data';
import ItSolutions from './IT Solutions/ItSolutions';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


const IT_Infra = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
    <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
      <img
        src={cardheader}
        alt="Header"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="p-4 sm:p-6 lg:p-8  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20">
          IT Infra
        </div>
      </div>
    </header>

    <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
          <img
            src={infra}
            alt="Below Header"
            className="w-full h-60 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">
          Secure, scalable IT infrastructure future
          </p>
          <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto">
          IT infrastructure forms the backbone of any modern organization, encompassing all hardware, software, networks, and data centers that support business operations. A well-designed IT infrastructure ensures seamless communication, efficient data management, and robust security measures. It enables businesses to scale efficiently, adapt to new technologies, and respond swiftly to market changes. With growing digital demands, a resilient, secure, and scalable IT infrastructure is crucial to maintain uptime, protect sensitive data, and support innovation. Investing in modern IT infrastructure allows companies to stay competitive and future-ready in a fast-evolving digital landscape.
          </p>
        </div>
      </div>

      <div className=" w-full px-4 md:px-6 lg:px-8 my-8 lg:my-8 ">
        <div className="w-full text-start">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Infrastructure for a Connected Future
          </div>
          <div className="text-gray-600 my-2 text-base">
          Enhance your enterprise's IT infrastructure with our comprehensive solutions, including:
          </div>
            <ol className="w-full px-2 mx-5 sm:mx-6 md:mx-8 lg:mx-10 list-decimal text-gray-600">
              {Infra_items.map((item) => (
                <li key={item.id} className="p-1 rounded-lg ">
                  <div>
                  <h1 className="text-base"><b>{item.name} :</b> <span className="text-base font-custom">{item.description}</span></h1>
                  </div>
                  
                </li>
              ))}
            </ol>
        </div>
        </div>

        <ItSolutions/>

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
  )
}

export default IT_Infra