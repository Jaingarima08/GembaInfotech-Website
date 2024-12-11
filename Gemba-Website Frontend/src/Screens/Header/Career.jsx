import React, { useState } from "react";
import UploadCV from "./UploadCV";
import careersimg from "../../assets/careers.png";

const Career = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  // Handle form submission (Static Form Handling)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Static form submission: show a success message
    setFormStatus("Your form has been submitted successfully!");
    
    // Optionally, clear the form
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="pt-24">
      <div
        className="h-[50vh] md:h-[60vh] lg:h-[65vh] top-0 relative"
        style={{
          backgroundImage: `url(${careersimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center">
          <div className="px-4 pt-36 sm:px-6 sm:py-36 md:px-12 md:py-40  h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-slideInLeft">
              Welcome to careers
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slideInRight text-[#EA5256] mt-2">
              at Gemba Infotech
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly py-20 p-6 lg:px-8 bg-blue-50 rounded-lg shadow-lg">
        {/* Form Section */}
        <div className="w-full lg:w-[52%] bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together!</h2>
          <p className="mb-6 text-gray-600">
            Drop us a line! We are here to answer your questions 24/7.
          </p>

          {formStatus && (
            <div className="mb-4 p-4 bg-green-200 text-green-800 rounded-md">
              {formStatus}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="How can we help you?"
              rows="4"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-1/3 lg:w-1/4 p-3 rounded-md bg-[#EA5256] text-white mt-4 hover:bg-[#e77b7f] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-[30%] lg:ml-12">
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Get in touch instantly</h3>
              <p className="space-y-2 mt-2 text-gray-600 flex flex-col">
                <a href="tel:+91-172-4659657"><span role="img" aria-label="Phone">📞</span> Call us</a>
                <a href="mailto: sales-team@gembainfotech.com"><span role="img" aria-label="Email">✉️</span> Email us</a>
              </p>
            </div>
            <h3 className="text-xl font-bold mb-1">Join our team</h3>
            <UploadCV />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
