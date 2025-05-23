import React from "react";
import { Mosaic } from "react-loading-indicators"; // Correct import

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Mosaic color="#EA5256" size="medium" text="Loading..." textColor="black" />
    </div>
  );
};

export default Loading;
