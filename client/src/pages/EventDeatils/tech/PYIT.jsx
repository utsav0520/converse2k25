import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { pyIt } from "../../../constants/eventNames";
import { PosterPYIT } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function PYIT() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        PY - IT
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={pyIt} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterPYIT}
              alt="PYIT"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Description
                </h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Event Name:</strong> PY-IT
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 3
                  </li>
                  <li>
                    <strong>Round Details:</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Round 1:</strong> 19th September 2025 – IT Lab
                        1, 2, 3
                      </li>
                      <li>
                        <strong>Round 2:</strong> 20th September 2025 – IT Lab 3
                      </li>
                      <li>
                        <strong>Round 3:</strong> 20th September 2025 – IT Lab 3
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Time Duration for Each Round:</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Round 1: 1 hour</li>
                      <li>Round 2: 1 hour</li>
                      <li>Round 3: Depending on the number of students</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 PY-IT – The Ultimate IT Talent Showdown</p>
                  <p>
                    Prepare for an intellectually stimulating competition with
                    multiple rounds focusing on your aptitude, AI skills, and
                    mock interview readiness.
                  </p>
                  <p>
                    From solving logic puzzles to creating AI-powered resumes,
                    this event pushes you to prove your all-round skills!
                  </p>
                  <p>Can you stand out as the ultimate IT talent? 💡💻</p>
                </div>
              </section>

              {/* The Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  The Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>👥 Team Format: Individual participation</li>
                  <li>
                    💻 Tasks: Aptitude, AI Resume Challenge, Mock Interview
                  </li>
                  <li>⏱ Duration: Varies by round</li>
                  <li>⚡ Scoring: Accuracy + Time + Creativity</li>
                  <li>
                    🏆 Final Winners: Chosen on highest score across all rounds
                  </li>
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Each participant must register before the event begins.
                  </li>
                  <li>
                    No unfair means or external assistance allowed during the
                    rounds.
                  </li>
                  <li>
                    Participants must arrive on time; latecomers may not be
                    allowed.
                  </li>
                  <li>
                    Decisions made by judges and faculty are final and binding.
                  </li>
                </ul>
              </section>

              {/* Round 1 - Aptitude & Logic */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 1 – Aptitude & Logic
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Format: 50 MCQs (Logic + Aptitude + Basic Programming
                    Languages)
                  </li>
                  <li>Duration: 30 minutes (Moodle)</li>
                  <li>
                    Top 50% of participants will qualify for the next round.
                  </li>
                  <li>
                    Auto-checking system will be used; results will be announced
                    within 15 minutes.
                  </li>
                </ul>
              </section>

              {/* Round 2 - AI Resume Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 2 – AI Resume Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Create a 1-page resume using AI tools for a given job role.
                  </li>
                  <li>
                    Roles include: Software Engineer, Data Analyst, Cloud
                    Engineer, etc.
                  </li>
                  <li>Duration: 40 minutes.</li>
                  <li>
                    Submit resume as PDF on Google Classroom within the time
                    limit.
                  </li>
                  <li>Evaluation Criteria:</li>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>40% Relevance to job role</li>
                    <li>30% Design & formatting</li>
                    <li>30% Originality</li>
                  </ul>
                </ul>
              </section>

              {/* Round 3 - Mock Interview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 3 – Mock Interview
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Each participant will face a panel interview.</li>
                  <li>
                    Format: 2 min self-introduction, 4 min technical questions,
                    4 min HR questions
                  </li>
                  <li>Scoring Criteria:</li>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>50% Technical Knowledge</li>
                    <li>30% Communication Skills</li>
                    <li>20% Personality & Confidence</li>
                  </ul>
                  <li>
                    Winners will be announced on the same day after interviews.
                  </li>
                </ul>
              </section>

              {/* Faculty Coordinator */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dr. Vivaksha Jariwala</li>
                  <li>Prof. Mukesh Patel</li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Tanisha Agarwal - 8780700877</li>
                  <li>Het Salamvala - 7984184329</li>
                  <li>Krishna Shethana - 9662713322</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Harshil Parmar</li>
                  <li>Huzefa Mandviwala</li>
                  <li>Vivek Panchal</li>
                  <li>Aryan Patel</li>
                  <li>Anushka Tandel</li>
                  <li>Hetvi Patel</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes twinklingStars {
            0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
            50% { transform: rotate(180deg) scale(1.05); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.5; }
          }
          .animate-twinkling-stars {
            width: 200vw;
            height: 200vw;
            background: radial-gradient(at 50% 50%, transparent 30%, #1a0033 70%);
            border-radius: 50%;
            animation: twinklingStars 25s linear infinite;
            filter: blur(20px);
            opacity: 0.7;
          }
          .animate-neon-glow::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(90, 24, 154, 0.5), rgba(0, 255, 255, 0.5));
            border-radius: 50%;
            filter: blur(120px);
            animation: neonGlow 3.5s infinite ease-in-out;
            z-index: -1;
          }
          h1, h2, h3 {
            font-family: 'Inter', sans-serif;
            letter-spacing: -0.025em;
          }
        `}
      </style>
      <BackToEvent />
    </div>
  );
}

export default PYIT;
