import React from "react";

// Icon Component
const BackIcon = ({name}) => {
  return (
    <div className="flex justify-center mt-6 items-center text-center">
      <div className="icon-hover mb-4 group transition-transform duration-300 hover:scale-110 animate-slideUp rounded-full bg-purple-700 px-6 py-3">
        <span className="text-white text-lg font-bold text-center transition-colors duration-300 group-hover:text-red-400 animate-glitch-flicker">
          Register Right Now {name}
        </span>
      </div>
    </div>
  );
};

// Main Button Component
const RegisterButtonforNonTech = ({ event }) => {
  const handleRegisterClick = () => {
    if (event?.link) {
      window.open(event.link, "_blank");
    } else {
      console.warn("No registration link found for this event.");
    }
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="focus:outline-none"
      style={{ pointerEvents: "auto", zIndex: 60 }}
    >
      <BackIcon name={event.name} />
    </button>
  );
};

export default RegisterButtonforNonTech;
