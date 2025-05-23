import React from "react";
import servimg from '../../assets/servimg.jpg';

const TextSlider = () => {
  return (
    <div
  className="h-[50vh] md:h-[60vh] lg:h-[65vh] top-0 relative"
  style={{
    backgroundImage: `url(${servimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center">
    <div className="px-4 pt-36 sm:px-6 sm:py-36 md:px-12 md:py-40  h-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-slideInLeft">
        Excellence in Service,
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slideInRight text-[#EA5256] mt-2">
        Innovation in Delivery
      </h2>
    </div>
  </div>
</div>

  );
};

export default TextSlider;
