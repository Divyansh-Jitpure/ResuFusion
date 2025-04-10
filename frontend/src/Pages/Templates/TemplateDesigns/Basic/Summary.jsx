import React from "react";

const Summary = ({ summary }) => {
  if (summary === "") return "";
  return (
    <div className="no-break">
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
        Summary
      </h2>
      <p className="mx-4 text-[8px] text-gray-600 md:mx-10 md:text-base print:mx-10 print:text-base">
        {summary}
      </p>
    </div>
  );
};

export default Summary;
