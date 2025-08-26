import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formOptions from "../constants/formOptions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "../auth/auth";

function Profile() {
  const auth = useSelector((state) => state.auth?.authData?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    enrollment: "",
    year: "",
    department: "",
    college: "SCET",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth) {
      setFormData((prev) => ({
        ...prev,
        ...auth,
        college: auth.college || "SCET",
      }));
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await dispatch(updateProfile(formData));

      if (res?.success) {
        toast.success("🎉 Your Profile updated successfully !!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });

        setTimeout(() => navigate("/"), 100);
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
    <div className="relative min-h-screen py-12 px-6 bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      {/* Enhanced Dynamic Animated Background with Subtle Stars and Gradient */}
      <div className="absolute inset-0 z-0 w-full h-full animate-twinkling-stars bg-[url('/textures/starry-bg.png')] bg-cover opacity-50" />
      <div className="absolute inset-0 z-10 w-full h-full animate-neon-glow before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-900/30 before:via-blue-900/30 before:to-purple-900/30 before:rounded-full before:blur-3xl" />

      {/* Main Content */}
      <div className="relative z-40 w-full max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-2xl animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 tracking-tighter animate-glitch-flicker text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Text fields */}
          {[
            { name: "fullName", label: "Full Name", placeholder: "Enter your Full Name" },
            { name: "email", label: "Email", disabled: true },
            { name: "enrollment", label: "Enrollment Number", placeholder: "Enter your Enrollment Number" },
            { name: "mobileNumber", label: "Mobile Number", placeholder: "Enter your Mobile Number" },
          ].map(({ name, label, disabled = false, placeholder = "" }) => (
            <div key={name} className="animate-fadeIn">
              <label className="block mb-2 text-sm font-medium text-gray-300">{label}:</label>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                disabled={disabled}
                placeholder={placeholder}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-cyan-500"
              />
            </div>
          ))}

          {/* Reusable selects */}
          {[
            { name: "department", label: "Department", options: formOptions.departments },
            { name: "year", label: "Year", options: formOptions.years },
            { name: "college", label: "College Name", options: formOptions.colleges },
          ].map(({ name, label, options }) => (
            <div key={name} className="animate-fadeIn">
              <label className="block mb-2 text-sm font-medium text-gray-300">{label}:</label>
              <select
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-900/70 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-cyan-500"
                required
              >
                {options.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50 animate-fadeIn hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>

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
          .animate-fadeIn { animation: fadeIn 1.3s ease-in-out; }
          .animate-slideUp { animation: slideUp 1.3s ease-in-out; }
          .animate-glitch-flicker { animation: glitchFlicker 3s linear infinite; }
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
          /* Ensure font consistency */
          h2 {
            font-family: 'Inter', sans-serif;
            letter-spacing: -0.025em;
          }
        `}
      </style>
    </div>
  );
}

export default Profile;