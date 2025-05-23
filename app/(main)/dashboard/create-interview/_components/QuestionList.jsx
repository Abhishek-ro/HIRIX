import { useUser } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import axios from "axios";
import { Loader2, Loader2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
const QuestionList = ({ formdata, onCreateLink }) => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [saveloading, setSaveloading] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    if (formdata) {
      GenerateQuestionList();
    }
  }, [formdata]);
  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-model", {
        ...formdata,
      });
      const content = String(result?.data?.content);
      const FINAL_JSON = content.replace("```json", "").replace("```", "");
      const questionExtract = JSON.parse(FINAL_JSON).interviewQuestions;
      setQuestions(questionExtract);
      toast("Questions Generated Successfully");
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onFinish = async () => {
    setSaveloading(true);
    const interview_id = uuidv4();
    const { data, error } = await supabase
      .from("Interviews")
      .insert([
        {
          ...formdata,
          questionList: questions,
          userEmail: user?.email,
          interview_id: interview_id,
        },
      ])
      .select();

    //update user Credits

    // const updateCredits = await supabase
    //   .from("Users")
    //   .update({ credits: Number(user?.credits)-1 })
    //   .eq("email", user?.email)
    //   .select();
    // console.log(updateCredits)
    setSaveloading(false);
    onCreateLink(interview_id);
  };
  return (
    <div>
      {loading && (
        <div className="p-5 bg-blue-50 border border-primary-200 rounded-xl flex items-center gap-5">
          <Loader2Icon className="animate-spin" />
          <div>
            <h2 className="font-medium">Generating Interview Questions</h2>
            <p className="text-primary ">
              Our AI is Crafting personalized questions based on your job
              position
            </p>
          </div>
        </div>
      )}
      {questions?.length > 0 && (
        <>
          <h2 className="font-bold text-lg mb-5">
            Generated Interview Questions:
          </h2>
          <div className="border border-gray-300 p-5 rounded-xl">
            {questions.map((item, index) => (
              <div
                key={index}
                className="p-3 bg-white border border-gray-200 rounded-xl my-2"
              >
                <h2 className="font-medium">{item.question}</h2>
                <h2 className="text-primary">Type:{item.type}</h2>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="mt-10 flex justify-end">
        {!loading && (
          <Button onClick={() => onFinish()} disabled={saveloading}>
            {saveloading && <Loader2 className="animate-spin" />}
            Create Interview Link & Finish
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
