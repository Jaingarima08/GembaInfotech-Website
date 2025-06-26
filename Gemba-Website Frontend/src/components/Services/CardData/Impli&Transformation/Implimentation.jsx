import React from "react";
import impli from "../../../../assets/impli.jpeg";
import portfolio from "../../../../assets/portfolio.png";
import SAP_Mng from "../../../../assets/SAP_Mng.png";
import trans from "../../../../assets/trans.jpeg";
import cardfooter from "../../../../assets/cardfooter.jpg";
import cardheader from "../../../../assets/cardheader.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Implimentation = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-2 md:p-6 lg:p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20 text-center">
            Implementation and Transformations
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 md:mx-6 lg:mx-8">
        {/* Image */}
        <div className="transition-transform duration-300 ease-in-out hover:scale-105 w-full lg:w-1/2 animate-slideInLeft mb-4 md:mb-0 h-full">
          <img
            src={impli}
            alt="Below Header"
            className="w-full h-60 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl border-2 border-white shadow-lg"
          />
        </div>

        {/* Text Div */}
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-8 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Empowering Change with Expert Implementation
          </p>
          <p className="mt-2 lg:mt-4 text-gray-600 overflow-y-auto text-justify tracking-tight md:tracking-normal ">
            ERPs are crucial for organizations, streamlining operations by
            eliminating redundancy, enhancing transparency, and providing a
            unified truth. Implementing an ERP system is complex and requires
            significant commitment and expertise. At Gemba InfoTech, we guide
            you through every stage of this transformative journey. From initial
            evaluation and planning to digital transformation, stabilization,
            and ongoing support, we ensure a smooth and successful
            implementation. Our goal is to help you achieve operational
            excellence and reach your business objectives efficiently and
            effectively.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[600px] px-4 md:px-6 lg:mx-auto mt-12 sm:text-start lg:text-center text-gray-600">
        <div className="text-justify tracking-tight md:tracking-normal ">
          We specialize in driving digital transformation through SAP ERP
          solutions, including SAP S/4HANA. With numerous successful
          implementations, we have perfected the art and science of delivering
          impactful results.
        </div>
      </div>

      <div className="w-full lg:px-8 px-4 md:px-6 my-8 sm:text-start lg:text-center"> 
  {/* Title Section */}
  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
    Implementation Portfolio
  </div>
  
  {/* Description Section */}
  <div className="text-gray-600 my-2">
    Gemba InfoTech transforms your business with advanced SAP technologies, preparing you for future success.
  </div>

  {/* Image Section */}
  <div className="bg-gray-100 p-6 flex justify-center">
    <img
      src={portfolio}
      alt="Portfolio"
      className="w-full md:w-3/4 sm:w-2/3 h-auto"
    />
  </div>
</div>

      <div className="w-full lg:px-8 px-4 md:px-6 my-8 sm:text-start lg:text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          SAP S/4 HANA - Enterprise Management
        </div>
        <div className="py-4">
          <img
            src={SAP_Mng}
            alt="SAP Management"
            className="w-full h-auto sm:w-[100vh] sm:h-[60vh] md:w-[140vh] md:h-[70vh] lg:w-[180vh] lg:h-[80vh] mx-auto "
          />
        </div>
      </div>

      <div className="w-full lg:mx-auto px-4 md:px-6 my-8 sm:text-start lg:text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Why Choose Gemba InfoTech
        </div>
        <div className="text-gray-600 my-2">
          Customers choose us for their transformation journey largely due to
          our key value-added benefits.
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Faster Realization
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Our deep industry expertise and proven methodologies enable faster
              realization of your goals, ensuring a smoother and more efficient
              transformation process.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Consultative Approach
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We apply industry best practices, customized to your company's
              unique needs, and carefully evaluate options to guide you in
              making the right process decisions.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px]  text-center items-center justify-center">
            Optimized Costs
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We achieve cost efficiencies through effective knowledge
              management, reusable components, a blended onsite-offshore model,
              and customizable solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Process Transformation
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We facilitate change management and the adoption of best
              practices, leveraging our deep expertise in the field.
            </p>
          </div>
        </div>

        {/* Application Integrations */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Project Management
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Our goal-driven project management, combined with clear
              milestones, KPIs, and robust monitoring and control mechanisms,
              ensures a risk-free transformation.
            </p>
          </div>
        </div>

        {/* HANA Services */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Minimal Disruption
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Our migration strategy and cutover techniques ensure minimal
              business disruption during deployment and transitions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between px-4 md:px-6 lg:px-8 mt-10">
        <div className="w-full md:w-[45%] lg:w-[700px]">
          <img
            className="w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[47vh] rounded-md object-cover"
            src={trans}
            alt="second-pic"
          />
        </div>
        {/* Text-content */}
        <div className="w-full md:w-[45%] mt-5 md:mt-0 lg:px-4">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Empowering Business with Gemba InfoTech
          </div>
          <p className="w-full mt-4 sm:mt-5 text-base text-gray-600 text-justify tracking-tight md:tracking-normal ">
            Empowering your business with Gemba InfoTech's cutting-edge
            solutions and industry expertise. We turn complex challenges into
            growth opportunities, driving your transformation with precision and
            innovation. Trust us to deliver tailored strategies that enhance
            your success and secure a competitive edge.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            No Risk
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              We deliver implementation services with a strong guarantee of
              success. Our expert approach ensures seamless execution, achieving
              your objectives and delivering exceptional results.
            </p>
          </div>
        </div>
        {/* Mobility Applications */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Satisfied Users
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Our transformation services enhance workflows and boost
              productivity, driving greater efficiency and enabling users to
              achieve more with less effort.
            </p>
          </div>
        </div>

        {/* Application Integrations */}
        <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg">
          <div className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center">
            Controlled Budgets
          </div>
          <div className="mt-5 text-gray-600">
            <p className="text-justify tracking-tight md:tracking-normal ">
              Our project management approach minimizes extensions and
              escalations by maintaining strict control, ensuring projects stay
              on schedule and within scope for timely, successful completion.
            </p>
          </div>
        </div>
      </div>

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
  );
};

export default Implimentation;
