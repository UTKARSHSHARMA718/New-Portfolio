type HighlightGridProps = {
  highlights: string[];
};

export default function HighlightGrid({ highlights }: HighlightGridProps) {
  return (
    <ul className="relative z-10 mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
      {highlights.map((highlight, index) => (
        <li
          key={index}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
        >
          {highlight}
        </li>
      ))}
    </ul>
  );
}