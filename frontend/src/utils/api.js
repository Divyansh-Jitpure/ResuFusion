import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Setting up Axios instance with base configuration
const API = axios.create({
  baseURL: process.env.API_BASE_URL, // Backend API URL
  headers: { "Content-Type": "application/json" }, // Default headers
  withCredentials: true, // Ensures cookies are sent with requests
});

export default API;
