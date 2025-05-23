"use client";

import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { Clock, Info, Loader2, Loader2Icon, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "@/services/supabaseClient";
import { toast } from "sonner";
import { InterviewDataContext } from "@/context/InterviewDataContext";

const Interview = () => {
  const { interview_id } = useParams();
  const [interviewData, setInterviewData] = React.useState(null);
  const [userName, setUserName] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext);
  const [userEmail,setUserEmail] =React.useState()
  const router = useRouter();
  useEffect(() => {
    interview_id && GetInterviewDetails();
  }, [interview_id]);
  const GetInterviewDetails = async () => {
    setLoading(true);
    try {
      let { data: Interviews, error } = await supabase
        .from("Interviews")
        .select("jobPosition,jobDescription,duration,type")
        .eq("interview_id", interview_id);
      setInterviewData(Interviews[0]);
      setLoading(false);
      if (Interviews?.length === 0) {
        toast("Interview not found");
        return;
      }
    } catch (error) {
      setLoading(false);
      toast("Incorrect Interview ID");
      console.log(error);
    }
  };

  const onJoinInterview = async () => {
    setLoading(true);
    let { data: Interviews, error } = await supabase
      .from("Interviews")
      .select("*")
      .eq("interview_id", interview_id);
    setInterviewInfo({
      userName: userName,
      userEmail:userEmail,
      interviewData: Interviews[0],
    });
    router.push(`/interview/${interview_id}/start`);
    setLoading(false);
  };
  return (
    <div className="px-10 md:px-28 lg:px-48 xl:px-64 mt-16 bg-secondary">
      <div className="flex flex-col justify-center items-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 mb-20 ">
        <Image
          src={"/logo.png"}
          alt="logo"
          height={100}
          width={200}
          className="w-[140px]"
        />
        <h2 className="font-bold mt-3">AI-Powered Interview Platform </h2>
        <Image
          src={"/interview.png"}
          alt="interview"
          height={500}
          width={500}
          className="w-[280px] my-6"
        />

        <h2 className="font-bold text-xl">{interviewData?.jobPosition}</h2>
        <h2 className="flex gap-2 items-center text-gray-500 mt-3">
          <Clock className="h-4 w-4" />
          {interviewData?.duration} Mins
        </h2>
        <div className="w-full mt-10">
          <h2>Enter your full name</h2>
          <Input
            placeholder="e.g. Panda"
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="w-full mt-4">
          <h2>Enter your email</h2>
          <Input
            placeholder="e.g. panda@gmail.com"
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>
        <div className="p-3 bg-blue-100 flex gap-4 rounded-lg mt-10">
          <Info className="text-primary" />
          <div>
            <h2 className="font-bold">Before you begin</h2>
            <ul>
              <li className="text-sm text-primary">
                - Test your microphone and camera
              </li>
              <li className="text-sm text-primary">
                - Ensure you have a stable internet connection
              </li>
              <li className="text-sm text-primary">
                - Find a Quiet place for interview
              </li>
            </ul>
          </div>
        </div>
        <Button
          className="mt-5 w-full font-bold"
          disabled={!userName || loading}
          onClick={() => onJoinInterview()}
        >
          <Video /> {loading && <Loader2Icon className="animate-spin" />} Join
          Interview
        </Button>
      </div>
    </div>
  );
};

export default Interview;
