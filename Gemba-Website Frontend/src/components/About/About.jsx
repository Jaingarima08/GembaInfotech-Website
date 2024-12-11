import React from "react";
import bgImage from "../../assets/img4.webp";
import img12 from "../../assets/img12.jpg";
import img3 from "../../assets/img3.jpg";
import img from "../../assets/img.jpg";
import img6 from "../../assets/img6.jpg";
import TriangleSection from "./TriangleSection";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Statistics from "./DataStatistics";
import BrochureCard from "./BrochureCard";

const About = () => {
  return (
    <div className="pt-20">
      <div
        className="h-[50vh] md:h-[55vh] lg:h-[65vh] top-0 inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="font-custom overflow-hidden ">
        <div className="flex flex-col lg:flex-row justify-between bg-slate-100 py-10 px-4 sm:px-6 ">
          {/* Text Section */}
          <div className="lg:pr-6 lg:w-1/2 w-full font-custom">
            <h2 className="text-blue-500 font-semibold text-base ">OVERVIEW</h2>
            <hr />
            <br />
            <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl">
              Your Challenges, Our Solutions
            </h1>
            <br />
            <p className="text-gray-700 ">
              <strong>Gemba®</strong> is a full IT Service Provider, offering
              organizations the technology, content, and expertise for featuring
              comprehensive IT and Business Services through AI and Machine
              Learning, automation, and advanced Analytics for
              performance-driven and holistic digital transformation projects to
              evolve companies into an intelligent Enterprise.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 w-full mt-6 lg:mt-0">
            <div className="relative pb-[56.25%] lg:pb-[40vh] sm:pb-[30vh]">
            
              {/* Maintain aspect ratio */}
              <img
                src={img3}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-lg"
                alt="Overview"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row bg-slate-100 py-10 px-4 sm:px-6 items-start">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full flex items-stretch">
            <div className="w-full h-full">
              <img
                src={img}
                className="w-full h-full object-cover rounded-3xl shadow-lg"
                alt="Our Focus"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:pl-8 lg:w-1/2 w-full mt-6 lg:mt-0 font-custom flex flex-col">
            <h2 className="text-blue-500 font-semibold text-base ">
              OUR PRESENT FOCUS
            </h2>
            <hr />
            <br/>
            <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl">
              Crafting Tomorrow's Digital Solutions Today
            </h1>
            <br />
            <div className="flex flex-col lg:flex-row justify-between mt-4 ">
              {/* Text Content */}
              <p className="w-full lg:w-64 text-gray-700 ">
                In today's dynamic digital landscape, our top priority is
                delivering exceptional service, precisely tailored to the unique
                needs of our clients. We achieve this by seamlessly integrating
                cutting-edge technology, skilled professionals, and
                industry-leading practices. Our unwavering commitment to service
                excellence empowers businesses to thrive in an ever-evolving
                digital world.
              </p>

              {/* Brochure Card */}
              <div className="mt-4 lg:mt-0 lg:ml-6">
                <BrochureCard />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-slate-100 to-slate-500">
          <Statistics />
        </div>

        <div className="bg-slate-500 py-10 px-4 sm:px-6 justify-between">
          <h2 className="text-gray-100 font-semibold text-base  pb-3">
            EXPLORE COMPANY
          </h2>
          <hr className="border-gray-300" />
          <br />
          <h1 className="font-bold text-gray-100 text-2xl sm:text-3xl lg:text-4xl">
            Your trusted partner in technology
          </h1>
          <br />
          <TriangleSection />
        </div>

        <div className="bg-slate-100 py-10 px-4 sm:px-6  justify-between">
          <h2 className="text-blue-500 font-semibold text-base  pb-3">
            EXPLORE COMPANY
          </h2>
          <hr />
          <br />
          <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl ">
            Transforming Digital Landscapes, Starting with People.
          </h1>
          <br />
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <FaCheckCircle
                className="text-slate-300 rounded-full w-12 h-12 translate-x-2 translate-y-10"
                size={36}
              />
              <p className="pr-0 md:pr-6 mt-10 text-gray-700">
                Gemba is a place for ideas. And a place consisting of the right
                people who have come together to build incredible things for
                purpose-driven clients—helping businesses move at the speed of
                progress. We are a team of experts with some of the industry's
                best technology talent. Together we are taking everything we
                know about digital transformations smarter, faster, and leaner.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={img6}
                className="w-full h-[30vh] md:h-[40vh] lg:h-[42vh] rounded-3xl shadow-lg object-cover"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div
          className="h-[50vh] md:h-[60vh] lg:h-[65vh]"
          style={{
            backgroundImage: `url(${img12})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: "0.7",
          }}>

          <div className="px-4 sm:px-6 md:px-12 pt-12 md:pt-16 bg-black bg-opacity-25 h-full">
            <h1 className="text-white sm:text-base lg:text-lg">
              <u className="pb-2">CONNECT WITH US</u>
            </h1>
            <br />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white ">
                We are committed <br />
                to delivering only <br />
                the best
              </p>
              <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
                <NavLink to="/contact">Get Started</NavLink>
                <FaArrowRightLong className="text-lg md:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
