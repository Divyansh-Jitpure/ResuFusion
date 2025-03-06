import mongoose from "mongoose";

// User schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt
);

// User model from the schema
const User = mongoose.model("User", UserSchema);

export default User;
