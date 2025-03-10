import express from "express";
import Resume from "../models/Resume.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newResume = new Resume(data);
    await newResume.save();
    // console.log(data);
    res.status(201).json({ message: "Resume Details Saved Successfully!!!" });
  } catch (err) {
    res.status(500).json({ message: "Sever Error", err });
  }
});

// Implement this later !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// router.get("/:userID", async (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json({ message: "Sever Error", err });
//   }
// });

export default router;
