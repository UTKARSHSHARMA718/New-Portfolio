import PageTransition from "@/modules/common/components/PageTransition";
import ProjectDetailsPage from "@/modules/projects/components/ProjectDetailsPage";
import { GetProjectDetailsResponse } from "@/modules/projects/projects.types";

export const dynamic = "force-dynamic";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/projects/readme?id=${id}`,
  );
  const result: GetProjectDetailsResponse = await res.json();

  return (
    <PageTransition className="flex-1">
      {result && (
        <ProjectDetailsPage
          content={result.projectData.readMe}
          projectName={result.projectData?.title}
          repoUrl={result.projectData?.repoLink}
        />
      )}
      {!result && <div>No project found!</div>}
    </PageTransition>
  );
}
