"use client";

import { useUser } from "@/app/provider";
import Image from "next/image";

import React from "react";

const WelcomeContainer = () => {

  const {user}=useUser();
  
  return (
    <div className=" bg-white rounded-xl p-5 flex justify-between items-center ">
      <div>
        <h2 className="font-lg font-bold">Welcome back, {user?.name}</h2>
        <h2 className="text-gray-500">AI-Driven Interviews,Hirix</h2>
      </div>
      {user && (
        <Image
          src={user?.picture}
          alt="user Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
    </div>
  );
};

export default WelcomeContainer;
