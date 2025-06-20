import React, { useState } from "react";
import UploadCV from "./UploadCV";
import careersimg from "../../assets/careers.png";

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.message ||
      !selectedFile
    ) {
      alert("Please fill in all required fields and upload your CV.");
      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber || "");
    data.append("company", formData.company || "");
    data.append("message", formData.message || "");
    data.append("fileName", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/api/career", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // window.location.reload(); // Refresh the page after successful submission
        window.location.href = "http://localhost:3000/careers";
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
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
          <div className="px-4 pt-36 sm:px-6 sm:py-36 md:px-12 md:py-40 h-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Welcome to careers
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EA5256] mt-2">
              at Gemba Infotech
            </h2>
          </div>
        </div>
      </div>

      {/* Form and Contact Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly py-20 p-6 lg:px-8 bg-blue-50 rounded-lg shadow-lg">
        {/* Form Section */}
        <div className="w-full lg:w-[52%] bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together!</h2>
          <p className="mb-6 text-gray-600">
            Drop us a line! We are here to answer your questions 24/7.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="How can we help you?"
              rows="4"
            ></textarea>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
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
                <a href="tel:+91-172-3507405">
                  <span role="img" aria-label="Phone">
                    📞
                  </span>
                  Call us
                </a>
                <a href="mailto: sales-team@gembainfotech.com">
                  <span role="img" aria-label="Email">
                    ✉️
                  </span>
                  Email us
                </a>
              </p>
            </div>
            <h3 className="text-xl font-bold mb-1">Join our team</h3>
            {/* CV Upload Component */}
            <UploadCV onFileSelect={handleFileSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
