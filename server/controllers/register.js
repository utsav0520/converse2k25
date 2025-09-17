import jwt from "jsonwebtoken";
import Person from "../models/user/person.js";
import {
  sendEmailForOneEvent,
  sendEmailForTeamEvent,
} from "../utils/sendMessage.js";
import { saveParticipantforOneMemeber, saveParticipantforTwoMemeber } from "../firebase.js";

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

    await saveParticipantforOneMemeber({
      fullName: user.fullName || "",
      email: user.email || "",
      year: user.year || "",
      mobileNumber: user.mobileNumber || "",
      enrollment: user.enrollment || "",
      department: user.department || "",
      college: user.college || "",
      eventName: eventName.event || "",
    });

    // Generate new JWT token with updated user
    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // await sendEmailForOneEvent(user, eventName);

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
    const userId = req.userId;
    const { eventName, email } = req.body;

    if (
      !userId ||
      !eventName ||
      !Array.isArray(email) ||
      email.length === 0 ||
      email.length > 2
    ) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Find leader
    const leader = await Person.findById(userId);
    if (!leader) return res.status(404).json({ message: "Leader not found" });

    // Fetch members
    const members = await Person.find({ email: { $in: email } });
    if (members.length !== email.length) {
      return res.status(400).json({ message: "Some team members not found" });
    }

    // Final team (leader + members)
    const team = [leader, ...members];

    // Check if any already registered
    const alreadyRegistered = team.find(
      (person) => person.events[eventName] === true
    );
    if (alreadyRegistered) {
      return res.status(400).json({
        message: `${alreadyRegistered.fullName} is already registered for ${eventName}`,
      });
    }

    // Build event paths
    const updateFlagPath = `events.${eventName}`;
    const updateTeamPath = `events.${eventName}Team`;

    // For each member: set their flag and team (excluding themselves)
    // console.log(team);
    for (const person of team) {
      const teamWithoutSelf = team
        .filter((p) => p.email !== person.email)
        .map((p) => ({
          member: p._id,
          email: p.email,
          fullName: p.fullName,
        }));

      person.set(updateFlagPath, true);
      person.set(updateTeamPath, teamWithoutSelf);
      await person.save();
    }

    saveParticipantforTwoMemeber(team, eventName);

    for (const person of team) {
      sendEmailForTeamEvent(person, eventName, team).catch((err) => {
        console.error(
          `❌ Failed to send email to ${person.email}: ${err.message}`
        );
      });
    }
    // Create updated JWT token for leader
    const token = jwt.sign({ id: leader._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      message: `Team registered for ${eventName}`,
      user: leader,
      token,
    });
  } catch (error) {
    console.error("❌ Team registration error:", error);
    res.status(500).json({ message: "Server error while registering team" });
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
