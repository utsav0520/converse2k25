import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };

/**
 * Save participant details to Firebase Realtime Database
 * @param {Object} details - Participant details
 * @param {string} details.name
 * @param {string} details.mobile
 * @param {string} details.email
 * @param {string} details.enroll
 * @param {string} details.year
 * @param {string} details.branch
 * @param {string} details.eventName
 */

function saveParticipantforOneMemeber(details) {
  const {
    fullName,
    mobileNumber,
    email,
    enrollment,
    department,
    college,
    year,
    eventName,
  } = details;

  const participantRef = ref(database, `participants`);

  push(participantRef, {
    fullName,
    mobileNumber,
    email,
    enrollment,
    department,
    college,
    year,
    eventName,
  })
    .then(() => {
      console.log("Participant details saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving participant details:", error);
    });
}

function saveParticipantforTwoMemeber(team, eventName) {
  const participantRef = ref(database, `participants`);
  push(participantRef, {
    fullName1: team[0].fullName || "",
    fullName2: team[1].fullName || "",
    mobileNumber1: team[0].mobileNumber || "",
    mobileNumber2: team[1].mobileNumber || "",
    email1: team[0].email || "",
    email2: team[1].email || "",
    enrollment1: team[0].enrollment || "",
    enrollment2: team[1].enrollment || "",
    department1: team[0].department || "",
    department2: team[1].department || "",
    year1: team[0].year || "",
    year2: team[1].year || "",
    college1: team[0].college || "",
    college2: team[1].college || "",
    eventName: eventName,
  })
    .then(() => {
      console.log("Participant details saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving participant details:", error);
    });
}

export { saveParticipantforOneMemeber, saveParticipantforTwoMemeber };
