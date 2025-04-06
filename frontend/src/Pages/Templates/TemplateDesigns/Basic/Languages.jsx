import React from "react";

const Languages = ({ languages }) => {
  if (languages.length === 0) return "";
  else if (languages[0].language)
    return (
      <div className="no-break">
        <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
          Languages
        </h2>
        <div className="flex flex-col gap-2">
          {languages.map((item, index) => {
            return (
              <div key={index} className="mx-10">
                <section>{item.language}</section>
                <section className="text-gray-500">{item.level}</section>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Languages;
