import React from "react";

const Education = ({ education }) => {
  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  if (education.length === 0) return "";
  return (
    <div className="no-break">
      <h2 className="mx-2 border-b pb-1 text-center text-xs font-medium text-gray-700 md:mx-5 md:text-xl print:mx-5 print:text-xl">
        Education
      </h2>
      <div className="flex flex-col gap-2 text-[8px] md:text-base print:text-base">
        {education.map((item, index) => {
          return (
            <div
              key={index}
              className="mx-4 grid grid-cols-2 md:mx-10 print:mx-10"
            >
              <section className="flex flex-col items-start">
                <span>{item.college}</span>
                <span className="text-gray-500">{item.degree}</span>
              </section>
              <section className="flex flex-col items-end">
                <article>
                  <span>{item.city}</span>, <span>{item.country}</span>
                </article>
                <article className="text-gray-500">
                  <span>{formattedDate(item.startYear)}</span> -{" "}
                  {item.present ? (
                    <span>Present</span>
                  ) : (
                    formattedDate(item.endYear)
                  )}
                </article>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
