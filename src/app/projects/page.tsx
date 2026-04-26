import PageTransition from "@/modules/common/components/PageTransition";
import ProjectsPreview from "@/modules/projects/components/ProjectsPreview";
import { GetProjectsResponse } from "@/modules/projects/projects.types";

export const dynamic = "force-dynamic";

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/projects`);
  const allProjects: GetProjectsResponse = await response.json();

  return (
    <PageTransition>
      <ProjectsPreview projects={allProjects.projects} />
    </PageTransition>
  );
};

export default page;
