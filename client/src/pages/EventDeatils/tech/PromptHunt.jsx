import RegisterButton from "../../../components/App/RegisterButton";
import { promptHunt } from "../../../constants/eventNames";
import { PosterpromptHunt } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function PromptHunt() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Prompt Hunt
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <RegisterButton event={promptHunt} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterpromptHunt}
              alt="Prompt Hunt"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Description
                </h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Event Name:</strong> Prompt Hunt
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
                    </ul>
                  </li>
                  <li>
                    <strong>Round 2:</strong>
                    <ul className="list-disc pl-5">
                      <li>
                        <strong>Date:</strong> 20th September 2025
                      </li>
                      <li>
                        <strong>Location:</strong> IT Lab - 1, 2
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Time Duration:</strong> 20 minutes each round
                  </li>
                </ul>
                <br />
                <div className="text-gray-300 space-y-1">
                  <p>
                    In this event, participants will test their ability to
                    reverse-engineer AI outputs and guess the original prompts
                    that generated them. The challenge will take place in two
                    exciting rounds spread over two days.
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
                    🔹 Round 1 – Text Reverse or Code Reverse (Day 1)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Task: Participants will be shown 20 AI-generated text
                      or code outputs.
                    </li>
                    <li>
                      ❓ Question Type: Multiple-choice questions based on
                      possible prompts for the given outputs.
                    </li>
                    <li>⏱ Time Limit: 20-25 minutes</li>
                    <li>🌐 Internet: Not allowed in this round.</li>
                    <li>
                      🔍 Objective: Select the most accurate prompt that could
                      have generated the shown output.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                    🔹 Round 2 – Image Reverse or Create Image (Day 2)
                  </h4>
                  <ul className="text-gray-300 list-disc pl-5 space-y-1">
                    <li>
                      📌 Task: Participants will be shown AI-generated images or
                      given keywords to generate an image using AI tools.
                    </li>
                    <li>
                      ❓ Question Type: Match the most accurate prompt to
                      generate or explain the given image.
                    </li>
                    <li>⏱ Time Limit: 20-25 minutes</li>
                    <li>
                      🌐 Internet: Allowed in this round for image generation.
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
                  <li>Strictly no mobile phones during the event.</li>
                  <li>Each participant will have computer access.</li>
                  <li>
                    No internet use in Round 1. Internet allowed in Round 2 for
                    image creation.
                  </li>
                  <li>Solo participation only (no teams).</li>
                  <li>Each round has a strict 20-25 minute time limit.</li>
                  <li>
                    Participants must choose the most accurate prompt for each
                    question.
                  </li>
                  <li>Judges’ decision will be final.</li>
                </ul>
              </section>

              {/* Judging Criteria */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Judging Criteria
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Accuracy of the chosen prompt (correct answer).</li>
                  <li>Time taken to answer (faster responses rank higher).</li>
                </ul>
              </section>

              {/* Faculty Coordinators */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Faculty Coordinators
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dr. Mitali Desai</li>
                  <li>Prof. Krishma Desai</li>
                  <li>Dr. Vibha Patel</li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Vyoma Kapadiya – 7041885304</li>
                  <li>Twisha Savani - 9723596171</li>
                  <li>Kevadiya Dhruvit - 7863060529</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Harshav Moradiya</li>
                  <li>Om Davariya</li>
                  <li>Dharm Patel</li>
                  <li>Krisha Koshiya</li>
                  <li>Shreya Agrawal</li>
                  <li>Bhavya Ladumor</li>
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

export default PromptHunt;
