"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import React from "react";
import FormContainer from "./_components/FormContainer";
import QuestionList from "./_components/QuestionList";
import { toast } from "sonner";
import InterviewLink from "./_components/InterviewLink";
import { useUser } from "@/app/provider";
const createInterview = () => {
  const router = useRouter();
  const [step, setStep] = React.useState(1);
  const [formdata, setFormData] = React.useState({});
  const [interviewId, setInterviewId] = React.useState(null);
  const {user} =useUser()
  const onHandleChange = (feild, value) => {
    setFormData((prev) => ({
      ...prev,
      [feild]: value,
    }));
  };
  const ongoToNext = () => {
    if (!user){
      toast("Please Login!!!");
      return router.push("/auth");
    }
      if (
        !formdata?.jobPosition ||
        !formdata.jobDescription ||
        !formdata.duration ||
        !formdata.type.length
      ) {
        toast("Please fill all the fields!");
      } else setStep(step + 1);
  };

  const onCreateLink = (interview_id) => {
    setInterviewId(interview_id);
    setStep(step + 1);
  };

  return (
    <div className="px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex items-center gap-5">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <h2 className="font-bold text-2xl">Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className="my-5" />

      {step === 1 ? 
        <FormContainer
          onHandleChange={onHandleChange}
          gotoNext={() => ongoToNext()}
        />
       : step === 2 ? 
        <QuestionList
          formdata={formdata}
          onCreateLink={(interview_id) => onCreateLink(interview_id)}
        />
       : step === 3 ? 
        <InterviewLink interview_id={interviewId} formdata={formdata}/>
       : null}
    </div>
  );
};

export default createInterview;
