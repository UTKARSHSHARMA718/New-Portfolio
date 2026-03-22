const skills = {
  Frontend: ["React", "Next.js", "Tailwind", "TypeScript"],
  Backend: ["Node.js", "NestJS", "REST APIs", "WebSockets"],
  Infra: ["PostgreSQL", "Redis", "Docker", "AWS"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Tech stack</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="mb-3 font-semibold">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm rounded-full bg-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}