import Gembalogo from "../../assets/GEMBA_LOGO.png";
import Handshake from "../../assets/prodpartner.webp";
import CFCSlogo from "../../assets/CFCSlogo.png";
import deal from "../../assets/deal.png";

const ProductPartner = () => {
  return (
    <div className="pt-24 md:pt-28">
      {/* Top Logos Section */}
   <div className="bg-gradient-to-r from-gray-100 to-blue-50 pt-10 w-full flex items-center justify-center">
  <div className="flex flex-row flex-wrap items-center justify-center w-full max-w-screen-3xl  gap-6 sm:gap-10 bg-white py-6 px-2 sm:px-4 md:px-10">
    {/* Gemba Infotech Logo */}
    <img
      src={Gembalogo}
      alt="Gemba Infotech Logo"
      className="h-10 sm:h-14 md:h-20 w-auto object-contain animate-slideInLeft"
    />

    {/* Handshake Image */}
    <img
      src={deal}
      alt="Handshake"
      className="h-10 sm:h-14 md:h-20 w-auto object-contain animate-slideInLeft"
    />
    {/* CFCS Logo */}
    <img
      src={CFCSlogo}
      alt="CFCS Logo"
      className="h-10 sm:h-14 md:h-20 w-auto object-contain animate-slideInRight"
    />
  </div>
</div>



      {/* Main Image + Text Section */}
     <div className="bg-gradient-to-b from-gray-100 to-slate-200 py-16 px-6 md:px-10">
  <div className="flex flex-col lg:flex-row items-start gap-10">
    {/* Left Side: Image */}
    <div className="flex flex-col w-full lg:w-1/2 gap-6">
      {/* Partner Image */}
      <div className="rounded-xl shadow-lg">
        <img
          src={Handshake}
          alt="Business Partnership"
          className="w-full h-auto max-h-[420px] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>

    {/* Right Side: Text */}
    <div className="w-full lg:w-1/2">
      <p className="text-gray-600 text-justify leading-relaxed">
        Innovate Ventures Group, <strong>Gemba Infotech</strong> and <strong>CFCS Cloud Solutions </strong> 
        operate as dynamic sister companies, delivering a powerful synergy
        of IT services. Gemba Infotech specializes in cutting-edge digital
        transformation, providing bespoke software solutions, IT
        consulting, and innovative product development that propel
        businesses into the future.
        <br />
        Complementing this, CFCS Cloud Solutions excels in robust cloud
        infrastructure, enterprise software, and comprehensive managed
        services, ensuring scalable, secure, and highly efficient IT
        environments.
        <br />
        Their combined strength is exemplified by their integration with
        Omini Assist, a sophisticated AI-powered virtual assistant. Omini
        Assist streamlines workflows, provides real-time insights, and
        offers intelligent recommendations across various business
        functions—from audience analysis and media planning to content
        creation and customer service.
        <br />
        By democratizing access to deep data analysis and insights, Omini
        Assist accelerates the journey from information to impactful
        client outcomes, enabling both sister companies to deliver
        unparalleled efficiency and innovative solutions to their diverse
        clientele.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default ProductPartner;
