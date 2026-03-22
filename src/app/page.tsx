import ContactPreview from "@/modules/contact/components/ContactPreview";
import About from "@/modules/experience/components/About";
import ExperiencePreview from "@/modules/experience/components/ExperiencePreview";
import Skills from "@/modules/experience/components/Skills";
import Hero from "@/modules/home/components/Hero";
import ProjectsPreview from "@/modules/projects/components/ProjectsPreview";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ProjectsPreview />
      <ExperiencePreview />
      <ContactPreview />
    </main>
  );
}