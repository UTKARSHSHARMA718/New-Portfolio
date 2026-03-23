import { ExperienceItem } from "../utils/experienceData";
import HighlightGrid from "./HighlightGrid";

type ExperienceCardProps = {
  experience: ExperienceItem;
};

export default function ExperienceCard({
  experience,
}: ExperienceCardProps) {
  const { company, role, date, highlights } = experience;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(124,156,255,0.10),transparent_40%,rgba(94,234,212,0.08))]" />

      <div className="relative z-10 mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-white">{company}</h2>
          <p className="mt-1 text-sm font-medium text-teal-300">{role}</p>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          {date}
        </span>
      </div>

      <HighlightGrid highlights={highlights} />
    </article>
  );
}