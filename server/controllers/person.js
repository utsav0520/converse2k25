import Person from "../models/user/person.js";
import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Person.findById(decoded.id); 

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({ user, token: jwtToken });
  } catch (err) {
    console.error("Error fetching profile:", err);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
};

export const googleSignIn = async (req, res) => {
  try {
    const { fullName, email, googleId } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    let user = await Person.findOne({ email });

    if (!user) {
      user = new Person({
        fullName,
        email,
        googleId,
      });
      await user.save();
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      user,
      token: jwtToken,
    });

    console.log("Google login Done");
  } catch (error) {
    console.error("❌ Google Sign-in Error:", error);
    res.status(500).json({ message: "Google sign-in failed" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const updates = req.body;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await Person.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      user,
      token: jwtToken,
    });
  } catch (error) {
    console.error("❌ Profile update error:", error);
    return res.status(500).json({ message: "Profile update failed" });
  }
};
