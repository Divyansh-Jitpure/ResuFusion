import React, { useContext, useEffect } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { Toaster, toast } from "sonner";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  useEffect(() => {
    user && toast.success("Login Successful!!");
  }, [user]);
  return (
    <div className="flex justify-center">
      <Toaster richColors position="bottom-right" />
      <div className="*:my-30">
        <div className="h-72 w-[800px] bg-red-50">
          <p className="text-center text-5xl font-bold">
            {user ? user.username : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
