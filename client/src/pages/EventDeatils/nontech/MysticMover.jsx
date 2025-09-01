import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterMystic } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function MysticMover() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "MysticMover",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSci3TTgbKQS4EZjiCjAQSKlow-Jz2UBI6CTGUBDuZz1wuEvnA/viewform?usp=dialog",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterMystic}
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
                    <strong>Event Name:</strong> Mystic Mover: The Blind
                    Navigator Challenge
                  </p>
                  <p>
                    <strong>Players:</strong> Duo (2 members per team)
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> ₹40 per Duo
                  </p>
                  <p>
                    <strong>Theme:</strong> "Trust, Precision, and
                    Communication!"
                  </p>
                </div>
              </section>

              {/* Round 1 */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 1 – Maze Path Navigation
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Roles:</strong>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Player A = Collector (Blindfolded)</li>
                    <li>Player B = Guide (Gives verbal instructions)</li>
                  </ul>
                  <p>
                    <strong>Objective:</strong> Guide the blindfolded player to
                    collect as many boxes as possible.
                  </p>
                  <p>
                    <strong>Rules:</strong>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Collector must stay on maze paths.</li>
                    <li>
                      Red lines = traps. Touching/crossing = –1 point penalty.
                    </li>
                    <li>Each collected box = +2 points.</li>
                    <li>Top-scoring teams qualify for Round 2.</li>
                  </ul>
                  <p>
                    <strong>Time Limit:</strong> 3 minutes
                  </p>
                </div>
              </section>

              {/* Round 2 */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Round 2 – Countdown Puzzle Challenge
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Roles Switch:</strong>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Player A = Guide</li>
                    <li>Player B = Collector (Blindfolded)</li>
                  </ul>
                  <p>
                    <strong>Objective:</strong> Boxes contain mini puzzles or
                    clues. Solving one gives a hint to the next box location.
                  </p>
                  <p>
                    <strong>How it works:</strong>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Collector retrieves a box with the guide’s help.</li>
                    <li>Inside is a puzzle, riddle, or symbol.</li>
                    <li>Guide solves it to find the next target box.</li>
                    <li>Repeat and collect as many as possible.</li>
                  </ul>
                  <p>
                    <strong>Scoring:</strong>
                  </p>
                  <ul className="list-disc pl-5">
                    <li>Each box = +2 points</li>
                    <li>Last 15 seconds = +4 points per box</li>
                    <li>Red line contact = –1 point</li>
                  </ul>
                  <p>
                    <strong>Time Limit:</strong> 3 minutes
                  </p>
                </div>
              </section>

              {/* Tiebreaker */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Tiebreaker
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>First team to collect 3 boxes wins</li>
                  <li>Speed + communication decide the winner</li>
                  <li>Touching red line = elimination</li>
                </ul>
              </section>

              {/* General Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  General Rules
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Finish within the time limit</li>
                  <li>Both players must stay active</li>
                  <li>Avoid red lines — penalties apply</li>
                  <li>No help from audience or others</li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🏆 Prize details to be announced soon!
                </p>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Priyanshi Modi - 9773291110</li>
                  <li>Hetavi Ganatra - 9879457592</li>
                  <li>Manal Parekh - 9925033816</li>
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

export default MysticMover;
