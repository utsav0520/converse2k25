import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInTeam, fetchEmails } from "../../auth/Register.js";
import EmailDropdown from "./EmailDropdown.jsx";

function RegisterButtonFotTeam({ event, min, max }) {
  const [loading, setLoading] = useState(false);
  const [emailOptions, setEmailOptions] = useState([]);
  const [selectedEmailsList, setSelectedEmailsList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData?.user);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("profile");
      if (token && user?.events?.[event] === false) {
        const { data } = await dispatch(fetchEmails({ event }));
        setEmailOptions(data?.unregisteredEmails || []);
      }
    };
    fetchData();
  }, [dispatch, event, user]);

  const handleSignin = () => {
    navigate("/signin");
  };

  const handleAddEmail = (email) => {
    if (!email) {
      toast.warn("Please select an email before adding.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }

    if (selectedEmailsList.includes(email)) {
      toast.info("This email is already added.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    setSelectedEmailsList((prev) => [...prev, email]);
  };

  const handleRemoveEmail = (emailToRemove) => {
    setSelectedEmailsList((prev) =>
      prev.filter((email) => email !== emailToRemove)
    );
  };

  const handleRegister = async () => {
    if (selectedEmailsList.length === 0) {
      toast.warn("Please add at least one email before registering.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await dispatch(
        RegisterInTeam({ event, email: selectedEmailsList })
      );

      if (res?.success) {
        toast.success("🎉 Registered successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
        setTimeout(() => navigate(`/event/${event}`), 500);
      } else {
        toast.error(res?.message || "Registration failed", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    } catch (err) {
      console.error("Error registering team", err);
      toast.error("Something went wrong.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
    setLoading(false);
  };

  const team = user?.events?.[event]?.team || [];

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      {user?.events?.[event] === true ? (
        <div className="relative borderFor animate-slideUp w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50 text-center">
            <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">Already Registered</p>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
              <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">Your Team:</p>
              <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                {team.length > 0 ? (
                  <ul className="list-disc list-inside text-sm text-gray-300">
                    {team.map((member, i) => (
                      <li key={i} className="hover:text-cyan-300 transition-colors duration-300">
                        {member.fullName} ({member.email})
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No team members listed.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : !user ? (
        <div className="relative borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">Please Sign In First...</h1>
            <button
              onClick={handleSignin}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
            >
              Sign In
            </button>
          </div>
        </div>
      ) : (
        <div className="relative borderFor flex flex-col gap-6 max-w-2xl mx-auto animate-slideUp w-full">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50">
            <EmailDropdown
              emailOptions={emailOptions}
              handleAddEmail={handleAddEmail}
              selectedEmailsList={selectedEmailsList}
              min={min}
              max={max}
            />

            {selectedEmailsList.length > 0 && (
              <div className="border border-gray-300 rounded p-4 bg-gray-800/50 backdrop-blur-sm animate-fadeIn w-full mt-4">
                <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">Selected Emails</h3>
                <ul className="space-y-2 max-h-48 overflow-auto">
                  {selectedEmailsList.map((email, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center bg-transparent p-3 rounded shadow-sm hover:bg-gray-700/50 transition-all duration-300 w-full"
                    >
                      <span className="truncate text-gray-300">{email}</span>
                      <button
                        onClick={() => handleRemoveEmail(email)}
                        className="text-red-600 hover:text-red-800 font-semibold transition-colors duration-300"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleRegister}
              disabled={
                loading ||
                selectedEmailsList.length < min - 1 ||
                selectedEmailsList.length > max
              }
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 w-full mt-4"
            >
              {loading
                ? "Registering..."
                : `Register (${selectedEmailsList.length + 1}) | min: ${min} max: ${max}`}
            </button>
          </div>
        </div>
      )}

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
          @keyframes glitchFlicker {
            0% { opacity: 1; text-shadow: none; }
            2% { opacity: 0.8; text-shadow: 2px 2px 4px rgba(0, 255, 255, 0.9); }
            4% { opacity: 1; text-shadow: none; }
            6% { opacity: 0.9; text-shadow: -2px -2px 4px rgba(0, 255, 255, 0.9); }
            8% { opacity: 1; text-shadow: none; }
            100% { opacity: 1; text-shadow: none; }
          }
          @keyframes twinklingStars {
            0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
            50% { transform: rotate(180deg) scale(1.05); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
          }
          @keyframes neonGlow {
            0%, 100% { transform: scale(1) translate(-50%, -50%); opacity: 0.3; }
            50% { transform: scale(1.1) translate(-50%, -50%); opacity: 0.5; }
          }
          .animate-fadeIn { animation: fadeIn 1.2s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.2s ease-in-out; }
          .animate-glitchFlicker { animation: glitchFlicker 3s linear infinite; }
          .animate-twinklingStars { animation: twinklingStars 20s linear infinite; }
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
          .borderFor {
            border: 2px solid rgba(0, 255, 255, 0.3);
            padding: 20px;
            border-radius: 20px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            position: relative;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}

export default RegisterButtonFotTeam;