import { QUESTIONS_PROMPT } from "@/services/prompts";
import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON in request body" },
      { status: 400 }
    );
  }

  const { jobPosition, jobDescription, duration, type } = body;

  if (!jobPosition || typeof jobPosition !== "string") {
    return NextResponse.json(
      { error: "jobPosition is required and must be a string" },
      { status: 400 }
    );
  }
  if (!jobDescription || typeof jobDescription !== "string") {
    return NextResponse.json(
      { error: "jobDescription is required and must be a string" },
      { status: 400 }
    );
  }
  if (!duration || typeof duration !== "string") {
    return NextResponse.json(
      { error: "duration is required and must be a string" },
      { status: 400 }
    );
  }
  if (
    type === undefined ||
    (type !== null && !Array.isArray(type) && typeof type !== "string")
  ) {
    return NextResponse.json(
      { error: "type must be a string, an array, or null" },
      { status: 400 }
    );
  }

  const interviewType = Array.isArray(type)
    ? type.join(", ")
    : type || "unspecified";
  let FINAL_PROMPT = String(QUESTIONS_PROMPT)
    .replace("{{jobTitle}}", jobPosition)
    .replace("{{jobDescription}}", jobDescription)
    .replace("{{duration}}", duration)
    .replace("{{type}}", interviewType);

  FINAL_PROMPT.replace(" {{type}} ", interviewType);
  FINAL_PROMPT.replace(" {{jobTitle}} ", jobPosition);

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
