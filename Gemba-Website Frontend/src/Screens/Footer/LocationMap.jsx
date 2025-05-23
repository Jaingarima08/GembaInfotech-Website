import React from 'react';

const LocationMap = () => {
  return (
    <>
    <h2 className="text-lg sm:text-xl font-bold text-slate-800">Location Map</h2>
    <div className="w-full h-32 sm:h-52 md:h-64 mt-2 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <iframe
        title="location-map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3430.6024182516485!2d76.69403007467537!3d30.701460587144894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQyJzA1LjIiTiA3NsKwNDEnNDcuOCJF!5e0!3m2!1sen!2sin!4v1723102982165!5m2!1sen!2sin"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  </>
  
  );
};

export default LocationMap;
