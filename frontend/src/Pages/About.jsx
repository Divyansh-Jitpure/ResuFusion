import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-15 flex min-h-screen cursor-default flex-col items-center gap-3">
      {/* Header */}
      <h1 className="mt-22 text-4xl font-semibold text-gray-50">
        About ResuFusion
      </h1>

      {/* Description */}
      <p className="w-[80%] text-center text-xl text-gray-300 md:w-[70%] 2xl:w-1/2">
        ResuFusion is a powerful and easy-to-use resume builder that helps you
        create stunning, professional resumes effortlessly. Whether you're a job
        seeker, a student, or a professional, ResuFusion gives you the tools to
        craft a perfect resume in minutes.
      </p>

      {/* Key Features */}
      <div className="mt-5 w-[80%] rounded-lg bg-white px-10 py-6 shadow-md md:w-1/2 2xl:w-1/3">
        {/* rounded-lg bg-white p-6 text-center shadow-md */}
        <h2 className="mb-2 text-center text-2xl font-semibold">
          Why Choose ResuFusion?
        </h2>
        <ul className="text-lg">
          <li className="">📌 Choose from multiple professional templates.</li>
          <li className="">📌 Multi-step form for easy resume creation.</li>
          <li className="">
            📌 Save, edit, and download your resume as a PDF.
          </li>
          <li className="">📌 Intuitive UI with smooth navigation.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <button
        onClick={() => navigate("/templates")}
        className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-lg font-medium text-white transition-all hover:bg-red-600"
      >
        Get Started Now 🚀
      </button>

      {/* Contact Information */}
      <div className="w-[80%] text-center text-xl text-gray-300 md:w-[70%]">
        You can conatct us at{" "}
        <a
          className="text-red-300 hover:text-red-400 active:text-red-400"
          href="https://divyansh-jitpure.web.app/"
          target="_blank"
        >
          https://divyansh-jitpure.web.app/
        </a>{" "}
        for any queries or suggestions.
      </div>
    </div>
  );
};

export default About;
