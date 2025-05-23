import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { Progress } from "@/components/ui/progress";

const CandidateFeedback = ({ candidate }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className={"text-primary"}>
          View Report
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Feedback</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <h2 className="bg-primary h-[35px] w-[35px] font-bold rounded-full flex justify-center items-center text-white">
                    {candidate?.userName[0]}
                  </h2>
                  <div>
                    <h2 className="font-bold">{candidate?.userName}</h2>
                    <h2 className="text-sm text-gray-500">
                      {candidate?.userEmail}
                    </h2>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  {(() => {
                    const rating =
                      candidate?.feedback?.feedback?.rating?.totalRating ?? 0;
                    const color =
                      rating <= 4
                        ? "text-red-600"
                        : rating < 7
                        ? "text-yellow-600"
                        : "text-green-600";

                    return (
                      <h2 className={`${color} text-2xl font-bold`}>
                        {rating}/10
                      </h2>
                    );
                  })()}
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-red-900 font-bold">Skill Assistment</h2>
                <div className="mt-3 grid grid-cols-2 gap-10">
                  <div>
                    <h2 className="flex justify-between">
                      Technical Skills{" "}
                      <span>
                        {candidate?.feedback?.feedback?.rating?.technicalSkills}
                        /10
                      </span>
                    </h2>
                    <Progress
                      value={
                        candidate?.feedback?.feedback?.rating?.technicalSkills *
                        10
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between">
                      Communication Skill{" "}
                      <span>
                        {candidate?.feedback?.feedback?.rating?.communication}
                        /10
                      </span>
                    </h2>
                    <Progress
                      value={
                        candidate?.feedback?.feedback?.rating?.communication *
                        10
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between">
                      Problem Solving Skills{" "}
                      <span>
                        {candidate?.feedback?.feedback?.rating?.problemSolving}
                        /10
                      </span>
                    </h2>
                    <Progress
                      value={
                        candidate?.feedback?.feedback?.rating?.problemSolving *
                        10
                      }
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <h2 className="flex justify-between">
                      Experience{" "}
                      <span>
                        {candidate?.feedback?.feedback?.rating?.experience}
                        /10
                      </span>
                    </h2>
                    <Progress
                      value={
                        candidate?.feedback?.feedback?.rating?.experience * 10
                      }
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="font-bold">Performance Summery</h2>
                <div className="p-5 bg-secondary my-3 rounded-md">
                  <p>{candidate?.feedback?.feedback?.summary}</p>
                </div>
              </div>
              <div
                className={`p-5 flex justify-between items-center  rounded-md ${
                  candidate?.feedback?.feedback?.recommendation === false
                    ? "bg-red-200"
                    : "bg-green-200"
                }`}
              >
                <div className="">
                  <h2
                    className={`font-bold ${
                      candidate?.feedback?.feedback?.recommendation === false
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                  >
                    Recommendation Message:
                  </h2>
                  <p
                    className={`${
                      candidate?.feedback?.feedback?.recommendation === false
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {candidate?.feedback?.feedback?.recommendationMsg}
                  </p>
                </div>
                <Button
                  className={`${
                    candidate?.feedback?.feedback?.recommendation === false
                      ? "bg-red-500"
                      : "bg-green-500"
                  }`}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateFeedback;
