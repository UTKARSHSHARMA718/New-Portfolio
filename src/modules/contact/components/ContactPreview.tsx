"use client";

import { useState } from "react";

export default function ContactPreview() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-400">
            Open to opportunities and collaborations.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            placeholder="Name"
          />
          <input
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10"
            placeholder="Message"
          />

          <button className="px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white">
            {loading ? "Message queued ✨" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}