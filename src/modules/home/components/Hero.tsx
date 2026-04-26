"use client";

import Link from "next/link";

export default function Hero() {
  const handleResumeClick = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/resume`,
    );
    const data = await res.json();

    window.open(data.url, "_blank");
  };

  return (
    <section className="relative pt-20 pb-16 overflow-hidden flex-1 text-white">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        {/* LEFT */}
        <div>
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 shadow-lg" />
            Software Engineer · Open for opportunities
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Building{" "}
            <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
              scalable systems
            </span>{" "}
            & crafting{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              modern web experiences
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
            Full-stack engineer focused on backend architecture, real-time
            systems, and intuitive frontend applications using modern cloud
            technologies.
          </p>

          {/* Tech Tags */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            {[
              "Frontend",
              "Backend",
              "System Design",
              "AWS",
              "Real-time Systems",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-white/10 rounded-full border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
            >
              Contact Me
            </Link>

            {/* 🌈 Glow Resume Button */}
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 animate-glow" />

              <button
                onClick={handleResumeClick}
                className="relative px-6 py-3 rounded-full bg-black text-white border border-white/20 backdrop-blur-md"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur">
          <div className="bg-black/80 rounded-xl p-4 font-mono text-sm text-gray-300">
            <p>$ focus</p>
            <p className="text-white">
              scalable systems · frontend experiences
            </p>

            <br />

            <p>$ stack</p>
            <p>frontend · backend · cloud · real-time</p>

            <br />

            <p>$ impact</p>
            <p>
              high-performance apps, real-time pipelines, optimized workflows
            </p>

            <br />

            <p>$ mindset</p>
            <p>performance · scalability · clean architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
