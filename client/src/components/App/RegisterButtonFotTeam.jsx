import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterInTeam, fetchEmails } from "../../auth/Register.js";

function RegisterButtonFotTeam({ event }) {
  const [loading, setLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [emailOptions, setEmailOptions] = useState([]);
  const [selectedEmailsList, setSelectedEmailsList] = useState([]); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.authData?.user);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("profile");
      if (token) {
        const { data } = await dispatch(fetchEmails({ event }));
        setEmailOptions(data?.unregisteredEmails || []);
      }
    };

    fetchData();
  }, [dispatch, event]);

  const handleAddEmail = () => {
    if (!selectedEmail) {
      toast.warn("Please select an email before adding.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
      });
      return;
    }
    if (selectedEmailsList.includes(selectedEmail)) {
      toast.info("This email is already added.", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }
    setSelectedEmailsList((prev) => [...prev, selectedEmail]);
    setSelectedEmail("");
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
        RegisterInTeam({ event, emails: selectedEmailsList })
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
    return (
      <div className="text-green-500 font-semibold">Already Registered</div>
    );
  }

  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto px-4">
      <div className="flex gap-2">
        <select
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
          className="flex-grow border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="">Select Email</option>
          {emailOptions.map((email, idx) => (
            <option key={idx} value={email}>
              {email}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddEmail}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          disabled={!selectedEmail}
        >
          Add
        </button>
      </div>

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
        disabled={loading || selectedEmailsList.length === 0}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </div>
  );
}

export default RegisterButtonFotTeam;
