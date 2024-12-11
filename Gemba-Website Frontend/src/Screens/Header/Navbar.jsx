import React, { useState, useEffect } from "react";
import { FaBriefcase, FaPhoneAlt, FaEnvelope, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu toggle
import logo from "../../assets/GEMBA_LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu visibility
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-md bg-white" : "bg-transparent"
        }`}
      >
        {/* Topbar */}
        <div
          className={`bg-gray-800 text-white ${scrolled ? "hidden" : "block"}`}
        >
          <div className="container mx-auto flex justify-end md:justify-end py-2 px-4 flex-wrap md:flex-nowrap">
            {/* Contact Section */}
            <div className="flex flex-row md:flex-row space-x-4 space-y-0 md:space-y-0 md:space-x-4 text-sm  lg:items-center">
              {/* Careers Tab */}
              <NavLink
                className="flex items-center hover:text-gray-400"
                to="/careers"
              >
                <FaBriefcase className="text-md" /> {/* Icon for Careers */}
                <span className="hidden md:inline ml-1">Careers</span>
              </NavLink>

              {/* Phone Number Tab */}
              <a
                href="tel:+91-172-4659657"
                className="flex items-center hover:text-gray-400"
              >
                <FaPhoneAlt className="text-md" /> {/* Icon for Phone */}
                <span className="hidden md:inline ml-1">+91-172-4659657</span>
              </a>

              {/* Email Tab */}
              <a
                href="mailto:sales-team@gembainfotech.com"
                className="flex items-center hover:text-gray-400"
              >
                <FaEnvelope className="text-md" /> {/* Icon for Email */}
                <span className="hidden md:inline ml-1">
                  sales-team@gembainfotech.com
                </span>
              </a>

              {/* LinkedIn Tab */}
              <a
                href="https://www.linkedin.com/company/gemba-infotech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-400"
              >
                <FaLinkedin className="text-md" />
              </a>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <div
          className={`bg-white font-sans shadow-md duration-1000 ${
            scrolled ? "mt-0" : "mt-0"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}{" "}
                {/* Toggle between hamburger and close icon */}
              </button>
            </div>

            {/* Menu Items - Hidden on mobile */}
            <div className={`hidden md:flex space-x-6`}>
              <div className="text-lg font-semibold flex space-x-1 items-center ">
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 flex items-center"
                  to="/"
                  activeClassName="bg-white"
                >
                  Home
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/about"
                  activeClassName="bg-white"
                >
                  About us
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/services"
                  activeClassName="bg-white"
                >
                  Services
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/product"
                  activeClassName="bg-white"
                >
                  Products
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/event"
                  activeClassName="bg-white"
                >
                  Events
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/partner"
                  activeClassName="bg-white"
                >
                  Partners
                </NavLink>
                <NavLink
                  className="p-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-2 flex items-center"
                  to="/contact"
                  activeClassName="bg-white"
                >
                  Contact us
                </NavLink>
              </div>
              <a
                href="https://gembainfotech.com/hrm/admin/users/login"
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 bg-[#EA5256] font-semibold text-md px-6 py-2 rounded-full hover:bg-[#e77b7f]"
              >
                ESS/MSS
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              menuOpen ? "block" : "hidden"
            } bg-white shadow-md text-center py-4`}
          >
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/product"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/event"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/partner"
              onClick={() => setMenuOpen(false)}
            >
              Partners
            </NavLink>
            <NavLink
              className="block py-2 text-lg font-semibold"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </NavLink>
            <a
              href="https://gembainfotech.com/hrm/admin/users/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 mt-4 bg-green-500 hover:[#EA5256] hover:text-white font-semibold text-md rounded-full mx-auto"
            >
              ESS/MSS
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
