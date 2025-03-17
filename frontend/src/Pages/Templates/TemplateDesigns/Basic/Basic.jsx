import React from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Basic = ({ resumeData }) => {
  const { personalInfo, experience, education, skills, summary } =
    resumeData || {};
  return (
    <>
      <PersonalInfo personalInfo={personalInfo} />
      <Summary summary={summary} />
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
    </>
  );
};

export default Basic;
