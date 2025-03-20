import React from "react";

const Certifications = ({ certifications }) => {
  if (certifications.length === 0) return "";
  return (
    <div>
      <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
        Certifications
      </h2>
      <div className="mx-10 flex flex-col gap-2">
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
