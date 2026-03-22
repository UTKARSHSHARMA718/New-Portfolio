import PageTransition from "@/modules/common/components/PageTransition";
import ProjectsPreview from "@/modules/projects/components/ProjectsPreview";

const page = () => {
  return (
    <PageTransition>
      <ProjectsPreview />
    </PageTransition>
  );
};

export default page;
