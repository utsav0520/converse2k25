import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { logoHunt } from "../../../constants/eventNames";
import { PosterlogoHunt } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function LogoHunt() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Logo Hunt
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={logoHunt} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterlogoHunt}
              alt="Logo Hunt"
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
                    <strong>Event Name:</strong> Logo Hunt
                  </p>
                  <p>
                    <strong>Date:</strong> 19th September 2025
                  </p>
                  <p>
                    <strong>Location :</strong> IT Lab - 1,2,3,4
                  </p>
                  <p>
                    <strong>Number of Rounds:</strong> 1
                  </p>
                  <p>
                    <strong>Time Duration:</strong> 30 minutes
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
                    🎯 Logo Hunt is a fast-paced event where participants'
                    knowledge of brands, companies, and product logos is put to
                    the test.
                  </p>
                  <p>
                    Speed and accuracy are key as you identify and recall logos
                    from various industries. The event is designed to challenge
                    your memory and quick thinking skills!
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
                    🔹 Round 1: Logo Recognition Challenge (1 hour)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Participants will be given various
                      brand/company/product logos to identify and recall.
                    </li>
                    <li>⏱ Time Limit: 1 hour</li>
                    <li>
                      🎯 Evaluation: Based on speed and accuracy of logo
                      recognition.
                    </li>
                    <li>
                      📚 You will be provided with paper to write your answers,
                      but you must bring your own pen.
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
                    Participants will be given various logos of brands,
                    companies, and products to identify.
                  </li>
                  <li>
                    Bring your own pen. Paper will be provided for writing your
                    answers.
                  </li>
                  <li>
                    Mobile phones are strictly prohibited during the event.
                  </li>
                  <li>Time Limit: 1 hour for the round.</li>
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
                  <li>Prof. Bhumika Patel</li>
                  <li>Prof. Palak Desai</li>
                </ul>
              </section>
              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Sujal Thakkar - 9104262061</li>
                  <li>Daksh Aghera - 8264724080</li>
                  <li>Shrey Dhola - 9773461850</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Rajbhoi Dev</li>
                  <li>Drashti Nimavat</li>
                  <li>Shlok Sutariya</li>
                  <li>Dhvanit Panchani</li>
                  <li>Yamini Tandel</li>
                  <li>Devangi Adalja</li>
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

export default LogoHunt;
