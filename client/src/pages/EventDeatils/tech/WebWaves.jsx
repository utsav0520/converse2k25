import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { webWave } from "../../../constants/eventNames";
import { PosterwebWave } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function WebWaves() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Web Wave
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={webWave} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterwebWave}
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
                    <strong>Event Name:</strong> Web Wave
                  </li>
                  <li>
                    <strong>Date:</strong> 20th September 2025
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 1
                  </li>
                  <li>
                    <strong>Time Duration for Each Round:</strong> 30 minutes
                  </li>
                  <li>
                    <strong>Location:</strong> IT Lab - 4, 5
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 Web Wave – A Web Design Showdown</p>
                  <p>
                    Web Wave is a fast-paced event where participants must
                    showcase their web design skills in 30 minutes.
                  </p>
                  <p>
                    The focus is on UI/UX design, creativity, and usability,
                    with a strong emphasis on visual appeal and responsiveness.
                  </p>
                </div>
              </section>

              {/* Round Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round Details
                </h3>

                {/* Round 1: Web Design */}
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🛠️ Round 1: Web Design Challenge
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Format: Design a web page based on the given theme
                    </li>
                    <li>⏱ Time Limit: 30 minutes</li>
                    <li>
                      🌐 Tools Allowed: ChatGPT AI tool (no other resources)
                    </li>
                    <li>🎯 Focus: UI/UX design, layout, and responsiveness</li>
                    <li>
                      ✅ Evaluation Criteria:
                      <ul className="text-gray-300 list-disc pl-6 space-y-1">
                        <li>Theme relevance</li>
                        <li>User Interface & User Experience (UI/UX)</li>
                        <li>Layout, typography, and color usage</li>
                        <li>Overall creativity</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>
              {/* Faculty Coordinators */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Prof. Vivek Champaneriya</li>
                  <li>Prof. Mitul Patel</li>
                </ul>
              </section>
              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Krishna Panchal - 9913590160</li>
                  <li>Manan Chovatiya - 9825611276</li>
                  <li>Nency Khunt - 8401295762</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Vishva Bharodia</li>
                  <li>Krish Kakadiya</li>
                  <li>Utsav Davaria</li>
                  <li>Sakshi Jain</li>
                  <li>Fenil Patel</li>
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

export default WebWaves;
