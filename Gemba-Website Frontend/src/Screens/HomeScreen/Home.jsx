import React from "react";
import ImageSlider from "../../components/Home/ImageSlider";
import Aemp from "../../components/Home/Aemp";
import Solution from "../../components/Home/Solution";
import Model from "../../components/Home/SF&L_Model";
import Clients from "../../components/Home/Clients";
import Connects from "../../components/Home/Connects"

const Home = () => {
  return (
    <div className="pt-24 lg:py-28 font-custom overflow-hidden" >
       <ImageSlider />
          <Aemp />
          <Solution />
          <Model/>
          <Clients/>
          <Connects/> 
    </div>
  );
};

export default Home;
