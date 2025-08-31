import React from "react";
import { useNavigate } from "react-router-dom";

// Capitalized and valid component
const BackIcon = () => {
  return (
    <div className="icon-hover p-2 mb-4 group transition-transform duration-300 hover:scale-110 animate-slideUp rounded-full">
      <span
        className="text-white p-4 text-lg font-bold transition-colors duration-300 group-hover:text-red-400 animate-glitch-flicker"
      >
        Go Back To Team Section
      </span>
    </div>
  );
};

const BackToTeams = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/teams");
  };

  return (
    <button
      onClick={handleBackClick}
      className="focus:outline-none"
      style={{ pointerEvents: "auto", zIndex: 60 }}
    >
      <BackIcon />
    </button>
  );
};

export default BackToTeams;
