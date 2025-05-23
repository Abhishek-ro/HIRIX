import { Button } from "@/components/ui/button";
import moment from "moment";
import React from "react";
import CandidateFeedback from "./CandidateFeedback";

const CandidateList = ({ candidateList }) => {
  return (
    <div className="p-5">
      <h2 className="font-bold my-5">Candidates({candidateList?.length})</h2>
      {candidateList?.map((candidate, index) => (
        <div
          key={index}
          className="p-5 flex gap-3 items-center bg-white justify-between rounded-lg"
        >
          <div className="flex items-center gap-5">
            <h2 className="bg-primary h-[35px] w-[35px] font-bold rounded-full flex justify-center items-center text-white">
              {candidate?.userName[0]}
            </h2>
            <div>
              <h2 className="font-bold">{candidate?.userName}</h2>
              <h2 className="text-sm text-gray-500">
                Completed On:{" "}
                {moment(candidate?.created_at).format("MMM DD yyyy")}
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

              return <h2 className={color}>{rating}/10</h2>;
            })()}

           <CandidateFeedback candidate={candidate} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CandidateList;
