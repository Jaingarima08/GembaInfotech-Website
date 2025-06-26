import React from 'react';
import partnerimg from '../../assets/Partner.png';
import  PartnerCompany from './PartnerCompany';

function Partner() {
  return (
    <div className='pt-20'>
     <div
  className="h-[50vh] sm:h-[60vh] md:h-[70vh] relative"
  style={{
    backgroundImage: `url(${partnerimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent bg-opacity-25">
    <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-20 lg:py-24  h-full flex flex-col justify-end">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EA5256] animate-slideInLeft py-2 sm:py-3 md:py-4">
        Our Partners
      </h1>
      <p className="text-sm sm:text-base text-gray-600 max-w-lg md:max-w-xl animate-slideInRight text-justify tracking-tight md:tracking-normal ">
        At <strong>Gemba InfoTech</strong>, we believe in forming partnerships that drive success through collaboration and innovation. As your trusted partner, we are dedicated to understanding your unique business needs and delivering tailored solutions that empower your growth. Together, we'll navigate challenges and seize opportunities, ensuring your business thrives in a rapidly evolving landscape.
      </p>
    </div>
  </div>
</div>

      <PartnerCompany/>
    </div>
  );
}

export default Partner;
