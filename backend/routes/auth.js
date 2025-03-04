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

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found!!" });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials!!" });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Store token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({ message: "Login Successfull!!" });
  } catch (err) {
    res.status(500).json({ error: "Login Failed!!" });
  }
});

router.get("/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ error: "Unauthorized!!" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ userId: decoded.userId });
  } catch (err) {
    res.status(401).json({ error: "Invalid token!!" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully!!" });
});

export default router;
