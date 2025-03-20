import React from "react";

const Education = ({ education }) => {
  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });

  if (education.length === 0) return "";
  return (
    <div>
      <h2 className="mx-5 border-b pb-1 text-center text-xl font-medium text-gray-700">
        Education
      </h2>
      <div className="flex flex-col gap-2">
        {education.map((item, index) => {
          return (
            <div key={index} className="mx-10 grid grid-cols-2">
              <section className="flex flex-col items-start">
                <span>{item.collage}</span>
                <span className="text-gray-500">{item.degree}</span>
              </section>
              <section className="flex flex-col items-end">
                <article>
                  <span>{item.city}</span>, <span>{item.country}</span>
                </article>
                <article className="text-gray-500">
                  <span>{formattedDate(item.startYear)}</span> -{" "}
                  <span>{formattedDate(item.endYear)}</span>
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
