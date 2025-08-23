import React from "react";
import { Instagram } from "lucide-react";

function AppFottor() {
  return (
    <div className="border-t w-full bg-black text-white animate-fadeIn z-10 relative">
      <div
        className="max-w-full mx-auto grid grid-cols-2 pt-20 px-3 pb-36 text-sm md:text-base z-20"
        style={{ overflow: "hidden" }}
      >
        {/* Column 1: Faculty + HOD */}
        <div className="flex flex-col col-span-1 gap-1 mx-auto animate-slideUp">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 animate-glitchFlicker">
            Head of Department
          </h1>
          <p className="text-muted-foreground">Dr. Vivaksha Jariwala</p>

          <h1 className="mt-6 mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600 animate-glitchFlicker">
            Faculty Coordinators
          </h1>
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground">Prof. Hiren Vavaiya</p>
            <p className="text-muted-foreground">Prof. Ankita Patel</p>
            <p className="text-muted-foreground">Prof. Karishma Desai</p>
            <p className="text-muted-foreground">Prof. Nitya Komalan</p>
          </div>
        </div>

        {/* Column 2: Student Heads + Instagram */}
        <div className="col-span-1 mx-auto animate-slideUp">
          <h1 className="mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 animate-glitchFlicker">
            Student Heads
          </h1>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <p>Vachhani Utsav (+91 9512655868)</p>
            <p>Vachhani Utsav (+91 9512655868)</p>
            <p>Vachhani Utsav (+91 9512655868)</p>
            <p>Vachhani Utsav (+91 9512655868)</p>
          </div>

          {/* Instagram Link */}
          <a
            href="https://instagram.com/converse2k25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start mt-8 gap-2 text-muted-foreground hover:underline"
          >
            <Instagram />
            <span>Follow us</span>
          </a>
        </div>

        {/* Footer Copyright */}
        <p className="col-span-2 mt-8 text-center text-muted-foreground/70 animate-slideUp">
          © Converse 2025. All Rights Reserved
        </p>

        {/* Animated Background (fixed with pointer-events-none) */}
        <div
          className="absolute inset-0 animate-neon-glow pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-2xl"
          style={{ clipPath: "inset(0)" }}
        />
      </div>

      {/* Animations and Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.1) translate(-50%, -50%); opacity: 0.5; }
          }
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.9); }
            4% { opacity: 1; text-shadow: none; }
            6% { opacity: 0.9; text-shadow: -2px -2px 4px rgba(0, 255, 255, 0.9); }
            8% { opacity: 1; text-shadow: none; }
            100% { opacity: 1; text-shadow: none; }
          }

          .animate-fadeIn { animation: fadeIn 1.2s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.2s ease-in-out; }
          .animate-neon-glow::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(90, 24, 154, 0.5), rgba(0, 255, 255, 0.5));
            border-radius: 50%;
            filter: blur(20px);
            animation: neonGlow 3s infinite ease-in-out;
            z-index: -1;
          }

          a:hover {
            transition: color 0.3s ease;
          }

          .grid {
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
    </div>
  );
}

export default AppFottor;