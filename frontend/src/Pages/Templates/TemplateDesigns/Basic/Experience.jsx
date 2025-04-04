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
      <h2 className="mx-5 border-b pb-1 text-xl font-medium text-gray-700">
        Experience
      </h2>

      {/* Container for all experience entries */}
      <div className="flex flex-col gap-2">
        {experience.map((exp, index) => {
          return (
            <div key={index} className="grid grid-cols-2 px-10">
              {/* Company name and job title */}
              <section className="flex flex-col items-start">
                <span>{exp.companyName}</span>
                <span className="text-gray-500">{exp.jobTitle}</span>
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
              <section className="col-span-2 ml-5 text-left">
                {exp.description.map((des, i) => (
                  <p key={i}>
                    <span className="text-gray-500">{i + 1}.</span> {des}
                  </p>
                ))}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
