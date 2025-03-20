import React from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";

const Basic = ({ resumeData }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    summary,
    certifications,
    projects,
  } = resumeData || {};
  return (
    <>
      <PersonalInfo personalInfo={personalInfo} />
      <Summary summary={summary} />
      <Experience experience={experience} />
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Certifications certifications={certifications} />
    </>
  );
};

export default Basic;
