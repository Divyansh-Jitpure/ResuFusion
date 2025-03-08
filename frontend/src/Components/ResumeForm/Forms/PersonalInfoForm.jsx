import React from "react";
import FormWrapper from "../FormWrapper";

const PersonalInfoForm = () => {
  return (
    <FormWrapper title="Personal Information">
      <label htmlFor="fullName">Full Name</label>
      <input autoFocus required type="text" name="fullName" />
      <label htmlFor="email">Email </label>
      <input required type="email" name="email" />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input required type="tel" name="phoneNumber" />
      <label htmlFor="address">Address </label>
      <input required type="text" name="address" />
    </FormWrapper>
  );
};

export default PersonalInfoForm;
