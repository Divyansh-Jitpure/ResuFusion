import express, { json } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!!" });
    }

    // Check if username already exists
    const existingUserName = await User.findOne({ username });
    if (existingUserName) {
      return res.status(400).json({ error: "Username already taken!!" });
    }

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
      return res.status(400).json({ error: "Invalid Email or password!!" });

    // Generate JWT token for auth
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, // Prevents JavaScript access for security
      secure: true, // !!! Set to true on Deployement (HTTPS)
      sameSite: "None", // Allows cross-origin cookies
      path: "/", // Ensure it's available across all routes
    });

    res.json({ message: "Login Successful!!", user });
  } catch (err) {
    res.status(500).json({ error: "Login Failed!!" });
  }
});

// Get Current Logged-In User
router.get("/me", async (req, res) => {
  const token = req.cookies.token; // Retrieve token from cookies

  // If no token is found, return unauthorized error
  if (!token) return res.status(401).json({ error: "Unauthorized!!" });

  try {
    // Verify the token and extract user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return res.status(404).json({ error: "User not found!!" });

    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: "Invalid token!!" });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // Ensure this matches the login settings
    sameSite: "None",
    path: "/", // Clear across all routes
  }); // Clear auth token from cookies
  res.status(200).json({ message: "Logged out successfully!!" });
});

export default router;
