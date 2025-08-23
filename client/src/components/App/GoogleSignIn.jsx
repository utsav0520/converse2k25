import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleSignIn } from "../../auth/auth.js";
import {useState } from 'react'

function GoogleIconShown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 48 48"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8
        c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12
        c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
        C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
        c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20
        C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
        c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
        C29.211,35.091,26.715,36,24,36
        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025
        C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303
        c-0.792,2.237-2.231,4.166-4.087,5.571
        l6.19,5.238C36.971,39.205,44,34,44,24
        C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

export const GoogleSignIn = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    flow: "implicit", 
    onSuccess: async (tokenResponse) => {
      try {
        const accessToken = tokenResponse.access_token;

        // fetch user info from Google API
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const user = await res.json();

        const userData = {
          fullName: user.name,
          email: user.email,
          googleId: user.sub,
          token: accessToken,
        };

        setLoading(true);
        const googleRes = await dispatch(googleSignIn(userData));
        setLoading(false);

        if (googleRes?.success) {
          toast.success("🎉 Google Sign in Done !!", {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
          });

          setTimeout(() => navigate(`/profile`), 500);
        } else {
          toast.error(googleRes?.message || "Signup failed", {
            position: "top-right",
            autoClose: 5000,
            theme: "dark",
          });
        }
      } catch (error) {
        console.error("Google Login Error:", error);
        toast.error("Login failed. Please try again.");
      }
    },
    onError: () => {
      toast.error("Google Sign In failed. Try again later.");
    },
  });

  return (
    <div
      onClick={login}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && login()}
      className="cursor-pointer flex justify-center items-center m-2 md:m-4 p-2 gap-6 border-2 border-primary bg-transparent rounded-2xl icon-hover hover:font-bold"
    >
      <div>
        <GoogleIconShown />
      </div>
      <p className="text-center text-sm">{loading ? "Signing in..." : "Sign in with Google"}</p>
    </div>
  );
};
