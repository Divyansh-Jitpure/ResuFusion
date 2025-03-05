import React, { useContext, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { Toaster, toast } from "sonner";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center">
      <Toaster richColors />
      <div className="my-30">
        {/* <div className="h-72 w-[800px] bg-red-50">
          <p className="text-center text-5xl font-bold">
          </p>
          </div> */}
        {user ? user.username : "Loading..."}
      </div>
    </div>
  );
};

export default Home;
