import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { cyberSpy } from "../../../constants/eventNames";
import { PosterCyberSpy } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function CyberSpy() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Cyber Spy
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={cyberSpy} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterCyberSpy}
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
                <div className="text-gray-300 space-y-1">
                  <ul className="text-gray-300 space-y-2 list-disc pl-5">
                    <li>
                      <strong>Event Name:</strong> Cyber Spy
                    </li>
                    <li>
                      <strong>Number of Rounds:</strong> 2
                    </li>
                    <li>
                      <strong>Round 1:</strong>
                      <ul className="list-disc pl-5">
                        <li>
                          <strong>Date:</strong> 19th September 2025
                        </li>
                        <li>
                          <strong>Location:</strong> IT Lab - 1, 2
                        </li>
                        <li>
                          <strong>Duration:</strong> 20 minutes
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Round 2:</strong>
                      <ul className="list-disc pl-5">
                        <li>
                          <strong>Date:</strong> 20th September 2025
                        </li>
                        <li>
                          <strong>Location:</strong> IT Lab - 4, 5
                        </li>
                        <li>
                          <strong>Duration:</strong> 1 hour
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 Cyber Spy – A Cybersecurity Showdown</p>
                  <p>
                    Test your cybersecurity and OSINT (Open Source Intelligence)
                    skills in this thrilling event!
                  </p>
                  <p>
                    The event will challenge participants with both theoretical
                    and practical tasks, requiring them to use their knowledge
                    and investigation skills to solve real-world digital
                    mysteries.
                  </p>
                </div>
              </section>

              {/* Round Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round Details
                </h3>

                {/* Round 1: Cyber Quiz Battle */}
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🛡 Round 1: Cyber Quiz Battle
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>📌 Format: 30 MCQ-based questions</li>
                    <li>📚 Topics Covered:</li>
                    <ul className="text-gray-300 list-disc pl-6 space-y-1">
                      <li>Networking</li>
                      <li>Cybersecurity Basics</li>
                      <li>Malware & Attacks</li>
                      <li>Cyber Laws & Ethics</li>
                      <li>Tools Awareness</li>
                    </ul>
                    <li>⏱ Time Limit: 20 minutes</li>
                    <li>🌐 Internet not Allowed</li>
                    <li>✅ Top scorers will qualify for Round 2</li>
                  </ul>
                </div>

                {/* Round 2: OSINT Warrior Challenge */}
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🟢 Round 2: OSINT Warrior Challenge
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>📌 Format: Scenario-based investigation</li>
                    <li>
                      For Quires Checkout Video :  
                      <a href="https://drive.google.com/drive/folders/1gSbqHbFTd_BeOOyWSJDs0rTY8jy8aNDz"
                      className="font-bold"
                      >  Click Here </a>
                    </li>
                    <li>
                      🔍 Participants will use OSINT tools to uncover real-world
                      digital clues and solve a mystery.
                    </li>
                    <li>🧠 Skills Tested:</li>
                    <ul className="text-gray-300 list-disc pl-6 space-y-1">
                      <li>Website Information Search</li>
                      <li>File/Photo Clues</li>
                      <li>Social Media Tracing</li>
                      <li>Hidden Web Search</li>
                      <li>Image Search Tricks</li>
                      <li>Username Hunt</li>
                      <li>Location Clues</li>
                    </ul>
                    <li>⏱ Time Limit: ~1 Hour</li>
                    <li>🌐 Internet Allowed</li>
                    <li>
                      🎯 Objective: Investigate, analyze, and present findings
                      like a real cyber detective.
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
                  <li>Prof. Ashish Kharwar</li>
                  <li>Prof. Ankit Kharwar</li>
                </ul>
              </section>
              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Rahul Soni - 9016397932</li>
                  <li>Rushel Dhandheliya - 9016049602</li>
                  <li>Manan Shah - 9313534970</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Diya Patel</li>
                  <li>Dharmi Sonani</li>
                  <li>Vanshika Koshiya</li>
                  <li>Yashvi Bhatt</li>
                  <li>Aryan Tarsariya</li>
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

export default CyberSpy;

