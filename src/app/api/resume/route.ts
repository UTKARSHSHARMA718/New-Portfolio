import { NextResponse } from "next/server";

export const GET = async () => {
  // later you can fetch this from DB
  const resumeUrl = process.env.RESUME_URL;

  return NextResponse.json({ url: resumeUrl });
};
