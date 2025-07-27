import jwt from "jsonwebtoken";
import Person from "../models/user/person.js";

export const addedOneEvent = async (req, res) => {
  try {
    const userId = req.userId;
    const { eventName } = req.body;

    if (!userId || !eventName) {
      return res.status(400).json({ message: "User ID or Event name missing" });
    }
    const updatePath = `events.${eventName.event}`;
    const update = { [updatePath]: true };
    const user = await Person.findByIdAndUpdate(
      userId,
      { $set: update },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate new JWT token with updated user
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.status(200).json({
      success: true,
      message: `Registered for ${eventName}`,
      user,
      token: jwtToken,
    });
  } catch (error) {
    console.error("❌ Event registration error:", error);
    return res.status(500).json({ message: "Failed to register for event" });
  }
};

export const addedTeamEvent = async (req, res) => {
 try {
  res.status(200).json({
      success: true,
    });
 } catch (error) {
  
 }
};

export const fetchEmails = async (req, res) => {
  try {
    const { eventName } = req.query;

    if (!eventName) {
      return res.status(400).json({ message: "Event name is required" });
    }

    const query = {};
    query[`events.${eventName}`] = false;

    const users = await Person.find(query).select("email");
    const emails = users.map((user) => user.email);

    res.status(200).json({
      success: true,
      event: eventName,
      unregisteredEmails: emails,
      count: emails.length,
    });
  } catch (error) {
    console.error("❌ Fetch emails error:", error);
    return res.status(500).json({ message: "Failed to fetch emails" });
  }
};
