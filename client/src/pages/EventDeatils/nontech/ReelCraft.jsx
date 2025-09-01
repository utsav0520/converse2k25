import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterReelCraft } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function ReelCraft() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      <RegisterButtonforNonTech
        event={{
          name: "ReelCraft",
          link: "https://docs.google.com/forms/d/e/1FAIpQLSdmmkeik9msCM1hIErHyJTZLElRFD84YFtX6SWeJ7rbpiPI0g/viewform",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterReelCraft}
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
                    <strong>Event Name:</strong> Reel Craft 🎥
                  </p>
                  <p>
                    <strong>Players:</strong> Solo or Team (1–3 members)
                  </p>
                  <p>
                    <strong>Goal:</strong> Create a reel based on the given
                    theme.
                  </p>
                  <p>
                    <strong>Duration:</strong> 30–60 seconds
                  </p>
                  <p>
                    <strong>Entry Fee:</strong> Free
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
                    🎬 Bring your creativity to life with short reels shot on
                    the <strong>SCET campus</strong>.
                  </p>
                  <p>
                    🎯 You can choose from exciting themes like{" "}
                    <em>Campus Chronicles</em>,<em> Storytelling</em>,{" "}
                    <em>Comedy</em>, and more!
                  </p>
                  <p>
                    ✨ Showcase your editing, acting, and direction skills in
                    just 60 seconds.
                  </p>
                </div>
              </section>

              {/* Rules */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Rules & Guidelines
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Team of 1–3 members only</li>
                  <li>Reel duration must be between 30–60 seconds</li>
                  <li>Reel must be based on the chosen theme</li>
                  <li>You can participate in multiple themes</li>
                  <li>
                    Credits must be added at the end of the reel (Name, Contact,
                    Enrolment No, Email, Branch ID)
                  </li>
                  <li>
                    Reel should be shot on the <strong>SCET campus</strong>
                  </li>
                </ul>
              </section>

              {/* Notes */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Notes
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    Submit your reel in the Google Drive link (shared in the
                    WhatsApp group)
                  </li>
                  <li>Make sure you’ve joined the WhatsApp group</li>
                </ul>
              </section>

              {/* Themes */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Themes
                </h3>
                <ol className="text-gray-300 list-decimal pl-5 space-y-1">
                  <li>
                    Campus Chronicles (Canteen, People, Infrastructure,
                    Departments)
                  </li>
                  <li>Storytelling Video</li>
                  <li>Transition</li>
                  <li>Comedy / Entertainment / Dance</li>
                  <li>Converse</li>
                </ol>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>Siddharth Ghoghari – 📱 81603 92844</li>
                  <li>Manav Tarsariya  – 📱 81608 44231</li>
                  <li>Kadu Parth – 📱 75679 26167</li>
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

export default ReelCraft;
