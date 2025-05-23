import React from "react";
import TextSlider from "./Textslider";
import Descpt from "./Descpt";
import ServiceCard from "./Cards";
import Serviceconnect from "./Serviceconnect";

const Services = () => {
  return (
    <div className="pt-20">
      <TextSlider/>
      <Descpt/>
      <ServiceCard/>
      <Serviceconnect/>
    </div>
  );
};

export default Services;
