import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    personalInfo: {
      fullName: String,
      title: String,
      email: String,
      phone: String,
      address: String,
    },
    education: [
      {
        degree: String,
        college: String,
        city: String,
        country: String,
        startYear: Date,
        endYear: Date,
        present: {
          type: Boolean,
          default: false,
        },
      },
    ],
    experience: [
      {
        companyName: String,
        jobTitle: String,
        description: [String],
        city: String,
        country: String,
        startDate: Date,
        endDate: Date,
        present: {
          type: Boolean,
          default: false,
        },
      },
    ],
    projects: [
      {
        projectName: String,
        projectLink: String,
        techStack: String,
        description: [String],
      },
    ],
    skills: [String],
    certifications: [
      {
        certification: String,
        description: String,
      },
    ],
    languages: [
      {
        language: String,
        level: String,
      },
    ],
    hobbies: [String],
    summary: String,
    template: { type: String, required: true },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
