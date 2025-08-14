import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventListing } from "../constants/EventListing";

function Events() {
  const navigate = useNavigate();
  const [navigatingTo, setNavigatingTo] = useState(null);

  const handleClick = (slug, name) => {
    // Set the state to show the overlay and display the event name
    setNavigatingTo(name);
    
    // Use a timeout to display the overlay before navigating
    setTimeout(() => {
      navigate(`/event/${slug.toLowerCase()}`);
    }, 1500); // Overlay will be visible for 1.5 seconds
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Enhanced Dynamic Animated Background with Subtle Stars and Gradient */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Main Content */}
      <div className="relative z-40 w-full px-6 py-12">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-center mb-12 tracking-tighter animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
          All Events
        </h1>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.values(EventListing).map((event) => (
            <div
              key={event.slug}
              onClick={() => handleClick(event.slug, event.name)}
              className="event-card relative border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 cursor-pointer bg-gray-800/50 backdrop-blur-sm group animate-slideUp"
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  loading="lazy"
                />
                {/* The black gradient overlay on hover has been removed from this file. */}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-300 group-hover:underline transition duration-200">
                  {event.name}
                </h2>
                <p className="text-sm text-gray-300 italic mt-2 group-hover:text-gray-100 group-hover:tracking-wide transition-all duration-300">
                  {event.slogan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Overlay */}
      {navigatingTo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center transition-opacity duration-300">
          <div className="bg-white px-10 py-8 rounded-xl shadow-2xl animate-pulse-slow text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">
              Navigating to...
            </h2>
            <p className="text-xl font-bold text-indigo-600 animate-fadeIn">{navigatingTo}</p>
          </div>
        </div>
      )}

      {/* Enhanced CSS Keyframes for Animations */}
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
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.9), -3px -3px 6px rgba(0, 255, 255, 0.9); transform: skewX(-4deg); }
            4% { opacity: 1; text-shadow: none; transform: skewX(0); }
            6% { opacity: 0.9; text-shadow: -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 6px rgba(0, 255, 255, 0.9); transform: skewX(4deg); }
            8% { opacity: 1; text-shadow: none; transform: skewX(0); }
            100% { opacity: 1; text-shadow: none; }
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
        `}
      </style>
    </div>
  );
}

export default Events;
