import React from "react";

const EducationForm = () => {
  return (
    <>
      <label htmlFor="degree"></label>
      <input type="text" name="degree" />
      <label htmlFor="collage"></label>
      <input type="text" name="collage" />
      <label htmlFor="location"></label>
      <input type="text" name="location" />
      <label htmlFor="startYear"></label>
      <input type="date" name="startYear" />
      <label htmlFor="endYear"></label>
      <input type="date" name="endYear" />
    </>
  );
};

export default EducationForm;
