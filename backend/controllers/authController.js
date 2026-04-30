import bcrypt from "bcrypt";
import { createUser, findUserByEmail } from "../models/userModel.js";

// SIGNUP
export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(fullname, email, hashedPassword, (err, result) => {
      if (err) {
        console.log("DB error" , err);
        return res.status(500).json({ message: err.message });
      }
      res.json({ message: "User registered successfully" });
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
export const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // ✅ Basic success response (no JWT)
    res.json({ message: "Login successful", user });
  });
};