import { NextResponse } from "next/server";

export const projectsList = [
  {
    id: "project-01",
    title: "Skillence AI",
    slug: 'Skillence-AI',
    description:
      "An enterprise-grade, AI-powered interview and review platform designed to evaluate newly onboarded employees based on their learning materials. The system simulates an interactive, real-time voice interview environment where users respond to topic-based questions, and their performance is analyzed instantly.",
    repoLink: "https://github.com/UTKARSHSHARMA718/Skillence-AI",
  },
];

export const GET = async () => {
  return NextResponse.json({ projects: projectsList });
};
