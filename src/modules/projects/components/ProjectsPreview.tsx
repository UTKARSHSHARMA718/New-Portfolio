"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "../projects.types";

export default function ProjectsPreview({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Personal Featured Projects</h2>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* Card */}
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-400 text-sm mb-6">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.id}`}
                  className="text-sm text-indigo-400 hover:text-indigo-300 transition"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Placeholder if only 1 project */}
          {projects.length === 1 && (
            <div className="flex items-center justify-center p-8 rounded-2xl border border-dashed border-white/10 text-gray-500">
              <p className="text-sm">More projects coming soon 🚀</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
