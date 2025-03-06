import React, { useContext, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import Hero from "./Hero";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <div className="my-30 text-4xl text-white">
        {/* <div className="h-72 w-[800px] bg-red-50">
          <p className="text-center text-5xl font-bold"></p>
        </div> */}
        {user ? `UserName : ${user.username}` : <Hero />}
      </div>
    </div>
  );
};

export default Home;
