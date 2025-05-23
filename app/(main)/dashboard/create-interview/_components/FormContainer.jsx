import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewTypes } from "@/services/Constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FormContainer = ({ onHandleChange, gotoNext }) => {
  const [interviewType, setInterviewType] = React.useState([]);
  useEffect(() => {
    if (interviewType) {
      onHandleChange("type", interviewType);
    }
  }, [interviewType]);
  const addInterviewType = (type) => {
    const data = interviewType.includes(type);
    if (!data) {
      setInterviewType((prev) => [...prev, type]);
    } else {
      const newData = interviewType.filter((item) => item !== type);
      setInterviewType(newData);
    }
  };
  return (
    <div className="bg-white p-5 rounded-xl">
      <div>
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          placeholder="e.g. Full Stack Developer"
          className="mt-2"
          onChange={(event) =>
            onHandleChange("jobPosition", event.target.value)
          }
        />
      </div>
      <div>
        <h2 className="text-sm mt-5 font-medium">Job Description</h2>
        <Textarea
          placeholder="Enter Detailed Job Description"
          className="mt-2 h-[200px]"
          onChange={(event) =>
            onHandleChange("jobDescription", event.target.value)
          }
        />
      </div>
      <div>
        <h2 className="text-sm mt-5 font-medium">Interview Duration</h2>
        <Select onValueChange={(value) => onHandleChange("duration", value)}>
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">15 Min</SelectItem>
            <SelectItem value="30">30 Min</SelectItem>
            <SelectItem value="45">45 Min</SelectItem>
            <SelectItem value="60">60 Min</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <h2 className="text-sm mt-5 font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewTypes.map((type, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-1 px-2 bg-white  border boder-gray-200 rounded-lg cursor-pointer hover:bg-black/10 ${
                interviewType.includes(type?.title) && "text-red-800"
              }`}
              onClick={() => addInterviewType(type?.title)}
            >
              <type.icon className="w-4 h-4" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-end" onClick={() => gotoNext()}>
        <Button>
          Generate Question <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
