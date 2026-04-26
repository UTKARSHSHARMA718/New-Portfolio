import PageTransition from "@/modules/common/components/PageTransition";
import ProjectDetailsPage from "@/modules/projects/components/ProjectDetailsPage";
import { GetProjectDetailsResponse } from "@/modules/projects/projects.types";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log({ id });
  const res = await fetch(
    `${process.env.BACKEND_URL}/projects/readme?id=${id}`,
  );
  const result: GetProjectDetailsResponse = await res.json();

  return (
    <PageTransition className="flex-1">
      <ProjectDetailsPage
        content={result.projectData.readMe}
        projectName={result.projectData?.title}
        repoUrl={result.projectData?.repoLink}
      />
    </PageTransition>
  );
}
