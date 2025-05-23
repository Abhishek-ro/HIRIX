
import React from "react";
import WelcomeContainer from "./_components/WelcomeContainer";
import CreateOptions from "./_components/CreateOptions";
import LatestInterview from "./_components/LatestInterview";
import Provider from "@/app/provider";


const Dashboard = () => {
  
  return (
    <Provider>
    <div>
      
      <h2 className="my-3 font-bold text-2xl">Dashboard</h2>
      <CreateOptions />
      <LatestInterview />
    </div>
    </Provider>
  );
};

export default Dashboard;
