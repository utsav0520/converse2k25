import nodemailer from "nodemailer";
import dotenv from "dotenv";

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: Verify email transporter at startup
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email config error:", error.message);
  } else {
    console.log("✅ Email transporter is working");
  }
});

const sendMail = async (to, subject, html, text) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html,
      text,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const sendEmailForOneEvent = async (user, eventName) => {
  try {
    if (!user?.email) throw new Error("User email is required");

    const filePath = path.join(__dirname, "templates", "eventOne.html");
    let htmlContent = await fs.readFile(filePath, "utf-8");

    const customizedHtml = htmlContent
      .replace(/{{USER_NAME}}/g, user.fullName || "Participant")
      .replace(/{{EVENT_NAME}}/g, eventName.event || "an event");

    const subject = `🎉 Congratulations, ${user.fullName}! You are registered for ${eventName.event}`;
    const messageText = `
Hello ${user.fullName},

🎉 Congratulations! You have successfully registered for the event: ${eventName.event}.

We're thrilled to have you on board! 🚀

Make sure to:
- ⏰ Be on time and follow the event schedule
- 🎯 Give your best and enjoy the competition
- 📝 Register for more events — there's something for everyone!

👉 Check out the full schedule, event details, and updates on our website:
https://converse2k25.vercel.app/

Let’s make it a day to remember. Good luck and see you there! 🎉

Regards,  
Team Converse2k25
`.trim();

    await sendMail(user.email, subject, customizedHtml, messageText);

    console.log(
      `✅ Confirmation email sent to ${user.email} for event: ${eventName.event}`
    );
  } catch (error) {
    console.error("❌ Error sending event registration email:", error.message);
    throw new Error("Failed to send registration confirmation email");
  }
};

export const sendEmailForTeamEvent = async (user, eventName, team = []) => {
  try {
    console.log("Sending email for team event registration...");

    if (!user?.email) throw new Error("User email is required");

    const filePath = path.join(__dirname, "templates", "eventTeam.html");
    let htmlContent = await fs.readFile(filePath, "utf-8");

    const customizedHtml = htmlContent
      .replace(/{{USER_NAME}}/g, user.fullName || "Participant")
      .replace(/{{EVENT_NAME}}/g, eventName || "an event");

    // Create team summary
    const teamListHtml = team.length
      ? `
        <p>You're part of a team registered for this event. Here's your team:</p>
        <ul>
          ${team
            .map((member) => `<li>${member.fullName} (${member.email})</li>`)
            .join("")}
        </ul>`
      : `<p>This is a solo event registration.</p>`;

    const customizedHtmlWithTeam = customizedHtml.replace(
      "{{TEAM_LIST}}",
      teamListHtml
    );

    const teamListText = team
      .map((member) => `- ${member.fullName} (${member.email})`)
      .join("\n");

    const messageText = `
Hello ${user.fullName},

🎉 Congratulations! Your team has successfully registered for the event: ${eventName}.

👥 Team Members:
${teamListText || "- No team members listed."}

We're thrilled to have you on board! 🚀

Make sure to:
- ⏰ Be on time and follow the event schedule
- 🎯 Work together and enjoy the competition
- 📝 Register for more events — there's something for everyone!

👉 Check out the full schedule and updates on our website:
https://converse2k25.vercel.app/

Let’s make it a day to remember. Good luck and see you there! 🎉

Regards,  
Team Converse2k25
`.trim();

    await sendMail(
      user.email,
      `🎉 You're registered for ${eventName}`,
      customizedHtmlWithTeam,
      messageText
    );

    console.log(`✅ Confirmation email sent to ${user.email}`);
  } catch (error) {
    console.error("❌ Email send error:", error.message);
    throw new Error("Failed to send team registration email");
  }
};
