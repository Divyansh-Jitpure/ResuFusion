import express, { json } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Creating a new user with the hashed password
    const newUser = new User({ username, email, password: hashedPassword });

    // Saving new user to the database
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

    // Comparing input password and stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials!!" });

    // Generate JWT token for auth
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access for security
      secure: false, // !!! Set to true on Deployement (HTTPS)
      sameSite: "lax", // Controls cross-site cookie behavior
    });

    res.json({ message: "Login Successful!!", user });
  } catch (err) {
    res.status(500).json({ error: "Login Failed!!" });
  }
});

// Get Current Logged-In User
router.get("/me", (req, res) => {
  const token = req.cookies.token; // Retrieve token from cookies

  // If no token is found, return unauthorized error
  if (!token) return res.status(401).json({ error: "Unauthorized!!" });

  try {
    // Verify the token and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ userId: decoded.userId });
  } catch (err) {
    res.status(401).json({ error: "Invalid token!!" });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Clear auth token from cookies
  res.json({ message: "Logged out successfully!!" });
});

export default router;
