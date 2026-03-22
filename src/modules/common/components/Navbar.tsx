"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-[#09101e]/70 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-[70px]">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center">
              U
            </div>
            <span>Utkarsh Sharma</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 text-gray-400">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </nav>

        {open && (
          <div className="md:hidden flex flex-col gap-3 pb-4 text-gray-400">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
}