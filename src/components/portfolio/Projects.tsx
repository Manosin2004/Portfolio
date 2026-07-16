import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { SectionHeader } from "./Section";
import { TiltCard } from "./TiltCard";

type Project = {
  title: string;
  blurb: string;
  features: string[];
  tech: string[];
  live?: string;
  code?: string;
  accent: string;
  glyph: string;
};

const projects: Project[] = [
  {
    title: "AI Mock Interview",
    blurb:
      "AI-powered mock interview platform built with React and Firebase, using Gemini AI for real-time question generation, response analysis and instant feedback.",
    features: ["AI Questions", "Authentication", "Interview History", "AI Feedback"],
    tech: ["React", "Firebase", "Gemini AI"],
    accent: "from-[#00e5ff] to-[#7b2ff7]",
    glyph: "AI",
  },
  {
    title: "BIP Billing",
    blurb:
      "Billing and inventory management application for small businesses — invoices, quotations, inventory and customer management in one place.",
    features: ["Invoice", "Quotation", "Inventory", "Customers"],
    tech: ["PHP", "MySQL", "JavaScript"],
    live: "https://www.bipbilling.co.in/",
    accent: "from-[#7b2ff7] to-[#00ffd1]",
    glyph: "BIP",
  },
  {
    title: "Sunday School Attendance",
    blurb:
      "Attendance and reporting system for Sunday school — student management, attendance tracking, authentication, dashboard and printable reports.",
    features: [
      "Student Management",
      "Attendance",
      "Dashboard",
      "Authentication",
      "Reports",
    ],
    tech: ["React", "Firebase", "Tailwind"],
    accent: "from-[#00ffd1] to-[#00e5ff]",
    glyph: "SSA",
  },
  {
    title: "Home Service Booking",
    blurb:
      "Booking web app for plumbing and electrical services with auto-matching between customer requirements and available providers.",
    features: ["Provider Matching", "Booking Flow", "Admin Panel"],
    tech: ["Node.js", "MySQL", "Python"],
    accent: "from-[#00e5ff] to-[#00ffd1]",
    glyph: "HSB",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          desc="A selection of full-stack products I've designed, built and shipped."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <TiltCard className="glass group h-full overflow-hidden rounded-3xl">
                {/* Cover */}
 {/* Tech tag */}
<div className="px-6 pt-6">
  <div className="font-mono text-[11px] tracking-wide text-[#00ffd1]">
    {p.tech.join(" · ")}
  </div>
</div>

{/* Body */}
<div className="p-6 pt-3">
  <h3 className="font-display text-xl font-semibold sm:text-2xl">
    {p.title}
  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {p.blurb}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] text-[#00e5ff]/90"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-9 w-9 place-items-center rounded-xl border border-[#00e5ff]/40 text-[#00e5ff] transition hover:bg-[#00e5ff]/10 hover:glow-cyan"
                          aria-label={`Open ${p.title} live`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={p.code ?? "https://github.com/"}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                        aria-label={`View ${p.title} code`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
