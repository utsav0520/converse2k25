import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterIPLAuction } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function IPLAuction() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "IPLAuction",
          link: "https://forms.gle/VYbKRnq4yuDAC5k29",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterIPLAuction}
              alt="AI Memes"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Description
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> IPL Mega Auction
                  </p>
                  <p>
                    <strong>Theme:</strong> Battle of the Bids – Build Your
                    Dream IPL Squad!
                  </p>
                  <p>
                    <strong>Players:</strong> Team of 3 or 4 members
                  </p>
                  <p>
                    <strong>Goal:</strong> Form the strongest IPL squad by
                    winning bids smartly within the given credits.
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> ₹30 (Team of 3) | ₹40 (Team of
                    4)
                  </p>
                  <p>
                    <strong>Duration:</strong> 1–2 Hours
                  </p>
                </div>
              </section>

              {/* Event Overview */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Event Overview
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    🏏 Step into the electrifying world of cricket where
                    strategy meets bidding wars! Experience the thrill of an IPL
                    Auction as you and your squad compete to assemble the
                    ultimate team.
                  </p>
                  <p>
                    💰 Manage your credits wisely, outbid rivals, and secure the
                    best players to build your dream squad.
                  </p>
                  <p>
                    🏆 Remember – every player and every bid counts towards
                    victory!
                  </p>
                </div>
              </section>

              {/* Squad Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Squad Formation
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>Each team must create an IPL squad of 6 players:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>2 Batters</li>
                    <li>2 Bowlers</li>
                    <li>1 All-Rounder</li>
                    <li>1 Wicket Keeper</li>
                  </ul>
                  <p>
                    📋 Player list will be revealed 20 minutes before the
                    auction begins.
                  </p>
                </div>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Teams must strictly follow the required squad combination (2
                    Batters, 2 Bowlers, 1 All-Rounder, 1 Wicket Keeper).
                  </li>
                  <li>
                    Exceeding the credit limit will lead to disqualification.
                  </li>
                  <li>Incomplete teams will not be accepted.</li>
                  <li>
                    Bidding will be conducted fairly under the supervision of
                    organizers.
                  </li>
                </ul>
              </section>

              {/* Prize */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Prize
                </h3>
                <p className="text-gray-300">
                  🎉 Exciting prizes await the Top 3 Teams – Trophy 🏆 or Cash
                  Prize (to be announced)!
                </p>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Dasari Tejas – 9023990513</li>
                  <li>Pasikanti Adarsh – 8160796177</li>
                  <li>Digaj Patel – 9898932411</li>
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

export default IPLAuction;
