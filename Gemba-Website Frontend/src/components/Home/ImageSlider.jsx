import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
// import Image1 from "../../assets/Happy New Year Banner (1).png";
import Image2 from "../../assets/FrappePartner.jpg";
import Image3 from "../../assets/homeimg2.jpg";
import Image4 from "../../assets/homeimg3.jpg";
import Image5 from "../../assets/homeimg1.jpg";
import Logo from "../../assets/frapeelogo.png"; // Add your logo image here

const images = [
  // { src: Image1, alt: 'Image 0' },
  { src: Image3, alt: 'Image 1' },
  { src: Image2, alt: 'Image 2' },
  { src: Image4, alt: 'Image 3' },
  { src: Image5, alt: 'Image 4' },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    fade: true,
    afterChange: (current) => setCurrentSlide(current),
  };

  const getTextAnimationClass = () => {
    return currentSlide === 1 ? "animate-slideInRight" : "animate-slideInLeft";
  };

  return (
    <div className="h-[40vh] sm:h-[50vh] lg:h-[80vh] top-0 lg:top-3 transform shadow-md relative">
      <Slider {...settings} className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh]">
        {images.map((image, index) => (
          <div key={index} className="h-[40vh] sm:h-[50vh] lg:h-[80vh]">
            <img src={image.src} alt={image.alt} className="w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] lg:object-cover object-center" />
          </div>
        ))}
      </Slider>

      {/* Overlay Content */}
      <div className="absolute top-0 w-full h-[40vh] sm:h-[50vh] lg:h-[80vh] bg-black bg-opacity-10 flex flex-col justify-center items-start">
        {currentSlide !== 0 && (
          <>
            {/* Render Logo on Second Slide Only */}
            {currentSlide === 1 && (
              <div className="absolute top-8 right-4 sm:right-12">
                <img src={Logo} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-contain" />
              </div>
            )}

            <div className={`px-4 pt-16 sm:px-8 sm:pt-20 md:px-12 md:py-40 ${getTextAnimationClass()}`}>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                {currentSlide === 1 ? "Frappe Authorized" : "Empowering You"}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-3 text-white">
                {currentSlide === 1 ? (
                  <>
                    <span className="text-[#EA5256]">Partner</span>
                  </>
                ) : (
                  <>
                    to Build <span className="text-[#EA5256]">with Ease</span>
                  </>
                )}
              </h2>
              <p className="text-white sm:text-base lg:text-lg">
                {currentSlide === 1
                  ? "Driving Innovation Through Partnership"
                  : "Thriving Together in the Future You Create"}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
