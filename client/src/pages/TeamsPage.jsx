import { useNavigate } from "react-router-dom";
import {
  TeamListing,
} from "../constants/EventListing";

function TeamsPage() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    setTimeout(() => {
      navigate(`/team/${slug.toLowerCase()}`);
    }, 0);
  };


  const allTeams = Object.values(TeamListing);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Enhanced Dynamic Animated Background with Subtle Stars and Gradient */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Main Content */}
      <div className="relative z-40 w-full px-6 py-12">
        {/* Dynamic heading text */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-center md:mt-5 mb-10 tracking-tighter animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
            Explored the Teams  
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fadeIn">
          {allTeams.map((event) => (
            <div
              key={event.slug}
              onClick={() => handleClick(event.slug, event.name)}
              className="event-card relative border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 cursor-pointer bg-gray-800/50 backdrop-blur-sm group"
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-300 group-hover:underline transition duration-200">
                  {event.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(60px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes pulseSlow {
            0% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.15); opacity: 0.6; }
            100% { transform: scale(1); opacity: 0.4; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.5; }
          }
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.9), -3px -3px 6px rgba(0, 255, 255, 0.9); transform: skewX(-4deg); }
            4% { opacity: 1; text-shadow: none; transform: skewX(0); }
            6% { opacity: 0.9; text-shadow: -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 6px rgba(0, 255, 255, 0.9); transform: skewX(4deg); }
            8% { opacity: 1; text-shadow: none; transform: skewX(0); }
            100% { opacity: 1; text-shadow: none; }
          }
          @keyframes twinklingStars {
            0% {
              transform: rotate(0deg) scale(1);
              opacity: 0.5;
            }
            50% {
              transform: rotate(180deg) scale(1.05);
              opacity: 0.7;
            }
            100% {
              transform: rotate(360deg) scale(1);
              opacity: 0.5;
            }
          }
          @keyframes neonPulse {
            0% {
              box-shadow: 0 0 8px 3px #22d3ee, 0 0 20px 6px #22d3ee;
            }
            100% {
              box-shadow: 0 0 14px 6px #67e8f9, 0 0 28px 12px #67e8f9;
            }
          }
          .animate-fadeIn { animation: fadeIn 1.3s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.3s ease-in-out; }
          .animate-pulse-slow { animation: pulseSlow 5s ease-in-out infinite; }
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
          .animate-twinkling-stars {
            width: 200vw;
            height: 200vw;
            background: radial-gradient(at 50% 50%, transparent 30%, #1a0033 70%);
            border-radius: 50%;
            animation: twinklingStars 25s linear infinite;
            filter: blur(20px);
            opacity: 0.7;
          }

          /* Ensure font consistency */
          h1, h2 {
            font-family: 'Inter', sans-serif;
            letter-spacing: -0.025em;
          }

          /* Enhanced toggle buttons */
          button {
            position: relative;
            overflow: hidden;
            transition: 
              background-color 0.4s ease, 
              color 0.4s ease, 
              transform 0.3s ease, 
              box-shadow 0.4s ease;
            will-change: transform, box-shadow;
            outline-offset: 3px;
          }

          button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px 3px rgba(56, 201, 255, 0.7);
          }

          button:focus-visible {
            outline: 3px solid rgba(56, 201, 255, 0.9);
            outline-offset: 4px;
            transform: scale(1.1);
            box-shadow: 0 0 18px 4px rgba(56, 201, 255, 0.9);
          }

          button:active {
            transform: scale(0.95);
            box-shadow: 0 0 8px 2px rgba(56, 201, 255, 0.5);
          }

          /* Neon glow animation for active toggle button */
          button.bg-cyan-400 {
            animation: neonPulse 3s infinite alternate ease-in-out;
            box-shadow: 0 0 8px 3px #22d3ee, 0 0 20px 6px #22d3ee;
          }
        `}
      </style>
    </div>
  );
}

export default TeamsPage;
