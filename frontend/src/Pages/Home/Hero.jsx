import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";

const Hero = () => {
  const { user } = useContext(AuthContext); // Accessing user data from AuthContext
  const navigate = useNavigate();

  return (
    <div className="grid w-full cursor-default grid-cols-1 text-red-100 md:grid-cols-2 2xl:px-20">
      <section className="flex flex-col justify-center gap-3 px-10 2xl:gap-6">
        {user ? (
          <h1 className="text-5xl font-semibold 2xl:text-6xl">
            Welcome Back <em>{user.username}</em>
          </h1>
        ) : (
          <h1 className="text-5xl font-semibold 2xl:text-6xl">
            Welcome To ResuFusion
          </h1>
        )}

        <p className="text-lg text-red-50/60 2xl:text-xl">
          Create stunning professional resumes effortlessly with ResuFusion.
          Choose from a variety of modern templates and make a lasting
          impression on recruiters. Start building your perfect resume today and
          take the next step toward your dream job!
        </p>

        {user ? (
          <button
            onClick={() => navigate("/dashboard")}
            className="w-max cursor-pointer rounded bg-[#D84040] px-3 py-1 text-xl hover:bg-[#d84040]/90 2xl:text-2xl"
          >
            Go to Dashboard
          </button>
        ) : (
          <button
            onClick={() => navigate("/templates")}
            className="w-max cursor-pointer rounded bg-[#D84040] px-3 py-1 text-xl hover:bg-[#d84040]/90 2xl:text-2xl"
          >
            Start Crafting Your Resume
          </button>
        )}
      </section>
      <img
        className="m-auto w-1/2 rotate-4 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105"
        src="resumeGraphic.png"
        alt="resume-graphic"
      />
    </div>
  );
};

export default Hero;
