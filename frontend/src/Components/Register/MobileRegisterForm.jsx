import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast, Toaster } from "sonner";

const MobileRegisterForm = () => {
  const { register, setShowMobileRegisterModal, showMobileRegisterModal } =
    useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await register(userData);
      setUserData({ username: "", email: "", password: "" });
      setConfirmPassword("");
      setShowMobileRegisterModal(false);
    } catch (err) {
      console.error(err || "Signup Failed!!");
    }
  };

  return (
    <div className="flex h-[60vh] w-[80vw] justify-center">
      {showMobileRegisterModal && <Toaster position="top-center" richColors />}
      <section className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl font-bold text-[#ff3a3a]">Sign Up</h2>
        
        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-5"
        >
          <div className="flex flex-col gap-2">
            {/* Username Input */}
            <label className="flex flex-col gap-1 text-white">
              Username
              <input
                className="w-[60vw] rounded border-1 border-slate-300 p-1 text-white"
                type="text"
                placeholder="Enter Username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required
              />
            </label>

            {/* Email Input */}
            <label className="flex flex-col gap-1 text-white">
              Email
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="email"
                placeholder="Enter Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                required
              />
            </label>

            {/* Password Input */}
            <label className="flex flex-col gap-1 text-white">
              Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required
              />
            </label>

            {/* Confirm Password Input */}
            <label className="flex flex-col gap-1 text-white">
              Confirm Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c]"
          >
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default MobileRegisterForm;
