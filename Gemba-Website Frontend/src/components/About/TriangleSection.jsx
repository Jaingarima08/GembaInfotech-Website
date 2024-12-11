/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ReadMore from './MissionReadMore';
import Modelimg from '../../assets/Modelimg.PNG';


const TriangleSection = () => {
  return (
    <div className="flex flex-col sm:flex-wrap md:lg:relative bg-gray-100 p-4 lg:p-8 rounded-xl min-h-screen w-full justify-center items-center text-center">
  
    <div className="text-blue-500 border-l-2 border-blue-500 pl-2 m-2 flex-1 sm:w-full lg:w-72 md:lg:mb-96 md:lg:right-12 md:lg:absolute text-start">
        <h2 className="font-bold text-lg lg:text-xl">OUR VISION</h2>
        <p className="text-gray-600 text-base">
          To deliver faster time-to-market quality solutions that render high ROI to our clients leveraging cutting-edge technologies.
        </p>
      </div>
      
      <div className="flex-1 p-4 w-full sm:w-1/2 md:lg:w-1/3 ">
      <img src={Modelimg} alt="Image" className="w-full object-cover" />
    </div> 

    <div className="text-green-500 border-l-2 border-green-500 pl-2 m-2 flex-1 sm:w-full lg:w-72 md:lg:mb-60 md:lg:left-12 md:lg:absolute text-start">
        <h2 className="font-bold text-lg lg:text-xl">OUR VALUES</h2>
        <p className="text-gray-600 text-base">
          We at Gemba InfoTech are committed to delivering maximum value to our clients helping them succeed in a constantly changing and challenging world.
        </p>
      </div>

   <div>
      <div className="text-[#EA5256] border-l-2 border-[#EA5256] pl-2 m-2 flex-1 sm:w-full lg:w-72 text-start  ">
        <h2 className="font-bold text-lg lg:text-xl">OUR MISSION</h2>
        <p className="text-gray-600 text-base">
          Gemba Infotech's fundamental company values enable us to perform our mission in the best way possible by means of:
          <ReadMore />
        </p>
      </div>
      </div>
    </div>
 
  );
};

export default TriangleSection;
