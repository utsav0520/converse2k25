import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterTraitors } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function Traitors() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "Traitors",
          link: "https://forms.gle/NDXaKENyUAv45pec7",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterTraitors}
              alt="AI Memes"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Description
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> ⚔️ TRAITORS ⚔️
                  </p>
                  <p>
                    <strong>Players:</strong> 20 villagers (with unique roles)
                  </p>
                  <p>
                    <strong>Goal:</strong> Find and eliminate the Traitor before
                    5 days pass.
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> ₹25 per person
                  </p>
                </div>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    🏰 A town where betrayal lurks every night. Among the
                    villagers, one is a Traitor who strikes when the sun sets.
                  </p>
                  <p>
                    👥 Every participant receives a secret role in an envelope
                    and plays through 5 full days of discussion, suspicion, and
                    survival.
                  </p>
                  <p>
                    🌙 Each day and night lasts 10 minutes — will the villagers
                    trust wisely or fall to deception?
                  </p>
                </div>
              </section>

              {/* Roles */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Roles in the Town
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>🧑‍⚕️ Doctor</li>
                  <li>⚒️ Blacksmith</li>
                  <li>⚡ Electrician</li>
                  <li>🥗 Vegetable/Food Vendor</li>
                  <li>🪚 Carpenter</li>
                  <li>🔪 Traitor</li>
                  <li>👥 Ordinary Villagers</li>
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Every participant is assigned a secret role in an envelope
                    at the start.
                  </li>
                  <li>
                    A normal day begins with open discussion. After 10 minutes,
                    night falls and the Traitor strikes.
                  </li>
                  <li>Each day & night cycle lasts 10 minutes.</li>
                  <li>
                    Villagers have 5 days to identify and vote out the Traitor.
                  </li>
                  <li>If the Traitor survives till the end, the town falls.</li>
                  <li>
                    In case of more registrations, the game will run batch-wise.
                  </li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🏆 The Exciting Prize Awaits the Survivors!
                </p>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Jal Parekh - 8200860269</li>
                  <li>Roshan Patel - 7096904810</li>
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

export default Traitors;
