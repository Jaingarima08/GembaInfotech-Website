import React from 'react';
import img10 from '../../assets/img10.jpg';
import ProductGrid from './ProductCards';
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import productConnect from '../../assets/productConnect.jpg';

const Product = () => {
  return (
    <div className='pt-20 '>
        <div
      className="h-[50vh] md:h-[60vh] lg:h-[65vh] top-0 relative"
      style={{
        backgroundImage: `url(${img10})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center">
        <div className="px-4 sm:px-6 pt-32 sm:py-36 md:py-40 h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-slideInLeft">
          One Platform, Endless Possibilities-</h1>
            <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold animate-slideInRight text-[#EA5256]">
            ERP to Healthcare 
            </h2>
        </div>
      </div>
    </div>
    <ProductGrid/>
    <div
    className="h-[50vh] sm:h-[60vh] lg:h-[65vh] top-0 relative"
    style={{
      backgroundImage: `url(${productConnect})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  >
    <div className="px-4 sm:px-6 py-20 md:py-28 bg-black bg-opacity-25 h-full">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Connect with Our <br />
    Experts</p>

    <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
            <NavLink to="/contact">Get Started</NavLink>
            <FaArrowRightLong className="text-lg md:text-xl" />
          </button>
  </div>
  </div>
  </div>
    </div>
  )
}

export default Product