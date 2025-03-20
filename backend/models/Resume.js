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
        collage: String,
        city: String,
        country: String,
        startYear: Date,
        endYear: Date, // !!!!! Make this optional later if someone is working in present and UI aswell
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
        endDate: Date, // !!!!! Make this optional later if someone is working in present and UI aswell
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
