import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className="relative min-h-screen py-12 px-6 bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 animate-twinkling-stars bg-[radial-gradient(at_50%_50%,_transparent_30%,_#1a0033_70%)] opacity-50" />
        <div className="absolute inset-0 z-10 animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

        <div className="relative z-40">
          <div className="about-page animate-fadeIn">
            <h2 className="abhead text-3xl md:text-5xl font-extrabold text-center mb-12 tracking-tighter animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
              Don't know about <span className="highlight text-cyan-400">CONVERSE</span>?, here you go.
            </h2>

            {/* Centered Image Section */}
            <section className="section mb-16 animate-slideUp">
              <div className="flex justify-center mb-8">
                <img
                  src="https://media.tenor.com/0Ash_cvyKGAAAAAM/space-exploration.gif"
                  alt="Converse 2K25"
                  className="banner-image w-full md:w-1/2 rounded-lg shadow-lg animate-pulse"
                />
              </div>
              <div className="">
                <h2 className="title text-2xl md:text-4xl font-bold mb-4 animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  Step into Tomorrow at Converse 2K25 - A Fusion of Innovation and Inspiration!🚀
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Get ready for an exciting journey into the world of technology and creativity! The Information Technology & Artificial Intelligence and Data Science departments of Sarvajanik College of Engineering and Technology are thrilled to present Converse 2K25. Mark your calendars for the 19th and 20th of September, 2025, as this event unfolds under the vibrant banner of Kshitij.
                </p>
              </div>
            </section>

            <section className="section mb-16 animate-slideUp">
              <h2 className="subtitle text-2xl md:text-3xl font-semibold mb-6 animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                A Fusion of Tech and Artistry
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Converse 2K25 is far from your average technical festival; it's an inspiring blend of the latest in technology and limitless creativity. Featuring an impressive lineup of 10 technical and 8 non-technical events, this festival is a vibrant stage for the sharpest minds and the most inventive spirits. Immerse yourself in the realm of IT, or let your creativity shine in diverse non-technical areas like art, sports, and entrepreneurship.
              </p>
            </section>

            <section className="section mb-16 animate-slideUp">
              <h2 className="subtitle text-2xl md:text-3xl font-semibold mb-6 animate-glitchFlicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300">
                Why Converse 2K25?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Converse 2K25 isn't just a festival; it's a chance to connect with fellow enthusiasts, gain insights from industry leaders, and navigate your path into the future of technology and innovation. Mark your calendars and join us for an unforgettable experience that will leave you inspired, informed, and energized. The future is here, and it's unfolding at Converse 2K25!
              </p>
            </section>
          </div>
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
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 3px 3px 6px rgba(255, 255, 255, 0.9), -3px -3px 6px rgba(0, 255, 255, 0.9); transform: skewX(-4deg); }
            4% { opacity: 1; text-shadow: none; transform: skewX(0); }
            6% { opacity: 0.9; text-shadow: -3px -3px 6px rgba(255, 255, 255, 0.9), 3px 3px 6px rgba(0, 255, 255, 0.9); transform: skewX(4deg); }
            8% { opacity: 1; text-shadow: none; transform: skewX(0); }
            100% { opacity: 1; text-shadow: none; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.5; }
          }
          @keyframes twinklingStars {
            0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
            50% { transform: rotate(180deg) scale(1.05); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-fadeIn { animation: fadeIn 1.3s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.3s ease-in-out; }
          .animate-glitchFlicker { animation: glitchFlicker 3s linear infinite; }
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
            animation: twinklingStars 25s linear infinite;
            filter: blur(20px);
            opacity: 0.7;
          }
          .animate-pulse { animation: pulse 2s infinite ease-in-out; }
          .abhead .highlight { animation: glitchFlicker 2s infinite; }
          .lin a:hover { color: #00ffcc; transition: color 0.3s ease; }
          .teams-section { padding: 20px 0; }
          .lin { display: flex; justify-content: center; align-items: center; gap: 2rem; }
          .about-page { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          .section { display: flex; flex-direction: column; gap: 20px; }
          .banner-image { max-height: 300px; object-fit: cover; }
          .title { font-size: 1.875rem; line-height: 2.25rem; }
          .subtitle { font-size: 1.5rem; line-height: 2rem; }
          @media (min-width: 768px) {
            .title { font-size: 2.25rem; line-height: 2.5rem; }
            .subtitle { font-size: 1.875rem; line-height: 2.25rem; }
          }
        `}
      </style>
    </>
  );
};

export default AboutPage;