import React from "react";
import FormWrapper from "../FormWrapper";

const SummaryForm = ({ summary, updateFields }) => {
  return (
    <FormWrapper title="Summary">
      <textarea
        style={{
          gridColumn: "span 2",
        }}
        name="summary"
        rows="3"
        cols="50"
        // required
        placeholder="Write your summary here"
        value={summary}
        onChange={(e) => updateFields({ summary: e.target.value })}
      />
    </FormWrapper>
  );
};

export default SummaryForm;
