import PageTransition from "@/modules/common/components/PageTransition";
import About from "@/modules/experience/components/About";
import ExperiencePreview from "@/modules/experience/components/ExperiencePreview";
import Skills from "@/modules/experience/components/Skills";

const page = () => {
  return (
    <PageTransition>
      <About />
      <Skills />
      <ExperiencePreview />
    </PageTransition>
  );
};

export default page;
