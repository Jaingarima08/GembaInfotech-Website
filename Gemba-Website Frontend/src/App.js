import React, {Suspense} from "react";
import Navbar from "./Screens/Header/Navbar";
import Footer from "./Screens/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import Home from "./Screens/HomeScreen/Home";
// import About from "./components/About/About";
// import Services from "./components/Services/Services";
// import Product from "./components/Product/Product";
// import Events from "./components/Showcase/Showcase";
// import Contact from "./components/Contact/Contact";
// import Partner from "./components/Partner/Partner";
// import ProductPartner from "./components/Product Partner/ProductPartner.jsx";
// import FAQ from "./Screens/Footer/FAQ";
// import AppDev from "./components/Services/CardData/AppDevelopment/Application_dev";
// import Migration from "./components/Services/CardData/Migration&Upgrade/Migration";
// import Implimentation from "./components/Services/CardData/Impli&Transformation/Implimentation";
// import AppManagement from "./components/Services/CardData/AppMangment/AppManagement";
// import SAP from "./components/Services/CardData/SAP_Analytics/SAP";
// import ReverseAuction from "./components/Services/CardData/ReverseAuction/Reverse_Auction";
// import Vendor from "./components/Services/CardData/Vendor/Vendors";
// import ERP from "./components/Services/CardData/ERP/ERP";
// import IT_Infra from "./components/Services/CardData/IT Infra/IT_Infra";
// import CIO_Gallery from "./components/Showcase/CIO_Gallery";
// import Birthday_Gallery from "./components/Showcase/Birthday_Gallery";
// import Reunion_Gallery  from "./components/Showcase/Reunion_Gallery";
// import Career from "./Screens/Header/Career";
// import PrivacyPolicy from "./Screens/Footer/PrivcyPolicy.jsx";
// import TermsConditions from "./Screens/Footer/Terms&Conditions.jsx";

// Lazy load your page
const Home = React.lazy(() => import ("./Screens/HomeScreen/Home.jsx"));
const About = React.lazy(() => import ("./components/About/About.jsx"));
const Services = React.lazy(() => import ("./components/Services/Services.jsx"));
const Product = React.lazy(() => import ("./components/Product/Product.jsx"));
const Events = React.lazy(() => import ("./components/Showcase/Showcase.jsx"));
const Partner = React.lazy(() => import ("./components/Partner/Partner.jsx"));
const ProductPartner = React.lazy(() => import ("./components/Product Partner/ProductPartner.jsx"));
const Contact = React.lazy(() => import ("./components/Contact/Contact.jsx"));
const Career = React.lazy(() => import ("./Screens/Header/Career.jsx"));
const FAQ = React.lazy(() => import ("./Screens/Footer/FAQ.jsx"));
const PrivacyPolicy = React.lazy(() => import ("./Screens/Footer/PrivcyPolicy.jsx"));
const TermsConditions = React.lazy(() => import ("./Screens/Footer/Terms&Conditions.jsx"));
const AppDev = React.lazy(() => import ("./components/Services/CardData/AppDevelopment/Application_dev.jsx"));
const Migration = React.lazy(() => import ("./components/Services/CardData/Migration&Upgrade/Migration.jsx"));
const Implimentation = React.lazy(() => import ("./components/Services/CardData/Impli&Transformation/Implimentation.jsx"));
const AppManagement = React.lazy(() => import ("./components/Services/CardData/AppMangment/AppManagement.jsx"));
const SAP = React.lazy(() => import ("./components/Services/CardData/SAP_Analytics/SAP.jsx"));
const ReverseAuction = React.lazy(() => import ("./components/Services/CardData/ReverseAuction/Reverse_Auction.jsx"));
const Vendor = React.lazy(() => import ("./components/Services/CardData/Vendor/Vendors.jsx"));
const ERP = React.lazy(() => import ("./components/Services/CardData/ERP/ERP.jsx"));
const IT_Infra = React.lazy(() => import ("./components/Services/CardData/IT Infra/IT_Infra.jsx"));
const CIO_Gallery = React.lazy(() => import ("./components/Showcase/CIO_Gallery.jsx"));
const Birthday_Gallery = React.lazy(() => import ("./components/Showcase/Birthday_Gallery.jsx"));
const Reunion_Gallery = React.lazy(() => import ("./components/Showcase/Reunion_Gallery.jsx"));



function App() {
  return (
    <>
      <div className="font-custom min-h-screen">
        <Navbar />
        <ScrollToTop />
         <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
        <Route path="/careers" Component={Career} />
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/product" Component={Product}/>
          <Route path="/event" Component={Events} />
          <Route path="/contact" Component={Contact} />
          <Route path="/partner" Component={Partner}/>
          <Route path="/product-partner" Component={ProductPartner}/>
          <Route path="/faq" Component={FAQ}/>
          <Route path="/application-development" Component={AppDev}/>
          <Route path="/migration" Component={Migration}/>
          <Route path="/implimentation" Component={Implimentation}/>
          <Route path="/appmang" Component={AppManagement}/>
          <Route path="/SAP" Component={SAP}/>
          <Route path="/ReverseAuction" Component={ReverseAuction}/>
          <Route path="/vendor-portal" Component={Vendor}/>
          <Route path="/ERP" Component={ERP}/>
          <Route path="/Infra" Component={IT_Infra}/>
          <Route path="/cio-gallery" Component={CIO_Gallery} />
          <Route path="/birthday-gallery" Component={Birthday_Gallery} />
          <Route path="/reunion-gallery" Component={Reunion_Gallery} />
          <Route path="/privacy-policy" Component={PrivacyPolicy}/>
          <Route path="/terms-and-conditions" Component={TermsConditions}/>
        </Routes>
        </Suspense>
      </div>
      <Footer/>
    </>
  );
}

export default App;
