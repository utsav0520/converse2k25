import mongoose from "mongoose";

const { Schema } = mongoose;

const personSchema = new Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    googleId: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      trim: true,
    },
    enrollment: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      enum: ["1", "2", "3", "4"],
      trim: true,
    },
    department: {
      type: String,
      trim: true,
    },
    college: {
      type: String,
      trim: true,
    },
    events: {
      logoHunt: { type: Boolean, required: true, default: false },    
      bugBuzz: { type: Boolean, required: true, default: false },
      codathon: { type: Boolean, required: true, default: false },
      webWave: { type: Boolean, required: true, default: false },
      cyberSpy: { type: Boolean, required: true, default: false },
      itaiQuiz: { type: Boolean, required: true, default: false },
      promptHunt: { type: Boolean, required: true, default: false },
      aiMemes: { type: Boolean, required: true, default: false },
      pyIt: { type: Boolean, required: true, default: false },

      codathonTeam: [
        {
          member: {
            type: Schema.Types.ObjectId,
            ref: "Person",
            required: true,
          },
          email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
          },
          fullName: {
            type: String,
            required: true,
            trim: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Person", personSchema);
