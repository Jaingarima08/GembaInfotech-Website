/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import BackToTop from "./BacktoTop";
import LocationMap from "./LocationMap"; 
import QuickLinks from "./QuickLinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 z-10 bottom-0 w-full font-custom">
  <div className="flex flex-row md:flex-row space-y-6 md:space-y-0">
    
    {/* Quick Links */}
    <div className="w-full md:w-1/3">
      <QuickLinks />
    </div>

    {/* Connect with Us */}
    <div className="w-full md:w-1/3">
      <h2 className="text-lg sm:text-xl font-bold text-slate-800">Connect with Us</h2>
      <div className="text-xs sm:text-base">
        <p className="flex items-start mt-2">
          <span className="mr-1">
            <FaMapMarkerAlt />
          </span>
          Gemba Infotech, Quark Atrium, <br /> Phase 8B, Mohali, India
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-1">
            <FaMapMarkerAlt />
          </span>
          SCO 224, Level 1&2, Sector 37C, <br /> Chandigarh CH 160036 INDIA
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-1">
            <FaPhoneAlt />
          </span>
          +91-172-3507405
        </p>
        <p className="flex items-start mt-2">
          <span className="mr-1">
            <FaEnvelope />
          </span>
          sales-team@gembainfotech.com
        </p>

        {/* Social Media */}
        <div className="mt-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800">Follow Us</h2>
          <p className="pt-2 text-lg sm:text-xl">
            <a href="https://www.linkedin.com/company/gemba-infotech/" className="text-blue-500 hover:text-[#EA5256]">
              <FaLinkedin />
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Location Map */}
    <div className="w-full md:w-1/3">
      <LocationMap />
    </div>
  </div>

  <br />

  <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-300 py-4">
  <div className="flex flex-col md:flex-row items-center md:items-start space-x-4">
  <p className="text-xs sm:text-sm text-gray-500 ">
    &copy; 2021 Gemba Infotech.  All rights reserved. 
  </p>
  <p className="text-xs sm:text-sm text-gray-500 space-x-4">
  <NavLink to="/terms-and-conditions" className="hover:text-[#EA5256]" > Terms & Conditions</NavLink>
  <NavLink to="/privacy-policy" className="hover:text-[#EA5256]" > Privacy Policy</NavLink>
  </p>
  </div>
  <div className=" md:ml-auto text-xs sm:text-sm">
    <BackToTop />
  </div>
</div>

</footer>

  );
};

export default Footer;
