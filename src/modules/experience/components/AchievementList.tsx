type AchievementListProps = {
  achievements: string[];
};

export default function AchievementList({
  achievements,
}: AchievementListProps) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(124,156,255,0.10),transparent_40%,rgba(94,234,212,0.08))]" />

      <ul className="relative z-10 space-y-3">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
          >
            {achievement}
          </li>
        ))}
      </ul>
    </article>
  );
}