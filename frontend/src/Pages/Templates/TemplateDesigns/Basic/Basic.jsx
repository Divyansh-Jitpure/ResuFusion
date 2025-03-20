import React from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Languages from "./Languages";

const Basic = ({ resumeData }) => {
  const {
    personalInfo,
    experience,
    education,
    skills,
    summary,
    certifications,
    projects,
    languages,
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
      <Languages languages={languages} />
    </>
  );
};

export default Basic;
