type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <section className="mb-8">
      <span className="inline-block rounded-full border border-teal-400/20 bg-indigo-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-teal-300">
        {eyebrow}
      </span>

      <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h1>

      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </section>
  );
}