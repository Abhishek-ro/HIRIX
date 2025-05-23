import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Calendar, Clock, Copy, List, Mail, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const InterviewLink = ({ interview_id, formdata }) => {
  const url = process.env.NEXT_PUBLIC_HOST_URL + "/" + interview_id;
  const GetInterviewUrl = () => {
    return url;
  };
  const onCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    toast("Link Copied");
  };
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <Image src={"/check.png"} width={50} height={50} alt="check" />
      <h2 className="font-bold text-lg mt-3">Your AI Interview is Ready!</h2>
      <p className="mt-1 text-primary font-medium">
        Share this link with your candidates to start the interview process
      </p>
      <div className="w-full p-7 mt-6 rounded-lg bg-white">
        <div className="flex justify-between items-center  mt-3">
          <h2 className="font-bold">Interview Link</h2>
          <h2 className="p-1 px-2 text-primary bg-black/10 rounded font-medium">
            Valid for 30 Days.
          </h2>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <Input defaultValue={GetInterviewUrl()} disabled={true} />
          <Button onClick={() => onCopyLink()}>
            <Copy />
            Copy Link
          </Button>
        </div>
        <hr className="my-7" />

        <div className="flex gap-5">
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Clock className="h-4 w-4" />
            {formdata?.duration} mins
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <List className="h-4 w-4" />
            10 Questions
          </h2>
          <h2 className="text-sm text-gray-500 flex gap-2 items-center">
            <Calendar className="h-4 w-4" />
            {formdata?.duration} mins
          </h2>
        </div>
      </div>
      <div className="mt-7 bg-white p-5 rounded-lg w-full ">
        <h2 className="font-bold">Share Via</h2>
        <div className="flex gap-7 mt-2">
          <Button variant={"outline"} className="">
            <Mail />
            Email
          </Button>
          <Button variant={"outline"} className="">
            <Mail />
            Slack
          </Button>
          <Button variant={"outline"} className="">
            <Mail />
            Whatsapp
          </Button>
        </div>
      </div>
      <div className="flex w-full gap-5 justify-between mt-7">
        <Link href={"/dashboard"}>
          <Button variant={"outline"}>
            <ArrowLeft />
            Back to Dashboard
          </Button>
        </Link>
        <Link href={"/create-interview"}>
          <Button>
            <Plus />
            Create New Interview
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InterviewLink;
