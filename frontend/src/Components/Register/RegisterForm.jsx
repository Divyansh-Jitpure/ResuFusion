import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Toaster } from "sonner";

const RegisterForm = () => {
  const { register, showRegisterModal } = useContext(AuthContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await register(userData);
      setUserData({ username: "", email: "", password: "" });
      setConfirmPassword("");
    } catch (err) {
      setError(err.error || "Something went wrong.");
    }
  };

  return (
    <div className="flex h-[70vh] w-[80vw] justify-center md:h-[80vh] md:w-[70vw]">
      {showRegisterModal && <Toaster position="top-center" richColors />}

      <section className="flex flex-col items-center justify-center gap-5 md:w-[40%] md:gap-10 2xl:gap-16">
        <h2 className="pb-1 text-4xl font-bold text-[#ff3a3a] 2xl:text-5xl">
          Sign Up
        </h2>
        {error && <p className="text-red-500">{error}</p>}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 2xl:gap-16"
        >
          <div className="flex flex-col gap-2 2xl:gap-3">
            {["username", "email", "password"].map((field) => (
              <label key={field} className="flex flex-col gap-1 text-white">
                {field.charAt(0).toUpperCase() + field.slice(1)}
                <input
                  className="w-[60vw] rounded border border-slate-300 p-1 text-white md:w-[20vw]"
                  type={field === "password" ? "password" : field}
                  placeholder={`Enter ${field}`}
                  name={field}
                  value={userData[field]}
                  onChange={handleChange}
                  required
                />
              </label>
            ))}
            <label className="flex flex-col gap-1 text-white">
              Confirm Password
              <input
                className="rounded border border-slate-300 p-1"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="rounded-md bg-[#ff3a3a] px-4 py-2 font-medium text-white transition-all hover:bg-[#ff2d2d9c] 2xl:text-xl"
          >
            Sign Up
          </button>
        </form>
      </section>

      <section className="relative hidden w-[60%] md:block">
        <img
          className="h-full w-full object-cover"
          src="regBG.png"
          alt="Register Background"
        />
        <span className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 text-center text-white">
          <span className="text-2xl font-bold 2xl:text-5xl">
            Register To Create Your Account
          </span>
        </span>
      </section>
    </div>
  );
};

export default RegisterForm;
