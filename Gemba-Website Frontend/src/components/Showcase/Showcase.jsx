import React from 'react';
import eventimg from '../../assets/eventimg.jpg';
import PictureGrid from './PictureCards';


const showcase = () => {
  return (
    <div className="pt-20">
    <div
      className="h-[50vh] md:h-[60vh] lg:h-[65vh] top-0 relative"
      style={{
        backgroundImage: `url(${eventimg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col ">
        <div className="px-4 sm:px-6 py-36 sm:py-36 md:px-12 md:py-40 h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl  font-bold text-white animate-slideInLeft">
          Join the Journey, </h1>
            <h2 className=" text-3xl sm:text-4xl md:text-5xl  font-bold animate-slideInRight text-[#EA5256]">
            Create the Story
            </h2>
        </div>
      </div>
    </div>
    <PictureGrid/>

    </div>
   
  )
}

export default showcase
