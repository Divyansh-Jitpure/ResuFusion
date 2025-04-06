import React from "react";

const Summary = ({ summary }) => {
  if (summary === "") return "";
  return (
    <div className="no-break">
      <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
        Summary
      </h2>
      <p className="mx-10 text-gray-600">{summary}</p>
    </div>
  );
};

export default Summary;
