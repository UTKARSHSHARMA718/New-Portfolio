import PageTransition from "@/modules/common/components/PageTransition";
import ExperiencePreview from "@/modules/experience/components/ExperiencePreview";

const page = () => {
  return (
    <PageTransition>
      <ExperiencePreview />
    </PageTransition>
  );
};

export default page;
