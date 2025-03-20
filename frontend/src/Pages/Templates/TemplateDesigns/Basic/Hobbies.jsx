import React from "react";

const Hobbies = ({ hobbies }) => {
  return (
    <div>
      <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
        Hobbies/Interests
      </h2>
      <div className="flex flex-wrap justify-center">
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
