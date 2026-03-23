import { SkillCategory } from "../utils/experienceData";

type SkillsGridProps = {
  skills: SkillCategory[];
};

export default function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(124,156,255,0.10),transparent_40%,rgba(94,234,212,0.08))]" />

      <div className="relative z-10 grid gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <h3 className="mb-2 text-base font-semibold text-teal-300">
              {skill.title}
            </h3>
            <p className="text-sm leading-7 text-slate-200">{skill.items}</p>
          </div>
        ))}
      </div>
    </article>
  );
}