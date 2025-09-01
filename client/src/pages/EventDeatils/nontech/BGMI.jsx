import React from "react";
import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterBGMI } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function BGMI() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "BGMI",
          link: "https://forms.gle/bcmVaTYjdh7uoGGK8",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterBGMI}
              alt="AI Memes"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Description
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> BGMI Tournament
                  </p>
                  <p>
                    <strong>Mode:</strong> Classic (Squad)
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> ₹100 per Team
                  </p>
                  <p>
                    <strong>Qualifiers:</strong> Online matches (Top teams
                    advance to LAN Finals)
                  </p>
                </div>
              </section>

              {/* Point System */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Point System
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    ⚔️ <strong>Kill Point:</strong> 1 point per kill
                  </p>
                  <p className="font-semibold mt-2">🏅 Placement Points:</p>
                  <ul className="list-disc pl-5">
                    <li>1st : 10 pts</li>
                    <li>2nd : 6 pts</li>
                    <li>3rd : 5 pts</li>
                    <li>4th : 4 pts</li>
                    <li>5th : 3 pts</li>
                    <li>6th : 2 pts</li>
                    <li>7th : 1 pt</li>
                    <li>8th : 1 pt</li>
                  </ul>
                </div>
              </section>

              {/* Tie-Breaker */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Tie-Breaker Rules
                </h3>
                <ol className="text-gray-300 list-decimal pl-5 space-y-1">
                  <li>WWCD (Winner Winner Chicken Dinner)</li>
                  <li>Position Points</li>
                  <li>Kill Points</li>
                </ol>
              </section>

              {/* Schedule */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Match Schedule
                </h3>
                <p className="text-gray-300">📅 To be announced later.</p>
              </section>

              {/* LAN Facilities */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  LAN Facilities
                </h3>
                <p className="text-gray-300">
                  🎮 Advanced room card will be provided. <br />❌ Network &
                  devices will NOT be provided.
                </p>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Players can be from any college but must be present at venue
                    if they qualify for finals.
                  </li>
                  <li>Minimum BGMI ID level 40 required.</li>
                  <li>
                    POV may be asked for online qualifiers. Failure →
                    disqualification.
                  </li>
                  <li>Screenshot of results is mandatory.</li>
                  <li>
                    Players must join room 5 mins before start, else seat may be
                    lost.
                  </li>
                  <li>
                    🚫 Emergency Pickup not allowed. Using it → 0 pts, opponents
                    +10 pts.
                  </li>
                  <li>🚫 Self Revive Kit usage → Direct disqualification.</li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🏆 Exciting Rewards Await the Champions!
                </p>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Rushabh Devani - 8980005030</li>
                  <li>Aryan Pandey - 8780912463</li>
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

export default BGMI;
