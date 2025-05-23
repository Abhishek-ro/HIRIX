"use client";

import { useUser } from "@/app/provider";
import { supabase } from "@/services/supabaseClient";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import InterviewDetailedContainer from "./_components/InterviewDetailedContainer";
import CandidateList from "./_components/CandidateList";

const InterviewDetails = () => {
  const { interview_id } = useParams();
  const {user} =useUser()
  const[interviewDetail,setInterviewDetail]=useState()
  useEffect(()=>{
    user&& GetInterviewDetail()
  },[user])
  const GetInterviewDetail = async () => {
    try {
      const result = await supabase
        .from("Interviews")
        .select(
          `jobPosition, jobDescription, questionList, type, duration, interview_id, created_at, interview-feedback(userEmail, userName, feedback, created_at)`
        )
        .eq("userEmail", user?.email)
        .eq("interview_id", interview_id);

      if (result.error) {
        console.error("Supabase Error:", result.error.message);
        return;
      }

      setInterviewDetail(result.data?.[0]);
    } catch (error) {
      console.error("Unexpected Error:", error);
    }
  };
  
  return (
    <div>
      <h2 className="font-bold text-2xl">Interview Details</h2>
      <InterviewDetailedContainer interviewDetail={interviewDetail}/>
      <CandidateList candidateList={interviewDetail?.["interview-feedback"]}  />
    </div>
  );
};

export default InterviewDetails;
