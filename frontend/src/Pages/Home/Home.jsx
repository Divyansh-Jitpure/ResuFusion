import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      {/* <HowItWorks /> */}
    </div>
  );
};

export default Home;
