export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          More than just shipping features
        </h2>

        <p className="text-gray-400 max-w-2xl mb-10">
          I enjoy building reliable backend services, clean APIs, and scalable systems.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["What I build", "How I think", "Currently exploring"].map((title) => (
            <div key={title} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">
                Backend-heavy apps, systems, and engineering-first design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}