import React from "react";

const Languages = ({ languages }) => {
  if (languages.length === 0) return "";
  else if (languages[0].language)
    return (
      <div className="no-break">
        <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
          Languages
        </h2>
        <div className="flex flex-col text-[8px] md:gap-2 md:text-base print:gap-2 print:text-base">
          {languages.map((item, index) => {
            return (
              <div key={index} className="mx-4 md:mx-10 print:mx-10">
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
