export default function Loading() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌈 Same Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-linear-to-br from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 🧠 Header */}
        <div className="mb-8 space-y-3">
          {/* Title */}
          <div className="h-10 w-2/3 bg-white/20 rounded shimmer" />

          {/* Repo link */}
          <div className="h-4 w-1/3 bg-white/20 rounded shimmer" />
        </div>

        {/* 📄 Markdown Card */}
        <div className="bg-black/80 backdrop-blur rounded-xl p-6 shadow-lg space-y-6">
          {/* Heading */}
          <div className="h-6 w-1/3 bg-gray-300 rounded shimmer" />

          {/* Paragraph */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded shimmer" />
            <div className="h-4 w-5/6 bg-gray-300 rounded shimmer" />
            <div className="h-4 w-4/6 bg-gray-300 rounded shimmer" />
          </div>

          {/* Code block */}
          <div className="bg-gray-900 rounded-lg p-4 space-y-2">
            <div className="h-3 w-full bg-gray-700 rounded shimmer" />
            <div className="h-3 w-5/6 bg-gray-700 rounded shimmer" />
            <div className="h-3 w-4/6 bg-gray-700 rounded shimmer" />
            <div className="h-3 w-3/6 bg-gray-700 rounded shimmer" />
          </div>

          {/* Another section */}
          <div className="h-5 w-1/4 bg-gray-300 rounded shimmer" />

          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-300 rounded shimmer" />
            <div className="h-4 w-3/4 bg-gray-300 rounded shimmer" />
          </div>

          {/* List simulation */}
          <div className="space-y-2">
            <div className="h-4 w-2/3 bg-gray-300 rounded shimmer" />
            <div className="h-4 w-1/2 bg-gray-300 rounded shimmer" />
            <div className="h-4 w-3/5 bg-gray-300 rounded shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}
