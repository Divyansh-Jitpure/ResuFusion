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
        location: String,
        startYear: Date,
        endYear: Date,
      },
    ],
    skills: [String],
    template: { type: String, required: true },
  },
  { timestamps: true }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
