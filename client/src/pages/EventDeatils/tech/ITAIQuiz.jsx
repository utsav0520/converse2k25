import React from "react";
import RegisterButton from "../../../components/App/RegisterButton";
import { itaiQuiz } from "../../../constants/eventNames";
import { PosterITAIQuiz } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function ITQuiz() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        IT & AI Quiz
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={itaiQuiz} min={1} max={1} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterITAIQuiz}
              alt="ITAI Quiz"
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
                    <strong>Event Name:</strong> IT & AI Quiz
                  </li>
                  <li>
                    <strong>Date:</strong> 19th September 2025
                  </li>
                  <li>
                    <strong>Location:</strong> IT Lab - 1, 2, 3
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 1
                  </li>
                  <li>
                    <strong>Time Duration:</strong> 30 minutes
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🎭 IT & AI Quiz – A Test of Knowledge and Speed</p>
                  <p>
                    Test your knowledge in Information Technology and Artificial
                    Intelligence in this exciting quiz! It’s a fast-paced
                    challenge where accuracy and speed will determine the
                    winner.
                  </p>
                  <p>
                    The quiz will include questions from a wide variety of
                    topics, so be prepared to showcase your knowledge!
                  </p>
                </div>
              </section>

              {/* The Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  The Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>👤 Individual participation</li>
                  <li>💻 Format: Multiple-choice questions (MCQs)</li>
                  <li>⏱ Duration: 30 minutes</li>
                  <li>⚡ Scoring: Accuracy + Time</li>
                  <li>
                    🏆 Winner: Highest score; in case of a tie, the participant
                    with the shortest completion time wins
                  </li>
                </ul>
              </section>

              {/* Round Details */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round Details - The Final MCQ Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    The quiz consists of 50 multiple-choice questions (MCQs)
                    covering topics in Information Technology and Artificial
                    Intelligence.
                  </li>
                  <li>
                    Each question will have four options, with only one correct
                    answer.
                  </li>
                  <li>No negative marking for incorrect answers.</li>
                  <li>
                    The participant with the highest score will be declared the
                    winner.
                  </li>
                  <li>
                    In case of a tie, the participant who completes the quiz in
                    the shortest time will be ranked higher.
                  </li>
                </ul>
              </section>

              {/* Quiz Syllabus */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  IT & AI quiz topics
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>📘 Part A – Basics of Computer & IT</li>
                  <li>💻 Part B – Programming & Data Structures</li>
                  <li>🤖 Part C – Artificial Intelligence</li>
                  <li>⚙️ Part D – Advanced IT & Emerging Tech</li>
                  <li>🧠 Part E – AI Applications & Machine Learning</li>
                  <li>🎯 Part F – Mixed Knowledge (IT + AI)</li>
                </ul>
              </section>

              {/* Faculty Coordinators */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dr. Mita Parikh</li>
                  <li>Prof. Tushar Gohil</li>
                  <li>Prof. Apurva Bharat Mandalaywala</li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Sahil Sidhdhapara - 9727123384</li>
                  <li>Vasu Navadiya - 6351534427</li>
                  <li>Dhruvkumar Italiya - 8200609404</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Pranjal Hadiya</li>
                  <li>Drishi Morkhia</li>
                  <li>Khushi Gajrawala</li>
                  <li>Manasvi Bhesania</li>
                  <li>Rishika Jain</li>
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

export default ITQuiz;
