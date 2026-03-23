
export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/videos/bg.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/50 z-1" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg" />
            Available for software engineering roles
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Building{" "}
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
              scalable backend systems
            </span>{" "}
            and polished web apps.
          </h1>

          <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
            I’m a software engineer focused on backend development, full-stack
            applications, authentication flows, and real-time systems.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white">
              View Projects
            </a>
            <a className="px-5 py-3 rounded-full border border-white/20">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
          <div className="bg-black/80 rounded-xl p-4 font-mono text-sm text-gray-300">
            <p>$ whoami</p>
            <p className="text-white">Utkarsh Sharma — Software Engineer</p>

            <br />

            <p>$ stack</p>
            <p>Node.js · NestJS · Next.js · PostgreSQL · Redis</p>

            <br />

            <p>$ focus</p>
            <p>Scalable APIs, auth systems, real-time apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
