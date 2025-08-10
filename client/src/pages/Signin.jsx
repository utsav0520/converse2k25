import React from "react";
import { converse2k25 } from "../assets/index";
import { GoogleSignIn } from '../components/App/GoogleSignIn'

function SignIn() {
  return (
    <div className="h-screen m-3 flex justify-center items-center">
      <div className="border-3 border-primary rounded-3xl p-8  grid grid-cols-1 md:grid-cols-2 bg-divider">
        <div className="flex justify-center items-center">
          <img src={converse2k25} alt="converse2k24" className="h-60 w-60" />
        </div>
        <div className="text-center p-2 m-6 md:m-0">
          <p>Sign In</p>
          <p className="font-bold m-4">Sign in and be part of Converse 2k25</p> 
            <div className="">
              <GoogleSignIn/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
