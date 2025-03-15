import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newResume = new Resume(data);
    const savedResume = await newResume.save();
    // console.log(data);
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(500).json({ message: "Sever Error", err });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const resumes = await Resume.find({ userId });
    // console.log(resumes);
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ message: "Sever Error", err });
  }
});

router.get("/:userId/:resumeId", async (req, res) => {
  try {
    const { userId, resumeId } = req.params;
    const resume = await Resume.findOne({ _id: resumeId, userId });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found!!!" });
    }
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({ message: "Sever Error", err });
  }
});

router.delete("/:userId/:resumeId", async (req, res) => {
  try {
    const { userId, resumeId } = req.params;
    await Resume.deleteOne({ _id: resumeId, userId });
    res.status(200).json({ message: "Resume Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ message: "Resume not found!!!", err });
  }
});

export default router;
