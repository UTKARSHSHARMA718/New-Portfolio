"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Briefcase,
  Folder,
  Mail,
  Home,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function FloatingDock() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-4 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.4, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center justify-end group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl transition
                  ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-white/10 text-white group-hover:bg-white/20"
                  }`}
                >
                  <Icon size={22} />
                </div>

                {/* Label (appears on hover like macOS) */}
                <span className="text-xs mt-1 text-white opacity-0 h-0 group-hover:opacity-100 group-hover:h-full transition">
                  {item.label}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}