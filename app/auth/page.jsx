"use client";


import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import React from "react";

const login = () => {
  const signInWithGoogle = async() => {
    const {error}=await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}`,
      },
    })

    if (error) {
      console.log("Error signing in with Google:", error.message);
    }

  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex flex-col items-center justify-center  sm:border sm:rounded-2xl sm:p-2xl">
        <img
          src="authLogo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[120px] h-[auto] rounded-2xl mb-4 sm:w-[140px]"
        />

        <div className="flex items-center flex-col gap-3 rounded-lg p-10 mt-[-50px] ">
          <Image
            src={"/side-logo.png"}
            width={600}
            height={400}
            alt="Side_Img"
            className="w-[400px] h-[auto] rounded-2xl"
          />
          <h2 className="text-2xl font-bold text-center text-white mt-5">
            Welcome to Hirix
          </h2>
          <p className="text-gray-400 text-center">
            Sign in with Google Authentication
          </p>
          <Button className="mt-4 w-full" onClick={signInWithGoogle}>Login with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default login;
