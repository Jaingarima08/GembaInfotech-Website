import React from "react";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import upgradeimg from "../../../../assets/upgrades.png";
import cardfooter from "../../../../assets/cardfooter.jpg";
import cardheader from "../../../../assets/cardheader.jpg";

const Migration = () => {
  return (
    <div className="relative h-full overflow-hidden bg-white font-custom pt-20">
      <header className="relative w-full h-[50vh] md:h-[60vh] lg:h-[65vh] overflow-hidden font-custom">
        <img
          src={cardheader}
          alt="Header"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="p-4 md:p-6 lg:p-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white transition-transform duration-500 ease-in-out transform bg-black rounded-lg bg-opacity-30 hover:scale-105 hover:bg-opacity-20">
            Migration and Upgrades
          </div>
        </div>
      </header>

      <div className="relative flex flex-col md:flex-row justify-between items-start mt-[-25px] mx-4 sm:mx-6 lg:mx-8 ">
        
        <div className=" max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-7 lg:pb-2 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInLeft mb-4 md:mb-0">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">Migration</p>
          <ul className="pl-2 my-2 lg:mt-4 text-gray-600 list-disc">
            <li>
              SAP ECC 6.0 and SAP S/4HANA depend on underlying systems like
              operating systems and databases, often from third-party providers.
            </li>
            <li>
              Regular updates from these providers necessitate SAP migrations to
              newer versions of these systems.
            </li>
            <li>
              Hardware refreshes may also require complete migration to new
              setups.
            </li>
            <li>
              SAP's introduction of the HANA database has prompted customers to
              upgrade, creating various migration scenarios.
            </li>
            <li>
              Customers need expert support and end-to-end services for seamless
              migrations with minimal downtime and no business disruption.
            </li>
            <li>
              Our team has extensive experience in successfully managing these
              projects.
            </li>
          </ul>
        </div>

        
        <div className="md:ml-4 max-w-full md:max-w-[63%] bg-slate-200 p-3 sm:p-4 lg:p-7 rounded-xl shadow-lg z-10 overflow-hidden w-full lg:w-1/2 h-full min-h-[15rem] sm:min-h-[16rem] md:min-h-[20rem] lg:min-h-[24rem] animate-slideInRight">
          <p className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800">Upgrades</p>
          <ul className="pl-2 my-2 lg:mt-4 text-gray-600 list-disc">
            <li>
              SAP regularly updates its applications to meet evolving business
              needs and fix bugs.
            </li>
            <li>
              Adapting to changes in taxation and government policies often
              requires new solutions and patches.
            </li>
            <li>
              Deploying these updates without disrupting business operations is
              a complex task.
            </li>
            <li>
              We specialize in seamless implementation, ensuring minimal
              downtime and non-disruptive updates.
            </li>
            <li>
              Our team is skilled in managing intricate SAP environments, making
              deployments smooth and efficient.
            </li>
            <li>We ensure uninterrupted business continuity during updates.</li>
          </ul>
        </div>
      </div>

      <div className='w-full max-w-[800px] mx-4 sm:mx-6 lg:mx-auto mt-12 sm:text-start lg:text-center'>
      <div className='text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-800'>SAP Cloud Migration</div>
                <div className="text-gray-600 my-2">Cloud technologies are rapidly adopted due to their CAPEX savings and flexible, on-demand infrastructure. SAP's cloud offerings provide significant business value, driving rapid customer adoption. In 2015, SAP's cloud sales doubled to €2.3 billion, with expectations of a 2.6x increase by 2020 compared to 2016 sales.</div>
            </div>

            <div className='w-full max-w-[800px] mx-4 sm:mx-6 lg:mx-auto my-8 sm:text-start lg:text-center'>
                <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800'>Type of Upgrades</div>
                <div className='text-gray-600 my-2'>Migrations and upgrades can be broadly categorized as follows. With extensive experience in managing various types of migrations, we are well-equipped and ready to assist you with any of these challenges.</div>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10'>
                
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[200px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>OS/DB Migrations </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>These migrations involve moving from Windows to Unix/Linux or switching databases from Oracle, DB2, Sybase, etc., to HANA DB.</p>
                    </div>
                </div>

                
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[200px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Process Improvements </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>While the technical platform stays the same, the client seeks to enhance processes, activate new features, and modify workflows.</p>
                    </div>
                </div>

                
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[200px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Platform Migration </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>Platform migrations may involve hardware upgrades, hardware changes, on-premise to cloud transitions, or DR site setups.</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-start justify-between mx-4 sm:mx-6 lg:mx-8 mt-10'>
                <div className='w-full md:w-[45%] lg:w-[700px]'>
                    <img className='w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[47vh] rounded-md object-cover'
                    src={upgradeimg} alt='second-pic' />
                </div>
                {/* Text-content */}
                <div className='w-full md:w-[45%] mt-5 md:mt-0 lg:px-4'>
                    <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>Why Gemba InfoTech for Upgrades and Migrations</div>
                    <p className='w-full mt-4 sm:mt-5 text-base text-gray-600'>We have been working on improving our processes and methodologies to make upgrades non-disruptive and result oriented. We have helps many customers in keeping them updated.</p>
                </div>
            </div>

            <div className='flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10'>
               
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Non-Disruptive Change </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>Our proven methods for upgrades and migrations minimize business disruption and require minimal downtime.</p>
                    </div>
                </div>
               
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Comprehensive Updates </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>We not only transition you to the new platform but also maximize its potential by activating all relevant features and leveraging the latest advancements.</p>
                    </div>
                </div>

               
                <div className='w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg shadow-lg'>
                    <div className='text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom px-2 py-4 h-[60px] text-center items-center justify-center'>Smooth Transition </div>
                    <div className='mt-4 sm:mt-5 text-gray-600 text-base'>
                        <p>We ensure a smooth transition through rigorous testing, near-real-time simulations, and comprehensive training.</p>
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
          <h2 className="text-white font-bold text-lg sm:text-xl lg:text-2xl pb-2">Want more?</h2>
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

export default Migration;
