import { FEEDBACK_PROMPT } from "@/services/FeedBackPrompt";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req) {
  const { conversation } = await req.json();
  console.log("coversation",conversation)
  const FINAL_PROMPT = String(FEEDBACK_PROMPT).replace(
    "{{conversation}}",
    JSON.stringify(conversation)
  );



  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "opengvlab/internvl3-14b:free",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });

    // Check if choices exist and have at least one element
    if (!completion.choices || completion.choices.length === 0) {
      throw new Error("No response choices returned from API");
    }

    return NextResponse.json(completion.choices[0].message);
  } catch (err) {
    console.log("Error in OpenAI API:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
