import React from "react";
import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterEscapeRoom } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function EscapeRoom() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "EscapeRoom",
          link: "https://forms.gle/1Cwf43mwpDZf1CgJA",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterEscapeRoom}
              alt="AI Memes"
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
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> Escape Room
                  </p>
                  <p>
                    <strong>Players:</strong> Duo (2 members per team)
                  </p>
                  <p>
                    <strong>Goal:</strong> Escape from the room before the timer
                    ends.
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> ₹40 per Duo
                  </p>
                </div>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    🧠 A room of puzzles stands between you and freedom. Each
                    level gives a digit/code piece. Collect them all to unlock
                    the final door. But beware – challenges increase in
                    difficulty!
                  </p>
                  <p>
                    🎯 Teamwork, observation, and sharp thinking are your
                    greatest tools.
                  </p>
                </div>
              </section>

              {/* Level Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Level Details
                </h3>

                <div className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">
                      🔐 Level 1: Box of Keys
                    </h4>
                    <ul className="list-disc pl-5">
                      <li>
                        Search through a set of keys to find the correct one.
                      </li>
                      <li>Unlock the box to reveal the first clue.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      ⚡ Level 2: Buzz Wire
                    </h4>
                    <ul className="list-disc pl-5">
                      <li>
                        Guide the loop carefully without touching the wire.
                      </li>
                      <li>Claim your next clue if successful.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      🧩 Level 3: Observational Puzzle
                    </h4>
                    <ul className="list-disc pl-5">
                      <li>Solve an image-based pattern puzzle.</li>
                      <li>Use clues from Level 2 to decode it.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">
                      ♟️ Level 4: Mind Game
                    </h4>
                    <ul className="list-disc pl-5">
                      <li>
                        A tricky logic puzzle that uses the hidden clue from
                        Level 1.
                      </li>
                      <li>Combine insights to unlock the last digit.</li>
                    </ul>
                  </div>

                  <p className="text-yellow-300 italic">
                    🚪 Final Door Has a Catch — Stay Sharp!
                  </p>
                </div>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Teams must complete levels in sequence. Skipping is not
                    allowed.
                  </li>
                  <li>
                    All props must be handled carefully. Damaging items will
                    lead to disqualification.
                  </li>
                  <li>
                    The game must be completed within the time limit to escape
                    successfully.
                  </li>
                  <li>
                    Teamwork is essential – both players must actively
                    participate.
                  </li>
                  <li>
                    Only one team will enter at a time. Spectators are not
                    allowed.
                  </li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🏆 The Exciting Prize Awaits the Winners!
                </p>
              </section>
              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Snehal Rapolu - 7989844724</li>
                  <li>Kush Patel - 7984136547</li>
                  <li>Gediya Dwarkesh - 7779013444</li>
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

export default EscapeRoom;
