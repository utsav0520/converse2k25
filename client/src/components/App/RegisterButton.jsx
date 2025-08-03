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
  console.log(user);

  return user?.events?.[event] === true ? (
    <div className="borderFor font-bold text-center">
      <p className="text-2xl md:text-4xl gradientText">Already Registered</p>
    </div>
  ) : user ? (
    <button
      onClick={handleRegister}
      disabled={loading}
      className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
    >
      {loading ? "Registering..." : "Register"}
    </button>
  ) : (
    <>
      <div>
        <h1>Please Singin First....</h1>
      </div>
      <button
        onClick={handleSignin}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-all duration-200 disabled:opacity-50"
      >
        SignIn
      </button>
    </>
  );
}

export default RegisterButton;
