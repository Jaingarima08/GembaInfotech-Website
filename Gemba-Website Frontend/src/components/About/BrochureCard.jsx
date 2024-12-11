/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const BrochureCard = () => {
  return (
    <div className="mt-4">
      <div className="bg-green-500 p-8 rounded-3xl text-white w-64 font-custom">
        <FaFilePdf size={40} className="mb-4" />
        <p className="text-md mb-2">Just starting out?</p>
        <h2 className="text-xl font-bold mb-4">Download a company brochure</h2>
        <a 
          href='/assets/Brochure.pdf'
          download='Brochure.pdf' 
          className="bg-white text-blue-500 hover:bg-[#EA5256] hover:text-white font-semibold py-2 px-2 rounded-3xl flex items-center justify-center"
        >
          Get A Copy <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default BrochureCard;
