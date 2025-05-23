import React from 'react';
import { FaCheckCircle, FaHeadset, FaLightbulb, FaClock, FaGlobe } from 'react-icons/fa';

const FAQ = () => {
  const items = [
    {
      icon: <FaCheckCircle className="text-blue-500" />,
      title: 'Assured Services',
      description: 'We are always at the top in terms of client satisfaction.',
    },
    {
      icon: <FaGlobe className="text-blue-500" />,
      title: 'Worldwide Clients',
      description: 'We are trusted by 400+ clients from worldwide.',
    },
    {
      icon: <FaLightbulb className="text-blue-500" />,
      title: 'Next-Gen Technology Provider',
      description: 'Lifetime provider of uttermost tactics for your digital journey.',
    },
    {
      icon: <FaHeadset className="text-blue-500" />,
      title: 'It is All About Technology',
      description: '24*7 support from our expertise to your business.',
    },
    {
      icon: <FaLightbulb className="text-blue-500" />,
      title: 'Creating Ideas with Passion',
      description: 'Provide uncomplicated business intelligence by bringing fresh ideas to the table every time with our expertise.',
    },
    {
      icon: <FaClock className="text-blue-500" />,
      title: 'On-Time & Within Budget',
      description: 'Deliver what others promise with on-time and affordable range.',
    },
  ];

  return (
   <div className="mt-36 mb-4">
   <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl text-center py-8 lg:pt-2 lg:pb-4 hover:underline">Frequently Asked Question</h1>
    <div className="container mx-auto px-6 py-8 bg-gray-100 ">
      <h2 className="text-xl lg:text-3xl font-bold mb-6">Why Should You Choose Us ?</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
