import React from "react";

const ResumeTile = () => {
  return (
    <div
      //   onClick={handleSelectTemplate}
      className="w-72 cursor-pointer rounded-lg border border-[#ff9090] pt-2"
    >
      {/* Template Image */}
      <img className="px-2" src="SampleResume.png" alt="Resume Template" />

      {/* Template Name */}
      <p className="my-1 text-xl font-semibold text-gray-50 capitalize">
        {/* {templateName} */}
      </p>
    </div>
  );
};

export default ResumeTile;
