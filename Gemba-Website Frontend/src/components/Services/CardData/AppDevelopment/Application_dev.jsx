import React from "react";
import items from "./ItemData";
import AppDev from "../../../../assets/AppDev.jpg";
import appService from "../../../../assets/appService.jpg";
import appdev3 from "../../../../assets/appdev3";
import cardfooter from "../../../../assets/cardfooter.jpg";
import cardheader from "../../../../assets/cardheader.jpg";
import parkingImg from "../../../../assets/parkingImg.PNG";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const App_Dev = () => {
  return (
    <>
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20">
            Application Development
          </div>
        </div>
      </header>

      {/* New Image Below Header */}
      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
          <img
            src={AppDev}
            alt="Below Header"
            className="w-full h-60 sm:h-64 md:min-h-[20rem] lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">
            Business Intelligence and Analytics Consulting
          </p>
          <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto text-justify tracking-tight md:tracking-normal">
            We have highly skilled ABAP Consultants and Solutions Architects to
            develop solutions needed by customers. We understand how SAP ERP can
            be enhanced using User Exists, BADIs, BAPIs, BDC, RFC, OData, etc.
            We have expertise in integrating SAP with any SAP/non-SAP
            application. The business needs of organizations are quite complex
            and fitting everything into one solution is quite an impossible
            task. ERPs cover the most common business practices and functions
            but need to be enhanced to build customer-specific functionalities
            or even industry-specific modules.
          </p>
        </div>
      </div>

      {/* Other sections remain unchanged */}
      <div className="w-full max-w-[500px] px-6 lg:mx-auto mt-12 sm:text-start lg:text-center text-gray-600">
        <div className="text-justify tracking-tight md:tracking-normal">
          We excel in extending ERPs to business partners through cutting-edge
          technologies such as SAP Cloud Platform, SAP Cloud Integration, and
          SAP HANA DB. Our deep expertise ensures seamless integration and
          enhanced functionality for your ERP systems.
        </div>
      </div>

      <div className="w-full lg:mx-auto px-6 my-8 sm:text-start lg:text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Application Development As a Service
        </div>
        <div className="text-gray-600 my-2">
          We have deep expertise in extending ERPs to business partners using
          state-of-art technologies like SAP Cloud Platform, SAP Cloud
          Integration, SAP HANA DB etc.
        </div>
      </div>

      {/* Full Width Div Below Left and Right Div */}
      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {/* Outsourced RICEFW Development */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">
            Outsourced RICEFW Development
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Complete development from implementation to go-live with dedicated
              end-to-end project management.
            </p>
          </div>
        </div>

        {/* Extensions on SAP Cloud Platform */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">
            Extensions on SAP Cloud Platform
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base ">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Proven experience in Application Development on SAP Cloud Platform
              for extending ERP and customizing cloud solutions.
            </p>
          </div>
        </div>

        {/* Business Analytics */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px]  text-center items-center justify-center">
            Business Analytics
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We have deep experience in SAP Business Intelligence (BI/BO),
              Cloud Analytics, BW on HANA, Embedded Analytics etc.
            </p>
          </div>
        </div>
      </div>

      {/* Application Development As a Service */}
      <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden mt-10">
        <img
          src={appService}
          alt="Footer Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center p-4 sm:p-6 md:p-8 bg-black bg-opacity-40">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-custom pt-2 h-[48px] sm:h-[56px] md:h-[64px]">
            Application Development As a Service
          </div>
          <p className="mt-5 sm:mt-4 text-base text-white">
            We have a well-matured application development methodology and
            practices which can produce complex applications with zero defects
            and within predictable timelines.
          </p>
        </div>
      </div>

      {/* Check-box-2 */}
      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center">
            Mobility Applications
          </div>
          <div className="my-2 sm:mt-4 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We have been working on using SAP Mobile Platforms, SAP Fiori to
              enhance user experience, provide user-friendly UIs and enable
              mobility in organizations.
            </p>
          </div>
        </div>

        {/* Application Integrations */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center">
            Application Integrations
          </div>
          <div className="my-2 sm:mt-4 text-gray-600 text-base ">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We are experts in system integrations using SAP Cloud Integration
              Services, OData Services, WSDL, Soap UI etc.
            </p>
          </div>
        </div>

        {/* HANA Services */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center">
            HANA Services
          </div>
          <div className="my-2 sm:mt-4 text-gray-600 text-base ">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Expertise in SAP HANA DB optimization and developments. We can
              optimize your reporting and developments post-migrations using
              Calculation and Analytics Views etc.
            </p>
          </div>
        </div>
      </div>

      {/* THIRD IMAGE */}
      <div className="flex flex-col md:flex-row items-start justify-between mx-4 sm:mx-6 lg:mx-8 mt-10">
        {/* Image Section */}
        <div className="w-full md:w-[45%] lg:w-[700px]">
          <img
            className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[47vh] rounded-md object-cover"
            src={appdev3}
            alt="3-pic"
          />
        </div>

        {/* Text-content Section */}
        <div className="w-full md:w-[45%] mt-5 md:mt-0 lg:px-4">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Why Gemba InfoTech for Application Development?
          </div>
          <p className="w-full mt-4 sm:mt-5 text-base text-gray-600 text-justify tracking-tight md:tracking-normal ">
            We have developed CMM-Based Application Development Practices and
            have established ourselves by delivering numerous solutions to our
            esteemed clients.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">
            Agile Approach
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We have been working on using SAP Mobile Platforms, SAP Fiori to
              enhance user experience, provide user-friendly UIs and enable
              mobility in organisations.
            </p>
          </div>
        </div>
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">
            Project Management
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We have been working on using SAP Mobile Platforms, SAP Fiori to
              enhance user experience, provide user-friendly UIs and enable
              mobility in organisations.
            </p>
          </div>
        </div>

        {/* Application Integrations */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[64px] text-center items-center justify-center">
            Knowledge Management
          </div>
          <div className="mt-4 sm:mt-5 text-gray-600 text-base">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We are experts in system integrations using SAP Cloud Integration
              Services, OData Services, WSDL, Soap UI etc.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mx-4 sm:mx-6 lg:mx-8 my-10 px-4 py-2 bg-slate-200 rounded-lg">
        {/* Text-content Section */}
        <div className="w-full md:w-[50%] mt-5 md:mt-0 lg:px-4 lg:py-6">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Our expertise in app development 
          </div>
          <p className="w-full my-4 sm:mt-5 text-base text-gray-600 text-justify tracking-tight md:tracking-normal ">
          Our journey started with a clear vision: to simplify parking and make it accessible to everyone.
We developed our parking application to tackle the everyday hassle of finding a secure, convenient parking spot.
<br />
<br />
Discover how we're transforming parking experiences by visiting our website below:
          </p>
          <div className="items-center justify-center">
          <a
                href="http://know2parking.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 bg-[#EA5256] font-semibold text-md px-6 py-2 rounded-full hover:bg-[#e77b7f] "
              >
                Get Parking
              </a>
              </div>
        </div>

        {/* Image Section */}
        <div className=" w-full md:w-[50%] mt-5 md:mt-0 lg:px-4 items-center">
          <img
            className="  object-contain"
            src={parkingImg}
            alt="parking-pic"
          />
          
        </div>

      </div>

      {/* Div to be positioned below */}
      <div className=" max-w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%] mx-4 sm:mx-6 md:mx-8 mt-10 md:mt-0 text-start">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          How Does it Help You?
        </div>
        <div className="mt-4 sm:mt-5 text-base text-gray-600 text-justify tracking-tight md:tracking-normal ">
          By outsourcing your application developments, we help by taking care
          of your development needs, allowing you to focus on managing
          operations and handling business.
        </div>
      </div>

      <div className="w-full bg-slate-200 my-4">
        <ol className="pt-5 mx-8 sm:mx-10 md:mx-12 lg:mx-12 list-decimal text-gray-600">
          {items.map((item) => (
            <li key={item.id} className="p-4 rounded-lg mt-[-25px]">
              <div className="text-base font-custom">{item.name}</div>
            </li>
          ))}
        </ol>
      </div>


      {/* Footer Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] ">
        <img
          src={cardfooter}
          alt="Footer Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute px-6 md:px-12 py-24 md:py-28 bg-black bg-opacity-25 h-full w-full">
          <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl pb-2">
            Want more?
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h3 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Speak to our experts
            </h3>

            <button className="mt-8 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white rounded-3xl w-36 h-10 md:w-40 md:h-12 font-semibold flex items-center justify-evenly">
              <NavLink to="/contact"> Contact Us </NavLink>
              <FaArrowRightLong className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App_Dev;
