import RegisterButtonforNonTech from "../../../components/App/RegisterButtonforNonTech";
import { PosterEZholidays } from "../../../assets/index.js";
import BackToEvent from "../../../components/App/BackToEvent.jsx";

function Ezholiday() {
  return (
    <div className="relative flex flex-col items-center min-h-screen text-white overflow-hidden bg-gradient-to-b from-gray-900 via-purple-950 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />
      <RegisterButtonforNonTech
        event={{
          name: "EZHOLIDAYS",
          link: "https://forms.gle/jGWWnN9hmFFosk886",
        }}
      />
      <div className="relative z-40 w-full px-6 py-4">
        {" "}
        
        {/* Reduced py-8 to py-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4 px-4 md:px-8">
          {/* Poster */}
          <div className="flex justify-center items-start">
            <img
              src={PosterEZholidays}
              alt="EZHOLIDAYS"
              className="my-5 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 posterimage"
            />
          </div>

          {/* Event Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700">
            <div className="space-y-3">
              {/* Event Header */}
              <section>
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-1">
                  EzHolidays: Answer Right, Travel Bright!
                </h2>
              </section>

              {/* Event Description */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-2">
                  Description
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>
                    <strong>Event Name:</strong> EzHolidays
                  </p>
                  <p>
                    <strong>Tagline:</strong> "Answer Right, Travel Bright!"
                  </p>
                  <p>
                    <strong>Type:</strong> Travel & General Knowledge Quiz
                  </p>
                  <p>
                    <strong>Participation:</strong> Individual
                  </p>
                  <p>
                    <strong>Reward:</strong> Win travel vouchers and a chance to
                    earn a holiday trip!
                  </p>
                </div>
              </section>

              {/* Event Concept */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-2">
                  Event Concept
                </h3>
                <div className="text-gray-300 space-y-1">
                  <p>🌍 Ever dreamt of exploring the world for free?</p>
                  <p>
                    🧠 Test your knowledge of geography, cultures, famous
                    places, and quirky travel trivia in this engaging quiz.
                  </p>
                  <p>
                    🎁 The top scorers will walk away with travel vouchers — and
                    one lucky winner could secure a sponsored trip!
                  </p>
                  <p>
                    🏖️ Think you know your Bali from your Bahamas? Let’s find
                    out!
                  </p>
                </div>
              </section>

              {/* Event Heads */}
              <section>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-2">
                  Event Heads
                </h3>
                <ul className="text-gray-300 list-disc pl-5 space-y-1">
                  <li>
                    <strong>Sanchi Savani</strong> — 6358107700
                  </li>
                  <li>
                    <strong>Rudraa Lakhani</strong> — 8780621487
                  </li>
                  <li>
                    <strong>Krisha Keraliya</strong> — 7485989359
                  </li>
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

export default Ezholiday;
