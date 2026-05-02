export default function Loading() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="h-8 w-80 bg-white/10 rounded shimmer" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative group">
              {/* Glow effect placeholder */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-xl opacity-30" />

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-4">
                {/* Title */}
                <div className="h-6 w-2/3 bg-white/10 rounded shimmer" />

                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded shimmer" />
                  <div className="h-4 w-5/6 bg-white/10 rounded shimmer" />
                </div>

                {/* Link */}
                <div className="h-4 w-32 bg-white/10 rounded shimmer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}