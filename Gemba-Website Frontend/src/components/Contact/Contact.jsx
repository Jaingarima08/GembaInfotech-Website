import React from "react";
import contact from "../../assets/contact.jpg";
import { RiHqLine } from "react-icons/ri";
import ContactForm from "./ContactForm"


const Contact = () => {
  return (
    <div className="pt-24">
      <div className=" top-0 ">
        <div
          className="relative top-0 h-[50vh] sm:h-[60vh] md:h-[65vh]"
          style={{
            backgroundImage: `url(${contact})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
          }}
        >
          <div className="py-20 md:py-24 h-full ">
            
            {/* Lighter Gray overlay */}
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-6 lg:mx-16 my-6 sm:my-10 lg:my-4 text-center py-4 sm:py-6 lg:py-8  bg-opacity-25 rounded-tl-2xl rounded-br-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-4 text-gray-800">
                Welcome!
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 mx-6 sm:mx-10 md:mx-14 flex">
                <h3 className="animate-slideInLeft">Connect with Us -</h3>
                <h4 className="animate-slideInRight">Your Voice Matters</h4>
              </p>
              <a
                href="/contact"
                className="bg-[#EA5256] text-gray-800 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-3xl shadow-lg hover:bg-[#e77b7f] transition duration-300"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>

      <div>
      <ContactForm />
      </div>
      
        <div className="py-8 px-4 sm:px-6 sm:py-12">
  <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl mb-8 text-left">
    Our Offices
  </h1>
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Main Office */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-1"> Mohali, Punjab <RiHqLine className="hover:text-green-500"/></h3>
      <p className="text-gray-500">
        Gemba Infotech, Quark Atrium, Phase 8B,
        <br />
        Mohali, Punjab 160071 India
      </p>
      <p className="text-gray-500 mt-2"> +91-172-4659657</p>
      <p className="text-gray-500 mt-2">
        <a href="mailto: sales-team@gembainfotech.com" >
          sales-team@gembainfotech.com
        </a>
      </p>
    </div>
    {/* Branch Office */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-700 mb-2 "> Chandigarh</h3>
      <p className="text-gray-500">
        SCO 224, Level 1&2, Sector 37C,
        <br />
        Chandigarh CH 160036 India
      </p>
      <p className="text-gray-500 mt-2"> +91-172-4659657</p>
      <p className="text-gray-500 mt-2">
        <a href="mailto: sales-team@gembainfotech.com" >
          sales-team@gembainfotech.com
        </a>
      </p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default Contact;
