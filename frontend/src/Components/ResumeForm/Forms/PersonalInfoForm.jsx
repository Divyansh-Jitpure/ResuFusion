import React from "react";
import FormWrapper from "../FormWrapper";
import { data } from "react-router";

const PersonalInfoForm = ({
  fullName,
  title,
  email,
  phoneNumber,
  address,
  updateFields,
}) => {
  return (
    <FormWrapper title="Personal Information">
      <label htmlFor="fullName">
        Full Name <span className="text-red-600">*</span>
      </label>
      <input
        autoFocus
        required
        type="text"
        name="fullName"
        placeholder="Eg. John Doe"
        title="Eg. John Doe"
        value={fullName}
        onChange={(e) => updateFields({ fullName: e.target.value })}
      />
      <label htmlFor="title">
        Title <span className="text-red-600">*</span>
      </label>
      <input
        required
        type="text"
        name="title"
        placeholder="Eg. Software Engineer"
        title="Eg. Software Engineer"
        value={title}
        onChange={(e) => updateFields({ title: e.target.value })}
      />
      <label htmlFor="email">
        Email <span className="text-red-600">*</span>
      </label>
      <input
        required
        type="email"
        name="email"
        placeholder="Eg. john.doe@example.com"
        title="Eg. john.doe@example.com"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="phoneNumber">
        Phone Number <span className="text-red-600">*</span>
      </label>
      <input
        required
        type="tel"
        name="phoneNumber"
        pattern="^\+?[0-9]{10,15}$"
        placeholder="Eg. 9876543210, +919876543210"
        title="Phone number should be 10-15 digits long and can start with +
                        Eg. 9876543210, +919876543210"
        value={phoneNumber}
        onChange={(e) => updateFields({ phoneNumber: e.target.value })}
      />
      <label htmlFor="address">
        Address <span className="text-red-600">*</span>
      </label>
      <textarea
        required
        name="address"
        placeholder="Eg. 123 Main St, City, Country"
        title="Eg. 123 Main St, City, Country"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
      />
    </FormWrapper>
  );
};

export default PersonalInfoForm;
