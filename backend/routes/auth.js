import express, { json } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User
    const newUser = new User({ username, email, password: hashedPassword });

    // Save to DB
    await newUser.save();

    res.status(201).json({ message: "User Registered Successfully!!" });
  } catch (err) {
    res.status(500).json({ error: "Registration Failed!!" });
  }
});
