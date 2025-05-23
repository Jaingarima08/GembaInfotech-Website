/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuickLinks = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-6 sm:mt-6 md:mt-0">
  <h2 className="text-lg sm:text-xl font-bold text-slate-800">Quick Links</h2>
  <nav className="">
    <ul className="list-disc list-inside text-xs sm:text-base">
      <li className="mt-1 ">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="hover:text-[#EA5256]"
        >
          Home
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/about');
          }}
          className="hover:text-[#EA5256]"
        >
          About us
        </a>
      </li>
      
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/services');
          }}
          className="hover:text-[#EA5256]"
        >
          Services
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/contact');
          }}
          className="hover:text-[#EA5256]"
        >
          Contact us
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/careers');
          }}
          className="hover:text-[#EA5256]"
        >
          Careers
        </a>
      </li>
      <li className="mt-1">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate('/faq');
          }}
          className="hover:text-[#EA5256]"
        >
          FAQ
        </a>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default QuickLinks;
