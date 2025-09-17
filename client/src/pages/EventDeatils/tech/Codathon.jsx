import React from "react";
import RegisterButtonFotTeam from "../../../components/App/RegisterButtonFotTeam.jsx";
import { codathon } from "../../../constants/eventNames.js";
import { PosterCodathon } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function Codathon() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Codathon
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButtonFotTeam event={codathon} min={1} max={1} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterCodathon}
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
                    <strong>Event Name:</strong> Codathon
                  </li>
                  <li>
                    <strong>Date:</strong> 19th September 2024
                  </li>
                  <li>
                    <strong>Event Duration:</strong> 60 minutes
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 1
                  </li>
                  <li>
                    <strong>Location:</strong> IT Lab - 1, 2, 3
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 Codathon – A Coding Duo Showdown</p>
                  <p>
                    Step into the ultimate coding challenge where adaptability
                    is as important as logic!
                  </p>
                  <p>
                    Codathon pushes coders out of their comfort zone with
                    unexpected twists – from relay coding to blind logic
                    building.
                  </p>
                  <p>
                    One round. Zero shortcuts. Do you have what it takes? 💡💻
                  </p>
                </div>
              </section>

              {/* The Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  The Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>👥 Team Format: 2 members per team</li>
                  <li>💻 Task: Solve a set of coding problems</li>
                  <li>
                    🔄 Twist: The contest will follow a relay coding format –
                    the first member codes for 30 minutes, then the second
                    member continues from there.
                  </li>
                  <li>⏱ Duration: 60 minutes</li>
                  <li>⚡ Scoring: Accuracy + Time</li>
                  <li>🏆 Final Winners: Chosen on the highest score</li>
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Each team must have exactly 2 members.</li>
                  <li>
                    The contest will follow a relay coding format – the first
                    member codes for 30 minutes, then the second member
                    continues from there.
                  </li>
                  <li>
                    The winner will be decided based on accuracy of solutions
                    and time taken to complete the tasks.
                  </li>
                </ul>
              </section>

              {/* Faculty Coordinator */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinator
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Prof. Hiren Vavaiya</li>
                  <li>Prof. Ankit Patel</li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Deep Patel - +91 81530 76229</li>
                  <li>Vishva Gohil - +91 72659 77700</li>
                  <li>Manan Chodvadiya - +91 99097 67205</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Shlok Savaliya</li>
                  <li>Moksha Italiya</li>
                  <li>Kenvi Chaklasiya</li>
                  <li>Krish Patel</li>
                  <li>Bansi Goyani</li>
                  <li>Briya Mavani</li>
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

export default Codathon;
