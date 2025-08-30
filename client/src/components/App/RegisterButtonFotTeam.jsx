import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInTeam, fetchEmails } from "../../auth/Register.js";
import EmailDropdown from "./EmailDropdown.jsx";
import { eventWhatsappLinks } from "../../constants/EventListing.js";

function RegisterButtonForTeam({ event, min, max }) {
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

  const handleSignin = () => navigate("/signin");
  const whatsappLink = eventWhatsappLinks[event];

  const handleAddEmail = (email) => {
    if (!email) {
      toast.warn("Please select an email before adding.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }
    if (email === user.email) {
      toast.info("You cannot add your own email.", {
        position: "top-right",
        autoClose: 3000,
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
    if (
      user.fullName == "" ||
      !user.college ||
      !user.mobileNumber ||
      !user.enrollment ||
      !user.department ||
      !user.year
    ) {
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
      const res = await dispatch(
        RegisterInTeam({ event, email: selectedEmailsList })
      );

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

  const teamKey = `${event}Team`;
  const team = user?.events?.[teamKey] || user?.teams?.[event] || [];

  // Already Registered
  if (user?.events?.[event]) {
    return (
      <div className="flex items-center justify-center">
        <div className="borderFor font-bold text-center animate-slideUp w-full max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
            Already Registered
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mt-6">
            <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
              This is Your Team:
            </p>
            <div className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-lg">
              {team.length > 0 ? (
                <ul className="list-disc list-inside text-sm text-gray-300">
                  {team.map((member, i) => (
                    <li
                      key={i}
                      className="hover:text-cyan-300 transition-colors duration-300"
                    >
                      {member.fullName} ({member.email})
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No team members listed.</p>
              )}
            </div>
          </div>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block m-4 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded-lg transition duration-300"
            >
              Join WhatsApp Group
            </a>
          )}
        </div>
      </div>
    );
  }

  // Not Signed In
  if (!user) {
    return (
      <div className="flex items-center justify-center">
        <div className="borderFor animate-slideUp w-full max-w-md text-center space-y-2">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
            Please Sign in First...
          </h1>
          <button
            onClick={handleSignin}
            className="px-6 py-2 m-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  // Registration UI
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="borderFor gap-4 max-w-3xl animate-slideUp w-full">
        <EmailDropdown
          emailOptions={emailOptions}
          handleAddEmail={handleAddEmail}
          selectedEmailsList={selectedEmailsList}
          min={min}
          max={max}
        />

        {selectedEmailsList.length > 0 && (
          <div className="border border-gray-300 rounded p-4 bg-gray-800/50 backdrop-blur-sm animate-fadeIn w-full">
            <h3 className="font-semibold p-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 animate-glitchFlicker">
              Selected Emails
            </h3>
            <ul className="space-y-2 max-h-48 overflow-auto">
              {selectedEmailsList.map((email, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-transparent p-3 rounded shadow-sm hover:bg-gray-700/50 transition-all duration-300 w-full"
                >
                  <span className="truncate text-gray-300">{email}</span>
                  <button
                    onClick={() => handleRemoveEmail(email)}
                    className="text-red-600 p-2 hover:text-red-800 font-semibold transition-colors duration-300"
                    aria-label={`Remove ${email}`}
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
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 w-full max-w-xs mx-auto"
        >
          {loading
            ? "Registering..."
            : `Register (${
                selectedEmailsList.length + 1
              }) added · min: ${min} max: ${max}`}
        </button>

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
    </div>
  );
}

export default RegisterButtonForTeam;
