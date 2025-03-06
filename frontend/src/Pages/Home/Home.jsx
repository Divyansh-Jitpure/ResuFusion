import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import Hero from "./Hero";

const Home = () => {
  const { user } = useContext(AuthContext); // Accessing user data from AuthContext

  return (
    <div className="flex justify-center">
      <div className="my-30 text-4xl text-white">
        {/* Temperrory Code!!! Display username if logged in, otherwise show Hero component for now*/}
        {user ? `UserName : ${user.username}` : <Hero />}
      </div>
    </div>
  );
};

export default Home;
