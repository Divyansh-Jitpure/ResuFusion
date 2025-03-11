import React from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";

const Basic = ({ resumeData }) => {
  const { personalInfo, education, skills, summary } = resumeData || {};
  return (
    <>
      <PersonalInfo personalInfo={personalInfo} />
      <Summary summary={summary} />
      <Education education={education} />
      <Skills skills={skills} />
    </>
  );
};

export default Basic;
