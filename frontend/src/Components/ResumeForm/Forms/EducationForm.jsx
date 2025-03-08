import React from "react";
import FormWrapper from "../FormWrapper";

const EducationForm = () => {
  return (
    <FormWrapper title="Education">
      <label htmlFor="degree">Degree</label>
      <input autoFocus required type="text" name="degree" />
      <label htmlFor="collage">University/College</label>
      <input required type="text" name="collage" />
      <label htmlFor="location">Location </label>
      <input required type="text" name="location" />
      <label htmlFor="startYear">Start Year</label>
      <input required type="date" name="startYear" />
      <label htmlFor="endYear">End Year</label>
      <input required type="date" name="endYear" />
    </FormWrapper>
  );
};

export default EducationForm;
