import React from "react";
import RegisterButtonFotTeam from "../../../components/App/RegisterButtonFotTeam.jsx";
import { blindSwap } from "../../../constants/eventNames.js";
import { PosterCodathon } from "../../../assets/index.js";

function BliendSwap() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <div className="relative z-40 w-full px-6 py-4"> {/* Reduced py-8 to py-4 */}
        <RegisterButtonFotTeam event={blindSwap} min={1} max={1} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto mt-4"> {/* Reduced gap-8 to gap-4, mt-8 to mt-4 */}
          {/* Event Poster */}
          <div className="flex justify-center items-center">
            <img src={PosterCodathon} alt="bliendSwap" className="w-full max-w-md rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500" />
          </div>
          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3"> {/* Reduced space-y-6 to space-y-3 */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">Description</h3> {/* Reduced mb-4 to mb-2 */}
                <div className="text-gray-300 space-y-1">
                  <p><strong>Event Name:</strong> bliendSwap</p>
                  <p><strong>Date:</strong> 20 September 2024</p>
                  <p><strong>Time:</strong> 1:30 PM - 3:30 PM</p>
                  <p><strong>Event Duration:</strong> 2 hours</p>
                </div>
              </section>
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">Rules</h3> {/* Reduced mb-4 to mb-2 */}
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>The event is team-based (max. 2 members).</li>
                  <li>Participants must be from the same institute.</li>
                  <li>Languages allowed: C, C++, Java, Python</li>
                  <li>Participants must solve the problems individually in each round.</li>
                  <li>Round 1: MCQs on basic coding (45 minutes)</li>
                  <li>Round 2: Code Debugging (45 minutes)</li>
                  <li>Round 3: Code Development (60 minutes)</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">Faculty Coordinator</h3> {/* Reduced mb-4 to mb-2 */}
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Prof. Ashish Kharvar</li>
                  <li>Prof. Apurva Mandalyawala</li>
                  <li>Prof. Mitul Patel</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">Event Heads</h3> {/* Reduced mb-4 to mb-2 */}
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>RAHUL JOSHI - +91 82381 46212</li>
                  <li>MITUL CHAUHAN - +91 79718 98263</li>
                </ul>
              </section>
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">Volunteers</h3> {/* Reduced mb-4 to mb-2 */}
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>DHARSHIT PATEL</li>
                  <li>ABHIJEET DESAI</li>
                  <li>ANIKET PATEL</li>
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
    </div>
  );
}

export default BliendSwap;