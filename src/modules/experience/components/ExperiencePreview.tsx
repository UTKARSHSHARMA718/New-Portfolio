import { achievements, experiences, skills } from "../utils/experienceData";
import AchievementList from "./AchievementList";
import ExperienceCard from "./ExperienceCard";
import SectionHeading from "./SectionHeading";
import SkillsGrid from "./SkillsGrid";

export default function ExperiencePreview() {
  return (
   <main className="min-h-screen bg-[linear-gradient(135deg,#07101f_0%,#0b1020_45%,#121933_100%)] px-4 py-8 text-white md:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Building products that scale, perform, and actually get used."
          description="A strong portfolio experience section should highlight impact, ownership, and the technologies behind the work. This layout presents each company in a clean, easy-to-scan way instead of showing one large resume-style block."
        />

        <section className="mt-8 grid gap-6">
          {experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.date}`}
              experience={experience}
            />
          ))}
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-semibold text-white">
            Achievements & Skills
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <AchievementList achievements={achievements} />
            <SkillsGrid skills={skills} />
          </div>
        </section>
      </div>
    </main>
  );
}