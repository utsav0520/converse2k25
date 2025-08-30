import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import { toast } from "react-toastify";

const IconDisplay = ({ icon, link }) => {
  return (
    <Link to={link} className="block no-underline" style={{ pointerEvents: "auto", zIndex: 60 }}>
      {/* Container with a refined hover effect that scales up slightly and is now perfectly round */}
      <div className="icon-hover p-2 group transition-transform duration-300 hover:scale-110 animate-slideUp rounded-full">
        {React.cloneElement(icon, { className: "text-white transition-colors duration-300 group-hover:text-cyan-300 animate-glitch-flicker" })}
      </div>
    </Link>
  );
};

function AppBar() {
  const user = useSelector((state) => state.auth?.authData?.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      localStorage.clear();
      dispatch({ type: LOGOUT });
      toast.success("Logout successful!", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-center py-3 z-50">
      {/* Enhanced main container with distinct background */}
      <div className="relative bg-gradient-to-r from-purple-900/50 via-black/70 to-purple-900/50 border-primary px-4 py-2 rounded-3xl backdrop-blur-md text-sm border flex gap-4 animate-fadeIn" style={{ borderWidth: "3px", zIndex: 50 }}>
        {/* Animated Background with Gradient */}
        <div className="absolute inset-0 z-0 animate-background-pulse" style={{ borderRadius: "1.75rem" }} />
        <div className="absolute inset-0 z-10 animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" style={{ zIndex: 20 }} />
        <div className="absolute inset-0 z-15 bg-gradient-to-r from-black/40 via-purple-950/40 to-black/40 animate-background-shift" style={{ borderRadius: "1.75rem" }} />

        <IconDisplay icon={<HomeIcon />} link="/" />
        <IconDisplay icon={<EventNoteIcon />} link="/events" />
        <IconDisplay icon={<PeopleIcon />} link="/teams" />
        <IconDisplay icon={<InfoIcon />} link="/about" />

        {!user ? (
          <IconDisplay icon={<LoginIcon />} link="/signin" />
        ) : (
          <>
            <IconDisplay icon={<PersonIcon />} link="/profile" />
            <div className="bg-divider h-full w-0.5 rounded-3xl"></div>
            <button onClick={handleLogout} className="focus:outline-none" style={{ pointerEvents: "auto", zIndex: 60 }}>
              <div className="icon-hover p-2 group transition-transform duration-300 hover:scale-110 animate-slideUp rounded-full">
                {React.cloneElement(<LogoutIcon />, { className: "text-white transition-colors duration-300 group-hover:text-red-400 animate-glitch-flicker" })}
              </div>
            </button>
          </>
        )}
      </div>
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
            50% { transform: scale(1.2) translate(-50%, -50%); opacity: 0.5; }
          }
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.9); }
            4% { opacity: 1; text-shadow: none; }
            6% { opacity: 0.9; text-shadow: -2px -2px 4px rgba(0, 255, 255, 0.9); }
            8% { opacity: 1; text-shadow: none; }
            100% { opacity: 1; text-shadow: none; }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes background-shift {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 0%; }
            100% { background-position: 0% 0%; }
          }
          @keyframes background-pulse {
            0% { opacity: 0.6; }
            50% { opacity: 0.9; }
            100% { opacity: 0.6; }
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
            filter: blur(80px);
            animation: neonGlow 3s infinite ease-in-out;
            z-index: -1;
          }
          .animate-pulse { animation: pulse 2s infinite ease-in-out; }
          .animate-background-shift { animation: background-shift 8s ease-in-out infinite; }
          .animate-background-pulse { animation: background-pulse 4s infinite ease-in-out; }
          .icon-hover:hover {
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
          }
          .icon-hover { background: rgba(255, 255, 255, 0.1); }
          /* Ensure smooth rendering */
          .icon-hover:hover > * {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </div>
  );
}

export default AppBar;