import React from 'react';

const PrivacyPolicy = () => {
  const privacyPolicySections = [
    {
      title: "Data Retention Policy, Managing Information",
      content: `GembaInfotech will retain data provided by users for the duration that our product is actively used by the client, and in certain cases, even after its use has ended. If you wish to request the deletion of specific data or all user-provided data, please reach out to us at sales-team@gembainfotech.com, and our support team will respond promptly.`,
    },
    {
      title: "Security",
      content: `At GembaInfotech, protecting the safety and confidentiality of client information is our highest priority. We implement robust physical, electronic, and procedural safeguards to secure data that must be processed and maintained. Access to sensitive information is strictly limited to authorized personnel whose roles require this data for essential operations, product development, and refinement. However, please be aware that, despite our rigorous security measures, the risk of potential security breaches cannot be completely eliminated.`,
    },
    {
      title: "Changes",
      content: `This Privacy Policy may be revised at any time to reflect changing requirements. Should any updates occur, we will promptly inform you of these changes via email or text message. We encourage clients and customers to review this Privacy Policy regularly to stay informed of the latest updates.`,
    },
    {
      title: "Your Consent",
      content: `By using our services, you consent to the processing of your information as outlined in our Privacy Policy. Processing may include actions such as using cookies on your device, collecting, storing, deleting, combining, and disclosing information. These activities may take place across our global offices to ensure the best possible service experience.`,
    },
    {
      title: "Contact Us",
      content: `If you have any questions about our privacy practices or need assistance while using our services, please feel free to reach out to us at sales-team@gembainfotech.com. We're here to help!`,
    },
  ];
  
  return (
    <div className="mt-36 mb-4">
      <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl text-center py-8 lg:pt-2 lg:pb-4 hover:underline">Privacy Policy</h1>
      <div className="container mx-auto px-6 py-8 bg-gray-100 ">
      {privacyPolicySections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
          <p className="mt-2 text-gray-600">{section.content}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
