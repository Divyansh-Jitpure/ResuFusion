import React from "react";

const Experience = ({ experience }) => {
  // Function to format the date into "Month Year" format
  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  // If there is no experience data, return an empty string (nothing is rendered)
  if (experience.length === 0) return "";

  return (
    <div className="no-break text-center">
      {/* Section heading */}
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
        Experience
      </h2>

      {/* Container for all experience entries */}
      <div className="flex flex-col gap-2 text-[8px] md:text-base print:text-base">
        {experience.map((exp, index) => {
          return (
            <div
              key={index}
              className="mx-4 grid grid-cols-2 md:mx-10 print:mx-10"
            >
              {/* Company name and job title */}
              <section className="flex flex-col items-start">
                <span>{exp.companyName}</span>
                <span className="text-gray-600">{exp.jobTitle}</span>
              </section>

              {/* Location and date range */}
              <section className="flex flex-col">
                <article className="text-right">
                  <span>{exp.city}</span>, <span>{exp.country}</span>
                </article>
                <article className="text-right text-gray-500">
                  <span>{formattedDate(exp.startDate)}</span> -{" "}
                  <span>{formattedDate(exp.endDate)}</span>
                </article>
              </section>

              {/* Description spanning full width */}
              {exp.description.length !== 0 && exp.description[0] !== "" && (
                <section className="col-span-2 ml-2 text-left md:ml-5 print:ml-5">
                  {exp.description.map((des, i) => (
                    <p key={i}>
                      • <span className="text-gray-500">{des}</span>
                    </p>
                  ))}
                </section>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
