import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterFFM } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function FFM() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "FFM",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSc814ggTGD-hNfaQjvViprmNpgxWpLG5wgzE7taD6V7oaxzBw/viewform?usp=header",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterFFM}
              alt="AI Memes"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Description
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> Free Fire Max: Campus Showdown
                  </p>
                  <p>
                    <strong>Theme:</strong> "Battle for Glory" — Collegiate
                    Esports LAN Event
                  </p>
                  <p>
                    <strong>Format:</strong> Battle Royale - Squad (4 players
                    per team)
                  </p>
                  <p>
                    <strong>Mode:</strong> Mobile-only LAN tournament
                  </p>
                </div>
              </section>

              {/* Event Theme */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Event Theme
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    🔥 Collegiate Rivalry: Teams from different colleges clash
                    in a LAN showdown.
                  </p>
                  <p>
                    🎯 Skill & Strategy: Emphasis on tactical squad play and
                    elimination-based scoring.
                  </p>
                  <p>
                    🤝 Community & Sportsmanship: Rules to ensure fair play &
                    respect.
                  </p>
                  <p>
                    📱 Mobile Esports Culture: Strict mobile-only gameplay — no
                    emulators allowed.
                  </p>
                </div>
              </section>

              {/* Tournament Format */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Tournament Format
                </h3>
                <div className="text-gray-300 space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold">🏆 Qualifiers</h4>
                    <ul className="list-disc pl-5">
                      <li>All registered teams play 3 matches.</li>
                      <li>Points awarded for placement + eliminations.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">📊 Points System</h4>
                    <ul className="list-disc pl-5">
                      <li>1st Place: 12 pts | 2nd: 9 pts | 3rd: 8 pts</li>
                      <li>4th: 7 pts | 5th: 6 pts | 6th: 5 pts</li>
                      <li>7th: 4 pts | 8th: 3 pts</li>
                      <li>9th–12th: 2 pts | 13th–16th: 1 pt</li>
                      <li>🔫 Eliminations: 1 pt each</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">🔥 Finals</h4>
                    <ul className="list-disc pl-5">
                      <li>Top 12 teams qualify.</li>
                      <li>4–5 matches will be played.</li>
                      <li>Team with highest cumulative points = Champion.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Eligibility */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Player & Team Eligibility
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Teams must have 4 players (1 optional substitute allowed).
                  </li>
                  <li>
                    Players must use their own Free Fire accounts & mobile
                    devices.
                  </li>
                  <li>Accounts must be at least level 10.</li>
                  <li>🚫 Emulators strictly prohibited.</li>
                  <li>Participants must attend LAN finals in person.</li>
                </ul>
              </section>

              {/* Match Settings */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Match Settings
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Mode: Custom Room (Squad)</li>
                  <li>Maps: 3 standard maps used in FF official tournaments</li>
                  <li>Perspective: TPP (Third-Person)</li>
                  <li>Room password will be shared 10 minutes before match.</li>
                </ul>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Rules & Conduct
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    🚫 Cheating, hacking, or unauthorized tools = fine &
                    disqualification.
                  </li>
                  <li>
                    🤝 Respect admins, opponents, and spectators — no toxic
                    behavior.
                  </li>
                  <li>
                    Disconnected before lobby → restart possible; after start →
                    no restart.
                  </li>
                  <li>
                    Captains must submit screenshots of match results
                    immediately.
                  </li>
                </ul>
              </section>

              {/* Schedule */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Schedule & Punctuality
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Schedule will be shared with all teams in advance.</li>
                  <li>Teams must report 15 minutes before match time.</li>
                  <li>
                    Teams not ready 5 minutes after start time may forfeit.
                  </li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🏆 Trophy or Cash Prize for Top 3 Teams (based on
                  registrations).
                </p>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dhruv Joraviya — 9377126979</li>
                  <li>Admar Karansinh — 9714116817</li>
                  <li>Patel Darshan — 9904471901</li>
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

export default FFM;
