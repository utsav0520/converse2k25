import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInSingle } from "../../auth/Register.js";

function RegisterButton({ event }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData?.user);

  const handleSignin = () => {
    navigate("/signin");
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await dispatch(RegisterInSingle({ event }));

      if (res?.success) {
        toast.success("🎉 Your Profile updated successfully !!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });

        setTimeout(() => navigate(`/event/${event}`), 500);
      } else {
        toast.error(res?.message || "Profile Update Failed", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    } catch (err) {
      console.error("Error updating profile", err);
      toast.error("Something went wrong.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full px-4">
      {user?.events?.[event] === true ? (
        <div className="relative borderFor animate-slideUp w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50 text-center">
            <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
              Already Registered
            </p>
          </div>
        </div>
      ) : user ? (
        <div className="relative borderFor animate-slideUp w-full max-w-2xl mx-auto">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50">
            <button
              onClick={handleRegister}
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </div>
      ) : (
        <div className="relative borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
          <div className="absolute inset-0 z-0 animate-twinklingStars bg-gradient-to-br from-black via-gray-900 to-black opacity-30" />
          <div className="absolute inset-0 z-10 animate-neon-glow pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:blur-2xl" />
          <div className="relative z-50">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
              Please Signin First...
            </h1>
            <button
              onClick={handleSignin}
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
            >
              Sign In
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

export default RegisterButton;