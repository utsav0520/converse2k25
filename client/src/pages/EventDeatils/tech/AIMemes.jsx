import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { aiMemes } from "../../../constants/eventNames";
import { PosteraiMemes } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function AIMemes() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        AI Memes
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={aiMemes} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosteraiMemes}
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
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Event Name:</strong> AI Memes
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 2
                  </li>
                  <li>
                    <strong>Date:</strong> 20th September 2025
                  </li>
                  <li>
                    <strong>Location:</strong> IT Lab - 1, 2, 3
                  </li>
                  <li>
                    <strong>Round 1 Duration:</strong> 30 minutes
                  </li>
                  <li>
                    <strong>Round 2 Duration:</strong> 45 minutes
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 AI Memes – A Creative Meme Making Showdown</p>
                  <p>
                    AI Memes is an event that combines AI technology with
                    creativity and humor. Participants will use AI tools to
                    create engaging memes based on a given theme, showcasing
                    both their design and humor skills.
                  </p>
                </div>
              </section>

              {/* Round Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round Details
                </h3>

                {/* Round 1: The Theme Challenge */}
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🔹 Round 1: The Theme Challenge (30 minutes)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>📌 Theme will be revealed on the spot.</li>
                    <li>
                      🖼 Participants must create AI-generated memes based on the
                      theme.
                    </li>
                    <li>⏱ Time Limit: 30 minutes</li>
                    <li>
                      🎯 Evaluation: Humor, creativity, theme relevance, and
                      originality.
                    </li>
                    <li>
                      ✅ Shortlisting: Top participants will qualify for Round
                      2.
                    </li>
                  </ul>
                </div>

                {/* Round 2: The Meme Evolution */}
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🔹 Round 2: The Meme in Motion (45 minutes)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>📌 Refine and upgrade the memes created in Round 1.</li>
                    <li>
                      🎨 Enhance the meme’s animation, visual appeal, and impact
                      using AI tools.
                    </li>
                    <li>⏱ Time Limit: 45 minutes</li>
                    <li>
                      🎯 Evaluation: Innovation, design quality, humor factor,
                      and improvement over Round 1.
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
                  <li>
                    Eligibility: Open to all students/participants interested in
                    AI, design, and creativity.
                  </li>
                  <li>
                    Tools Allowed: Any AI-based meme/image generation tool
                    (e.g., ChatGPT, MidJourney, DALL·E, Canva AI, etc.).
                  </li>
                  <li>
                    Originality: Plagiarized or copied memes will lead to
                    disqualification.
                  </li>
                  <li>
                    Theme Adherence: Memes must strictly relate to the given
                    theme in Round 1.
                  </li>
                  <li>
                    Content Policy: No offensive, abusive, or inappropriate
                    content. Memes must respect individuals, communities, and
                    cultures.
                  </li>
                  <li>
                    Time Limit: Round 1 – 30 minutes, Round 2 – 45 minutes.
                  </li>
                  <li>Late submissions will not be considered.</li>
                </ul>
              </section>

              {/* Faculty Coordinators */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dr. Dhruti Sharma</li>
                  <li>Prof. Snehal Kathale</li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Vishwa Jariwala - 9662594998</li>
                  <li>Jemis Kevadiya - 7862936279</li>
                  <li>Soham Patel - 9313342881</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Harsh Ramani</li>
                  <li>Dhruvil Sorathiya</li>
                  <li>Tirth Hirpara</li>
                  <li>Muskaan Patel</li>
                  <li>Tushar Kapoor</li>
                  <li>Karan Mehta</li>
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

export default AIMemes;
