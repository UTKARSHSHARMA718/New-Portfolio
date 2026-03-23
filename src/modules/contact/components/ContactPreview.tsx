"use client";

import ContactHeader from "./ContactHeader";
import ContactLinks from "./ContactLinks";
import ContactForm from "./ContactForm";

export default function ContactPreview() {

  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,#07101f_0%,#0b1020_45%,#121933_100%)] px-4 py-8 text-white md:px-6 md:py-12">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ContactHeader
          title="Let’s build something great together."
          description="Whether it’s a job opportunity, freelance project, collaboration, or just a tech discussion, feel free to reach out."
        />

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactLinks />
          <ContactForm />
        </section>
      </div>
    </main>
  );
}