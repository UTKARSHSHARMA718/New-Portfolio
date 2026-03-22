export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((p) => (
            <div key={p} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Project {p}</h3>
              <p className="text-gray-400 text-sm">
                Backend-focused project with real-world architecture.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}