import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInTeam, fetchEmails } from "../../auth/Register.js";
import EmailDropdown from "./EmailDropdown.jsx";

function RegisterButtonFotTeam({ event, min, max }) {
  const [loading, setLoading] = useState(false);
  // const [selectedEmail, setSelectedEmail] = useState("");
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

  if (user?.events?.[event]) {
    const teamKey = `${event}Team`;
    const team = user?.events?.[teamKey] || [];

    return (
      <div className="borderFor font-bold text-center">
        <p className="text-2xl md:text-4xl gradientText">Already Registered</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <p className="text-xl gradientText">This is Your Team : </p>
          <p className="fo">
            {team.length > 0 && (
              <ul className="list-disc list-inside text-sm gradientText">
                {team.map((member, i) => (
                  <li key={i}>
                    {member.fullName} ({member.email})
                  </li>
                ))}
              </ul>
            )}
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="borderFor">
        <div>
          <h1>Please Singin First....</h1>
        </div>
        <button
          onClick={handleSignin}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
        >
          SignIn
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col borderFor gap-4 max-w-full mx-auto ">
      <EmailDropdown
        emailOptions={emailOptions}
        handleAddEmail={handleAddEmail}
        selectedEmailsList={selectedEmailsList}
        min={min}
        max={max}
      />

      {selectedEmailsList.length > 0 && (
        <div className="border border-gray-300 rounded p-3 ">
          <h3 className="font-semibold mb-2">Selected Emails</h3>
          <ul className="space-y-1 max-h-40 overflow-auto">
            {selectedEmailsList.map((email, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-transparent p-2 rounded shadow-sm"
              >
                <span className="truncate">{email}</span>
                <button
                  onClick={() => handleRemoveEmail(email)}
                  className="text-red-600 hover:text-red-800 font-semibold"
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
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
      >
        {loading
          ? "Registering..."
          : `Register (${
              selectedEmailsList.length + 1
            })  added more min : ${min} max : ${max}`}
      </button>
    </div>
  );
}

export default RegisterButtonFotTeam;
