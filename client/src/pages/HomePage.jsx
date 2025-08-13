import React, { useState } from 'react';

function HomePage() {
  const [logoGlow, setLogoGlow] = useState(false);

  const triggerLogoAnimation = () => {
    setLogoGlow(true);
    setTimeout(() => setLogoGlow(false), 1000); // Reset after animation
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen text-white overflow-hidden bg-gradient-to-b from-black via-purple-950 to-black">
      {/* Enhanced Dynamic Animated Background with Subtle Stars and Gradient */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Main Logo Section with Attractive Click Animation */}
      <div className="relative z-40 w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/3 mt-8">
        <div className={`relative ${logoGlow ? 'animate-logo-glow' : ''}`}>
          <img
            src="converse2k25Logo.png"
            alt="Converse 2k25 Logo"
            className="relative w-full animate-slideUp hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={triggerLogoAnimation}
          />
          {/* Subtle Sparkle Particles on Click */}
          {logoGlow && (
            <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-sparkle"
                  style={{
                    background: `hsl(${Math.random() * 360}, 100%, 70%)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sponsor Section with Enhanced Visuals */}
      <section className="relative z-40 w-full mt-12 px-4 sm:px-8">
        {/* Enhanced Decorative Gradient Effect */}
        <div className="w-[500px] sm:w-[800px] h-[800px] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full blur-3xl bg-gradient-to-br from-purple-900/60 via-blue-900/60 to-violet-900/60 opacity-40 animate-pulse-slow" />

        {/* Title Sponsors with Card-like Styling */}
        <div className="mt-20 animate-slideUp">
          <h2 className="font-extrabold tracking-tighter text-4xl sm:text-5xl xl:text-6xl text-center animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">Title Sponsors</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-16 m-8 animate-fadeInDelay">
            <a
              href="https://www.codewinglet.com/"
              target="_blank"
              title="CodeWinglet"
              className="relative group w-4/5 sm:w-1/3 md:w-1/4 aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-purple-500/60 transition-all duration-500"
            >
              <img
                src="/sponsers/codewinglet.svg"
                alt="CodeWinglet"
                className="w-full h-full object-contain invert group-hover:scale-110 transition-transform duration-400"
                loading="lazy"
              />
              <div className="絶対 inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </a>
            <a
              href="https://www.instagram.com/v.s.overseas/"
              target="_blank"
              title="V.S Overseas"
              className="relative group w-4/5 sm:w-1/3 md:w-1/4 aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:shadow-purple-500/60 transition-all duration-500"
            >
              <img
                src="/sponsers/vs-overseas.png"
                alt="V.S Overseas"
                className="w-full h-full object-contain invert group-hover:scale-110 transition-transform duration-400"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </a>
          </div>
        </div>

        {/* Tech Partner & Co Sponsor with Fixed and Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-12 mt-20">
          <div className="animate-slideUp">
            <h3 className="font-extrabold tracking-tighter text-3xl sm:text-4xl xl:text-5xl text-center animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Tech Partner</h3>
            <div className="flex justify-center items-center m-8 animate-slideUp-slow">
              <img
                src="/sponsers/msi.png"
                alt="MSI"
                className="w-4/5 sm:w-1/2 md:w-3/4 aspect-video rounded-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-400 animate-fadeInDelay"
                loading="lazy"
              />
            </div>
          </div>
          <div className="animate-slideUp">
            <h3 className="font-extrabold tracking-tighter text-3xl sm:text-4xl xl:text-5xl text-center capitalize animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Co Sponsor</h3>
            <div className="flex justify-center items-center m-8 animate-slideUp-slow">
              <img
                src="/sponsers/ims.png"
                alt="IMS"
                className="w-4/5 sm:w-1/2 md:w-3/4 aspect-video rounded-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-400 animate-fadeInDelay"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Gifting Sponsor with Enhanced Hover Animation */}
        {/* <div className="mt-20 animate-slideUp">
          <h3 className="font-extrabold tracking-tighter text-3xl sm:text-4xl xl:text-5xl text-center capitalize animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Gifting Sponsor</h3>
          <div className="flex justify-center items-center m-8 animate-fadeInDelay">
            <img
              src="/sponsers/lamont.png"
              alt="Lamont"
              className="w-4/5 sm:w-1/3 md:w-1/4 aspect-video rounded-xl bg-white shadow-xl hover:shadow-2xl hover:shadow-pink-500/60 hover:scale-110 transition-all duration-400"
              loading="lazy"
            />
          </div>
        </div> */}

        {/* Supportive Sponsors with Grid and Enhanced Hover Effects */}
        {/* <div className="mt-20 animate-slideUp">
          <h3 className="font-extrabold tracking-tighter text-3xl sm:text-4xl xl:text-5xl text-center capitalize animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Supportive Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 m-8 animate-fadeInDelay">
            {['solex', 'crony', 'samsung', 'chaipartner'].map((sponsor, index) => (
              <img
                key={index}
                src={`/sponsers/${sponsor}.png`}
                alt={sponsor.charAt(0).toUpperCase() + sponsor.slice(1)}
                className="w-full aspect-video rounded-xl bg-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/60 hover:scale-110 transition-all duration-400"
                loading="lazy"
              />
            ))}
          </div>
        </div> */}
      </section>

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
          @keyframes slideUpSlow {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeInDelay {
            0% { opacity: 0; }
            60% { opacity: 0; }
            100% { opacity: 1; }
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
          @keyframes logoGlow {
            0% { filter: brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
            50% { filter: brightness(1.3) drop-shadow(0 0 20px rgba(0, 255, 255, 0.8)); }
            100% { filter: brightness(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)); }
          }
          @keyframes sparkle {
            0% {
              transform: scale(1) translate(0, 0);
              opacity: 1;
              box-shadow: 0 0 5px 2px currentColor;
            }
            100% {
              transform: scale(0) translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
              opacity: 0;
              box-shadow: 0 0 10px 5px currentColor;
            }
          }
          .animate-fadeIn { animation: fadeIn 1.3s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.3s ease-in-out; }
          .animate-slideUp-slow { animation: slideUpSlow 1.5s ease-in-out; }
          .animate-fadeInDelay { animation: fadeInDelay 2s ease-in-out; }
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
          .animate-logo-glow {
            animation: logoGlow 0.8s ease-in-out;
          }
          .animate-sparkle {
            animation: sparkle 0.6s ease-out forwards;
          }
          /* Ensure font consistency */
          h2, h3 {
            font-family: 'Inter', sans-serif;
            letter-spacing: -0.025em;
          }
        `}
      </style>
    </div>
  );
}

export default HomePage;