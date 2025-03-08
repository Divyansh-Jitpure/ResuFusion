import React from "react";
import FormWrapper from "../FormWrapper";

const EducationForm = ({
  degree,
  collage,
  location,
  startYear,
  endYear,
  updateFields,
}) => {
  return (
    <FormWrapper title="Education">
      <label htmlFor="degree">Degree</label>
      <input
        autoFocus
        required
        type="text"
        name="degree"
        value={degree}
        onChange={(e) => updateFields({ degree: e.target.value })}
      />
      <label htmlFor="collage">University/College</label>
      <input
        required
        type="text"
        name="collage"
        value={collage}
        onChange={(e) => updateFields({ collage: e.target.value })}
      />
      <label htmlFor="location">Location </label>
      <input
        required
        type="text"
        name="location"
        value={location}
        onChange={(e) => updateFields({ location: e.target.value })}
      />
      <label htmlFor="startYear">Start Year</label>
      <input
        required
        type="date"
        name="startYear"
        value={startYear}
        onChange={(e) => updateFields({ startYear: e.target.value })}
      />
      <label htmlFor="endYear">End Year</label>
      <input
        required
        type="date"
        name="endYear"
        value={endYear}
        onChange={(e) => updateFields({ endYear: e.target.value })}
      />
    </FormWrapper>
  );
};

export default EducationForm;
