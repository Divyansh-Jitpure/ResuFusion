import React from "react";

const Summary = ({ summary }) => {
  return (
    <div className="text-center">
      <h2 className="mx-5 border-b pb-1 text-xl font-medium text-gray-700">
        Summary
      </h2>
      <p className="px-10 py-1 text-gray-600">{summary}</p>
    </div>
  );
};

export default Summary;
