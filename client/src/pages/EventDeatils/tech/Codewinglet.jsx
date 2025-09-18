import { PosterCodwinglent } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function Codewinglet() {
  const handleRegister = () => {
    window.open("https://wkf.ms/4mlz9M6", "_blank");
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <div className="mt-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
        Code Winglet
      </div>
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        {/* <RegisterButton event={pyIt} /> */}
        <div className="flex items-start justify-center  w-full px-4">
          <div className="borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
            <button
              onClick={handleRegister}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
            >
              Register Now 
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterCodwinglent}
              alt="Codewinglent"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-6">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Description
                </h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>
                    <strong>Event Name:</strong> CodeBridge: Test to Placement
                  </li>
                  <li>
                    <strong>Number of Rounds:</strong> 2
                  </li>
                  <li>
                    <strong>Round Details:</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <strong>Round 1:</strong> Debugging Round – 19th
                        September 2025
                      </li>
                      <li>
                        <strong>Round 2:</strong> Coding Challenge – 19th
                        September 2025
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Time Duration:</strong>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Round 1: 45 minutes</li>
                      <li>Round 2: 1.5 hours</li>
                    </ul>
                  </li>
                </ul>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    🚀 *Ignite Your Tech Career with CodeBridge: Test to
                    Placement*
                  </p>
                  <p>
                    Are you a tech enthusiast ready to test your coding prowess
                    and debugging skills?
                  </p>
                  <p>
                    CodeBridge is your gateway to experience real-world
                    programming challenges, sharpen your logical thinking, and
                    prepare for placement scenarios.
                  </p>
                  <p>
                    From untangling tricky C code to solving algorithmic
                    problems — this is your chance to rise above the rest!
                  </p>
                </div>
              </section>

              {/* The Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  The Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>👤 Format: Individual Participation</li>
                  <li>
                    🧠 Skills Tested: Debugging, Problem Solving, Code
                    Optimization
                  </li>
                  <li>💡 Programming Languages: C (Round 1), Any (Round 2)</li>
                  <li>
                    🏆 Winners: Based on cumulative scores across both rounds
                  </li>
                  <li>
                    ⚖️ Judging Criteria: Accuracy, Efficiency, and Complete Test
                    Case Coverage
                  </li>
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Each participant must register before the event begins.
                  </li>
                  <li>
                    Use only your knowledge – no external help or code
                    assistance allowed.
                  </li>
                  <li>Latecomers may not be permitted to participate.</li>
                  <li>
                    All decisions by the event coordinators and judges are
                    final.
                  </li>
                </ul>
              </section>

              {/* Round 1 – Debugging Round */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 1 – Debugging Round
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>🧩 Language: C Programming</li>
                  <li>
                    ⚠️ Objective: Fix the errors and correctly predict the
                    output.
                  </li>
                  <li>❌ Syntax error clarification will NOT be provided.</li>
                  <li>⏱ Duration: 45 minutes</li>
                  <li>
                    ✅ Top performers will move to Round 2 based on accuracy and
                    speed.
                  </li>
                </ul>
              </section>

              {/* Round 2 – Coding Challenge */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 2 – Coding Challenge
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>🖥️ Solve algorithm-based coding problems</li>
                  <li>
                    🧠 Choose any programming language you're most comfortable
                    with
                  </li>
                  <li>
                    📈 Submissions must pass all test cases for full score
                  </li>
                  <li>⏱ Duration: 1.5 hours</li>
                  <li>
                    🏁 Final evaluation based on correctness, efficiency, and
                    clarity
                  </li>
                </ul>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Jay Ganjawala - 90164 19325</li>
                  <li>Shiven Parmar - 93139 48911</li>
                  <li>Tisha Sutariya - 95106 55206</li>
                </ul>
              </section>

              {/* Volunteers */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Volunteers
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Khushi Bharodiya </li>
                  <li>Neki Lakhani </li>
                  <li>Dangsiya Dhruvi </li>
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
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.9); }
            4% { opacity: 1; text-shadow: none; }
            6% { opacity: 0.9; text-shadow: -2px -2px 4px rgba(0, 255, 255, 0.9); }
            8% { opacity: 1; text-shadow: none; }
            100% { opacity: 1; text-shadow: none; }
          }
          .animate-fadeIn { animation: fadeIn 1.2s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.2s ease-in-out; }
          .animate-glitchFlicker { animation: glitchFlicker 3s linear infinite; }
          .borderFor {
            border: 2px solid rgba(0, 255, 255, 0.3);
            padding: 20px;
            border-radius: 20px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            position: relative;
            overflow: hidden;
          }
        `}
      </style>
      <BackToEvent />
    </div>
  );
}

export default Codewinglet;

