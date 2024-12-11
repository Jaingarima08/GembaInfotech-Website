import React from 'react'

const TermsConditions = () => {
  const TermsConditionsSections = [
    {
      content: (
        <>
          <p className="py-6">This agreement outlines the terms of the business relationship between you and GembaInfotech, detailing the responsibilities, scope, and expectations for both parties.</p>
          <ul className="list-disc list-inside mb-4">
            <li>All site content, including text and multimedia, is the client's sole responsibility to provide to GembaInfotech. Content must be supplied before work begins.</li>
            <br />
            <li>The client is responsible for securing a complete backup of all site content before GembaInfotech undertakes any work. GembaInfotech is not liable for any loss or damage to existing data.</li>
            <br />
            <li>This agreement does not cover data entry, web hosting, or custom artwork/graphics work unless specifically included, paid for, and mutually agreed upon. Any artwork, images, or text created or supplied by GembaInfotech on the client's behalf remains the property of GembaInfotech and/or its suppliers unless otherwise agreed.</li>
            <br />
            <li>While GembaInfotech will strive to meet all project deadlines, unforeseen circumstances—such as deployment issues, dependencies on third parties, resource unavailability, or communication delays—may require time adjustments.</li>
            <br />
            <li>GembaInfotech will provide the client with opportunities to review the website's design and content during development and upon completion. The client will have seven (7) days to provide feedback. If no feedback is received within this timeframe, the work will be considered automatically approved.</li>
            <br />
            <li>The Client retains full copyright over any data, files, and graphic logos they provide, granting GembaInfotech the rights to publish and use these materials as needed. The Client must ensure they have the proper permissions to use any copyrighted material from third parties and is responsible for securing those rights for use by GembaInfotech. The Client agrees to indemnify and hold GembaInfotech harmless from any claims arising from failure to obtain such permissions. By entering into this contract, the Client guarantees that all required permissions and authorizations have been obtained. Documentation of these permissions may be requested.</li>
            <br />
            <li>GembaInfotech is not responsible for any changes made to the Client's website or pages by the Client or third parties after deployment. Such changes include, but are not limited to, additions, modifications, or deletions. Should any issues arise due to these alterations, GembaInfotech may require a one-time web development fee to address them.</li>
            <br />
            <li>If the Client cancels the service before project completion, a cancellation fee may apply. This fee will reflect the amount of work completed at the time of cancellation.</li>
            <br />
            <li>Failure to pay the cancellation fee or any outstanding balances may result in legal action, if necessary.
            </li>
          </ul>
          <strong className="text-xl font-semibold text-gray-700 mt-2">Support and Third-Party Services</strong>
          <ul className="list-disc list-inside my-4">
            <li>Upon the launch of the site or app, GembaInfotech provides one month of free support. After this period, support services are available through a range of pricing packages tailored to meet client needs. Discounts are offered for higher-tier packages. Support includes bug fixes and email assistance but excludes issues related to site architecture, policy changes, or additional features.</li>
            <br />
            <li>GembaInfotech makes no warranties or guarantees regarding the accuracy or performance of any third-party products or services used in the project. Any upgrades or modifications to third-party products or services are not included within the standard support scope. If such updates are required, GembaInfotech may provide these services, subject to feasibility, with adjustments in cost and timeline as necessary.</li>
          </ul>

          <strong className="text-xl font-semibold text-gray-700 mt-2">Rework, Enhancements, Add-Ons, and Billing</strong>
          <ul className="list-disc list-inside my-4">
          <li>Any new features outside the initial scope will be managed through a Change Management process and billed separately. If additional requirements (scope creep) arise after wireframe approval, these will also incur extra charges, impacting the delivery timeline and cost.</li>
          <br />
          <li>While we strive to accommodate most changes within the project budget, certain requests may qualify as enhancements or add-ons and will be chargeable. GembaInfotech will inform you of any additional costs before proceeding with such work.</li>
          <br />
          <li>Any rework, changes, or tweaks requested after project approval or after advancing to subsequent stages of development may be considered additional work and billed accordingly.</li>
          <br />
          <li>The client agrees to pay all fees charged by GembaInfotech in full and by the agreed due dates, without deductions, discounts, or offsets for debt settlement.</li>
          </ul>

          <strong className="text-xl font-semibold text-gray-700 mt-2">Limitations of Liability</strong>
          <ul className="list-disc list-inside my-4">
            <li>GembaInfotech will exercise reasonable skill and care in providing services but makes no warranties, express or implied, regarding the availability, quality, accuracy, timeliness, completeness, performance, or suitability of the services.</li>
            <br />
            <li>GembaInfotech, including its employees and agents, is not liable for any loss or damage due to inaccuracies, omissions, delays, or errors, whether caused by negligence or other factors in the production of the website. Additionally, GembaInfotech is not responsible for any loss or damage to the client's artwork, photos, data, or content supplied for the project, regardless of the cause.</li>
            <br />
            <li>Except in cases of death or personal injury caused by our negligence, GembaInfotech will not be liable for any damages, whether arising from contract, tort, or otherwise, related to this Agreement or the service operation. This includes, but is not limited to, liability for direct, indirect, or consequential damages such as loss of profit, property damage, or claims from third parties.</li>
            <br />
            <li>GembaInfotech does not guarantee the performance of third-party services and cannot be held liable for any failure of services provided by third-party organizations.</li>
            <br />
            <li>The project will progress in distinct stages, with each subsequent stage beginning only after sign-off and receipt of the agreed-upon payment for the prior stage.</li>
            <br />
            <li>Upon project completion and final approvals, all developed code and materials will be transferred to the client, and ownership of the code will belong to the client once the final payment is made.</li>
            <br />
            <li>GembaInfotech reserves the right to showcase the completed work, including the final website or application, as a reference for prospective clients. If the client wishes to withhold this usage, they must inform GembaInfotech in advance and request approval.</li>
          </ul>
        </>
      )
    },
  ];

  return (
    <div className="mt-36 mb-4">
      <h1 className="font-bold text-gray-700 text-2xl sm:text-3xl lg:text-4xl text-center py-8 lg:pt-2 lg:pb-4 hover:underline">Terms of Services</h1>
      <div className="container mx-auto px-6 py-8 bg-gray-100 ">
      {TermsConditionsSections.map((section, index) => (
        <div key={index} className="mb-6">
          <p className=" text-gray-600">{section.content}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TermsConditions