import React from "react";
import FormWrapper from "../FormWrapper";

const PersonalInfoForm = ({
  fullName,
  email,
  phoneNumber,
  address,
  updateFields,
}) => {
  return (
    <FormWrapper title="Personal Information">
      <label htmlFor="fullName">Full Name</label>
      <input
        autoFocus
        required
        type="text"
        name="fullName"
        placeholder="Enter Full Name"
        value={fullName}
        onChange={(e) => updateFields({ fullName: e.target.value })}
      />
      <label htmlFor="email">Email </label>
      <input
        required
        type="email"
        name="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        required
        type="tel"
        name="phoneNumber"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
      <label htmlFor="address">Address </label>
      <textarea
        required
        name="address"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
      />
    </FormWrapper>
  );
};

export default PersonalInfoForm;
