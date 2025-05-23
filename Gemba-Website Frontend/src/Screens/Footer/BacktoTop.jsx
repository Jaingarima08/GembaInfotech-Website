import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <span className="text-gray-500">Back To Top</span>
      <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-blue-500 hover:border-[#EA5256]">
        <FaArrowUp className="text-blue-500 hover:text-[#EA5256]" />
      </div>
    </div>
  );
};

export default BackToTop;
