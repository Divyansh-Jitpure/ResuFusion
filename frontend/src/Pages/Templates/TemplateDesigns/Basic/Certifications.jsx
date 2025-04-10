import React from "react";

const Certifications = ({ certifications }) => {
  if (certifications.length === 0) return "";
  else if (certifications[0].certification)
    return (
      <div className="no-break">
        <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
          Certifications
        </h2>
        <div className="mx-4 flex flex-col gap-2 text-[8px] md:mx-10 md:text-base print:mx-10 print:text-base">
          {certifications.map((cert, index) => {
            return (
              <div key={index} className="">
                {cert.certification} -{" "}
                <span className="text-gray-500">{cert.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default Certifications;
