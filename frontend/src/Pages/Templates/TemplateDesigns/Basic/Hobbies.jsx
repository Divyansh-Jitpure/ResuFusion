import React from "react";

const Hobbies = ({ hobbies }) => {
  if (hobbies.length === 0) return "";
  return (
    <div className="no-break page-break">
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl">
        Hobbies/Interests
      </h2>
      <div className="mx-4 flex flex-wrap justify-center text-[8px] md:mx-10 md:text-base">
        {hobbies.map((item, index) => {
          return (
            <span key={index} className="text-gray-600">
              {index > 0 && <span className="mx-2">•</span>}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Hobbies;
