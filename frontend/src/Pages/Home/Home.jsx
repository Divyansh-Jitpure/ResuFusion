import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Hero />
      {/* <HowItWorks /> */}
    </div>
  );
};

export default Home;
