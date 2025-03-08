import React from "react";

const PersonalInfoForm = () => {
  return (
    <>
      <label htmlFor="fullName"></label>
      <input type="text" name="fullName" />
      <label htmlFor="email"></label>
      <input type="email" name="email" />
      <label htmlFor="phoneNumber"></label>
      <input type="tel" name="phoneNumber" />
      <label htmlFor="address"></label>
      <input type="text" name="address" />
    </>
  );
};

export default PersonalInfoForm;
