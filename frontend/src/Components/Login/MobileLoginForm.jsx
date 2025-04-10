import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "sonner";

const MobileLoginForm = () => {
  const { login, showMobileLoginModal, setShowMobileLoginModal } =
    useContext(AuthContext);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userData);
      setShowMobileLoginModal(false); // ✅ Close modal on success
      document.body.style.overflow = ""; // ✅ Re-enable scroll
    } catch (err) {
      setError(err.error || "Login failed");
    }
  };

  return (
    <div className="flex h-[50vh] w-[80vw] justify-center">
      {showMobileLoginModal && <Toaster position="top-center" richColors />}
      <section className="flex flex-col items-center justify-center gap-5">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a]">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-col gap-3">
            <label className="flex flex-col gap-1 text-white">Email</label>
            <input
              className="w-[60vw] rounded border-1 border-slate-300 p-1 text-white"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={userData.email}
              onChange={handleChange}
            />
            <label className="flex flex-col gap-1 text-white">
              Password
              <input
                className="rounded border-1 border-slate-300 p-1"
                type="password"
                required
                placeholder="Enter Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </label>
            {error && <span className="text-sm text-red-400">{error}</span>}
          </div>
          <button
            type="submit"
            className="mx-1 rounded-md bg-[#ff3a3a] px-4 py-1 pb-2 font-medium text-white transition-all hover:cursor-pointer hover:bg-[#ff2d2d9c]"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default MobileLoginForm;
