import React from 'react';

const cardData = [
  {
    title: "Manage All Your Purchase Requests in One Place",
    description:
      "Simplify PR splitting, collation, and assignment seamlessly with our integrated management system on the procurement platform.",
  },
  {
    title: "All Your Suppliers Managed in One Place",
    description:
      "Safeguard your auctions against fraud by monitoring bidder behavior, ensuring fairness, transparency, and security in every transaction.",
  },
  {
    title: "Witness The Gold Standard Of Auction Platforms",
    description:
      "Optimize procurement through real-time eAuctions, securing top deals with unparalleled efficiency on our online auction platform.",
  },
  {
    title: "Create Purchase Orders Efficiently",
    description:
      "Elevate your procurement with our automated PO solutions, facilitating faster processing and providing unparalleled clarity in every transaction.",
  },
  {
    title: "Digitize Your Approval Workflow",
    description:
      "Streamline approvals with our eProcurement solution, accelerating decision-making for prompt and efficient procurement outcomes.",
  },
  {
    title: "Unlock 360° Spend Visibility",
    description:
      "Gain clarity with our Procurement Platform: Explore expenditures, uncover cost-saving opportunities, and make informed purchasing decisions based on data.",
  },
];

const Card = ({ title, description }) => (
  <div className="w-full sm:w-[400px] lg:w-[400px] h-[216px] bg-slate-200 p-4 sm:p-5 rounded-lg">
    <h2 className="text-xl sm:text-2xl font-semibold text-white bg-cardColor font-custom p-2 h-[70px] text-center items-center justify-center">{title}</h2>
    <p className="my-2 sm:my-4 text-gray-600 text-base">{description}</p>
  </div>
);

const AuctionData = () => (
  <div className="flex flex-wrap items-center justify-between gap-4 mx-4 sm:mx-6 lg:mx-8 mt-5 mb-10">
    {cardData.map((card, index) => (
      <Card key={index} title={card.title} description={card.description} />
    ))}
  </div>
);

export default AuctionData;
