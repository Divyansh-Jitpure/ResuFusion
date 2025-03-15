import React from "react";

const Education = ({ education }) => {
  const formattedDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  return (
    <div className="text-center">
      <h2 className="mx-5 border-b pb-1 text-xl font-medium text-gray-700">
        Education
      </h2>
      {education.map((item, index) => {
        return (
          <div key={index} className="flex justify-between px-10 gap-2">
            <section className="flex flex-col items-start">
              <span className="text-gray-600">{item.collage}</span>
              <span className="">{item.degree}</span>
            </section>
            <section className="flex flex-col items-start">
              <article>
                <span className="text-gray-600">{item.city}</span>,{" "}
                <span>{item.country}</span>
              </article>
              <article>
                <span className="">{formattedDate(item.startYear)}</span> -{" "}
                <span className="">{formattedDate(item.endYear)}</span>
              </article>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
