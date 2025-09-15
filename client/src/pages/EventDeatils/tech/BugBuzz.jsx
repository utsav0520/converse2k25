import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { bugBuzz } from "../../../constants/eventNames";
import { PosterbugBuzz } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function BugBuzz() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Bug Buzz
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={bugBuzz} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterbugBuzz}
              alt="Bug Buzz"
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
                    <strong>Event Name:</strong> Bug Buzz
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 2
                  </li>
                  <li>
                    <strong>Date:</strong> 20th September 2025
                  </li>
                  <li>
                    <strong>Location:</strong> IT Lab - 1, 2, 4
                  </li>
                  <li>
                    <strong>Time Duration:</strong> 20 minutes each round
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    ⚙️ **Debugging Challenge** is designed to test your
                    debugging skills. Participants will be tasked with
                    identifying and fixing errors in given code within the
                    allotted time.
                  </p>
                  <p>
                    The challenge is split into two rounds with increasing
                    difficulty. The faster and more accurately you fix the code,
                    the better your chances of advancing to the next round.
                  </p>
                </div>
              </section>

              {/* Round Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round Details
                </h3>
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🔹 Round 1 – Moderate Difficulty Debugging (20 minutes)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Task: Find and fix errors in a given piece of code.
                    </li>
                    <li>⏱ Time Limit: 20 minutes</li>
                    <li>
                      🎯 Objective: Demonstrate speed and accuracy in debugging.
                    </li>
                    <li>
                      🔍 Evaluation: Based on how quickly and accurately the
                      errors are fixed.
                    </li>
                    <li>
                      ✅ Top Participants: Top performers will advance to Round
                      2.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🔹 Round 2 – Advanced Difficulty Debugging (20 minutes)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Task: Find and fix errors in a more complex piece of
                      code.
                    </li>
                    <li>⏱ Time Limit: 20 minutes</li>
                    <li>
                      🎯 Objective: Show your debugging skills in tougher, more
                      complex challenges.
                    </li>
                    <li>
                      🔍 Evaluation: Same criteria as Round 1, but with more
                      complex code.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Rules & Guidelines */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Individual participation only (no teams).</li>
                  <li>
                    Participants must identify and fix errors in the given code.
                  </li>
                  <li>
                    Mobile phones are strictly prohibited during the event.
                  </li>
                  <li>Time limit: 20 minutes for each round.</li>
                  <li>
                    Decisions made by the judges will be final and binding.
                  </li>
                </ul>
              </section>
              {/* Faculty Coordinators */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Prof. Mitual Patel</li>
                  <li>Prof. Dhyani Joshi</li>
                </ul>
              </section>
              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Jil Rupani – 9016013336</li>
                  <li>Sujalkumar Pandav – 8866006166</li>
                  <li>Renil Dholariya – 8140122805</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Kadu Parth</li>
                  <li>Jenee Chanchad</li>
                  <li>Tisha Goti</li>
                  <li>Donga Sneha</li>
                  <li>Jevin Katrodiya</li>
                  <li>Sapnil Savani</li>
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

export default BugBuzz;
