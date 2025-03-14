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
        endYear: Date,
      },
    ],
    experience: [
      {
        company: String,
        role: String,
        description: [String],
        city: String,
        country: String,
        startYear: Date,
        endYear: Date, // !!!!! Make this optional later if someone is working in present and UI aswell
      },
    ],
    skills: [String],
    summary: String,
    template: { type: String, required: true },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
