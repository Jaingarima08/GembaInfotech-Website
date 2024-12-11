/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    service_type: "",
    request_description: "",
  });
  const [file, setFile] = useState(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("phoneNumber", formData.phoneNumber);
    data.append("company", formData.company);
    data.append("service_type", formData.service_type);
    data.append("request_description", formData.request_description);
    data.append("fileName", file);
  
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        body: data,
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };
  

  return (
    <div className="px-4 sm:px-6 py-8 sm:py-12 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:space-x-8 min-h-screen">
        {/* Left section */}
        <div className="lg:w-1/4 mb-8 lg:mb-0 mr-6 lg:mr-0">
          <h2 className="text-xl font-bold mb-1">Personalized approach</h2>
          <p className="text-gray-600 mb-4">
            You will engage directly with specialists who are experienced in your domain.
          </p>
          <h2 className="text-xl font-bold mb-1">No obligations</h2>
          <p className="text-gray-600 mb-4">
            We're here to listen, provide guidance, and answer your questions — whenever you're ready to take the next step.
          </p>
        </div>

        {/* Form section */}
        <div className="lg:w-1/2 bg-white mr-2 lg:mr-0 p-6 lg:p-6 rounded-l-lg lg:bg-gradient-to-r from-blue-100 to-transparent">
          <h3 className="text-2xl font-bold mb-4">Let's Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Do you have a question for our specialists, want to discuss your project, or learn more about our expertise? 
            Feel free to send your request using the form below!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4" method="POST" encType="multipart/form-data">
  <textarea
    name="request_description"
    placeholder="Kindly describe your request."
    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
    rows="4"
    required
    value={formData.request_description}
    onChange={handleInputChange}
  ></textarea>
  <div>
    <input
      type="file"
      name="fileName"
      accept=".pdf,.doc,.docx"
      onChange={handleFileChange}
      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-1 focus:ring-blue-400"
      required
    />
  </div>
  <div className="flex flex-col lg:flex-row gap-4">
    <input
      type="text"
      name="fullName"
      placeholder="Enter your Full name"
      className="lg:w-[48%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
      required
      value={formData.fullName}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="company"
      placeholder="Enter your Company"
      className="lg:w-[49%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
      value={formData.company}
      onChange={handleInputChange}
    />
  </div>
  <div className="flex flex-col lg:flex-row gap-4">
    <input
      type="email"
      name="email"
      placeholder="Enter your Email address"
      className="lg:w-[48%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
      required
      value={formData.email}
      onChange={handleInputChange}
    />
    <input
      type="tel"
      name="phoneNumber"
      placeholder="Enter your Phone Number"
      className="lg:w-[49%] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
      value={formData.phoneNumber}
      onChange={handleInputChange}
    />
  </div>
  <div className="relative mb-4">
    <select
      name="service_type"
      className="block w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
      required
      value={formData.service_type}
      onChange={handleInputChange}
    >
      <option value="" disabled>
        Please select from the dropdown
      </option>
      <option value="SAP">SAP</option>
      <option value="Oracle">Oracle</option>
      <option value="App & Web Development">App & Web Development</option>
      <option value="Web Design">Web Design</option>
      <option value="Server Handling">Server Handling</option>
      <option value="Custom ERP">Custom ERP</option>
      <option value="POS Application">POS Application</option>
      <option value="OS Upgrade">OS Upgrade</option>
      <option value="Digital Marketing">Digital Marketing</option>
      <option value="Quality Assurance">Quality Assurance</option>
      <option value="Enterprise Automation">Enterprise Automation</option>
      <option value="Graphic Design">Graphic Design</option>
      <option value="Data Analytics">Data Analytics</option>
    </select>
  </div>
  <button
    type="submit"
    className="w-1/3 lg:w-1/4 p-3 text-gray-800 font-semibold rounded-md bg-[#EA5256] mt-4 hover:bg-[#e77b7f] transition duration-300"
  >
    Submit
  </button>
</form>
        </div>

        {/* Right section */}
        <div className="lg:w-1/4 mt-6 lg:mt-0 lg:bg-gradient-to-l from-blue-100 to-transparent rounded-r-lg lg:pt-6">
          <h3 className="text-xl font-bold mb-1">Our contacts</h3>
          <div className="flex flex-col">
            <a href="tel:+91-172-4659657" className="text-gray-600 mb-2">
              <span role="img" aria-label="Phone">📞</span> +91-172-4659657
            </a>
            <a href="mailto:sales-team@gembainfotech.com" className="text-gray-600 mb-4">
              <span role="img" aria-label="Email">✉️</span> sales-team@gembainfotech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
