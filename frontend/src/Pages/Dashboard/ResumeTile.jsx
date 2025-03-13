import React from "react";
import { useNavigate } from "react-router";

const ResumeTile = ({ dateCreated, resumeId, userId }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/resumePreview/${resumeId}`)}
      className="w-64 cursor-pointer rounded-lg border border-[#ff9090] pt-2"
    >
      {/* Template Image */}
      <img className="px-2" src="SampleResume.png" alt="Resume Template" />

      {/* Template Name */}
      <p className="my-1 text-xl text-gray-50 capitalize">
        Created on {dateCreated}
      </p>
    </div>
  );
};

export default ResumeTile;
