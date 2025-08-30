import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInSingle } from "../../auth/Register.js";
import { eventWhatsappLinks } from '../../constants/EventListing.js'

function RegisterButton({ event }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData?.user);
  const whatsappLink = eventWhatsappLinks[event];
  const handleSignin = () => navigate("/signin");

  const handleRegister = async () => {
    setLoading(true);
    if(user.fullName == "" || !user.college || !user.mobileNumber || !user.enrollment || !user.department || !user.year) {
      toast.error("Please complete your profile before registering.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
      navigate("/profile");
      setLoading(false);
      return;
    }

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
    <div className="flex items-start justify-center  w-full px-4">
      {user?.events?.[event] === true ? (
        <div className="borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
            Already Registered
          </p>

          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
            >
              Join WhatsApp Group
            </a>
          )}
        </div>
      ) : user ? (
        <div className="borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
          <button
            onClick={handleRegister}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </div>
      ) : (
        <div className="borderFor animate-slideUp w-full max-w-2xl mx-auto text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
            Please Sign In First...
          </h1>
          <button
            onClick={handleSignin}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
          >
            Sign In
          </button>
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
          .animate-fadeIn { animation: fadeIn 1.2s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.2s ease-in-out; }
          .animate-glitchFlicker { animation: glitchFlicker 3s linear infinite; }
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
