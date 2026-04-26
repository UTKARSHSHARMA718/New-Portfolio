import { NextRequest, NextResponse } from "next/server";
import { projectsList } from "../route";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing required params: id" },
      { status: 400 },
    );
  }

  const project = projectsList.find((p) => p.id === id);

  if (!project) {
    return NextResponse.json({ error: "Project Not Found!" }, { status: 404 });
  }

  const res = await fetch(
    `${process.env.GITHUB_REPO_BASE_URL}/${project.slug}/main/README.md`,
  );
  const content = await res.text();

  return NextResponse.json({
    projectData: {
      ...project,
      readMe: content,
    },
  });
};
