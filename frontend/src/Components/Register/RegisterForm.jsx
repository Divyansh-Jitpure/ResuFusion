import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "sonner";

const RegisterForm = () => {
  const { register, showRegisterModal } = useContext(AuthContext);

  // State for user input fields
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [error, setError] = useState(""); // State for error handling

  // Handle input changes and update state
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match or not
    if (userData.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(userData); // Call register() from context
      setUserData({ username: "", email: "", password: "" });
      setConfirmPassword("");
    } catch (err) {
      setError(err.error);
    }
  };

  return (
    <div className="flex h-[70vh] w-[80vw] justify-center md:h-[80vh] md:w-[70vw]">
      {showRegisterModal && <Toaster position="top-center" richColors />}

      {/* Left Section - Register Form */}
      <section className="flex flex-col items-center justify-center gap-5 md:w-[40%] md:gap-10 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign Up
        </h2>

        {/* Display Error Message if any */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-5 2xl:gap-16"
        >
          <div className="flex flex-col gap-2 2xl:gap-3">
            {/* Username Input */}
            <label className="flex flex-col gap-1 text-white">
              Username
              <input
                className="w-[40vh] rounded border-1 border-slate-300 p-1"
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
                className="w-[40vh] rounded border-1 border-slate-300 p-1"
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
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c] 2xl:text-xl"
          >
            Sign Up
          </button>
        </form>
      </section>

      {/* Right Section - Background Image and Text */}
      <section className="relative hidden w-[60%] md:block">
        <img
          className="h-full w-full"
          src="regBG.png"
          alt="Register Background"
        />
        <span className="absolute bottom-10 left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center text-white 2xl:bottom-18">
          <div>
            <span className="text-[32px] font-bold 2xl:text-5xl">
              Register To Create Your Account
            </span>
          </div>
        </span>
      </section>
    </div>
  );
};

export default RegisterForm;
