"use client";
import { useUser } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import { Camera, Video } from "lucide-react";
import React, { useEffect } from "react";
import InterviewCard from "./InterviewCard";
import { toast } from "sonner";

const LatestInterview = () => {
  const [interviewList, setInterviewList] = React.useState([]);
  const { user } = useUser();
  useEffect(() => {
    user && GetInterviewList();
  }, [user]);
  const GetInterviewList = async () => {
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("userEmail", user?.email)
      .order('id',{ascending:false})
      .limit(6)

    setInterviewList(Interviews);
  };
  
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously Created Interviews</h2>
      {interviewList?.length === 0 && (
        <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Video className="h-10 w-10 text-primary" />
          <h2>Yor don'have any Interview created!</h2>
          <Button>+ Create New Interview</Button>
        </div>
      )}
      {interviewList && <div className="grid grid-cols-2  xl:grid-cols-3 gap-5">
        {interviewList.map((interview,index)=>(
          <InterviewCard key={index} interview={interview}/>
        ))}</div>}
    </div>
  );
};

export default LatestInterview;
