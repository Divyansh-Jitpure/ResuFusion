import React from "react";
import { useNavigate } from "react-router";

const ResumeTile = ({ dateCreated, resumeId }) => {
  const navigate = useNavigate();
  const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div
      onClick={() => navigate(`/resumePreview/${resumeId}`)}
      className="w-64 cursor-pointer rounded-lg border border-[#ff9090] pt-2 transition-shadow hover:shadow-md hover:shadow-amber-700"
    >
      {/* Template Image */}
      <img className="px-2" src="SampleResume.png" alt="Resume Template" />

      {/* Template Name */}
      <p className="my-1 text-xl text-gray-50 capitalize">
        Created on {formattedDate}
      </p>
    </div>
  );
};

export default ResumeTile;
