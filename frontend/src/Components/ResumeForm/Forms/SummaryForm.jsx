import React from "react";
import FormWrapper from "../FormWrapper";

const SummaryForm = ({ summary, updateFields }) => {
  return (
    <FormWrapper title="Summary">
      <textarea
        className="col-end-1 w-[418px]"
        name="summary"
        rows="3"
        required
        placeholder="Write your summary here"
        value={summary}
        onChange={(e) => updateFields({ summary: e.target.value })}
      />
    </FormWrapper>
  );
};

export default SummaryForm;
