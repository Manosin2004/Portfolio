import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "./Section";

type Item = {
  role: string;
  org: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  points: string[];
  tags?: string[];
};

const items: Item[] = [
  {
    role: "Web Developer",
    org: "Schoenen Dis LLP · Nagercoil",
    time: "2026 — Present",
    icon: Briefcase,
    points: [
      "Designed and updated WordPress websites, improving page load and content structure.",
      "Performed on-page SEO tasks, increasing keyword relevance across 5+ pages.",
      "Manage ongoing website content updates for active client sites.",
      "Building web applications using React.js, Node.js and PHP alongside WordPress work.",
    ],
    tags: ["WordPress", "React", "Node.js", "PHP", "SEO"],
  },
  {
    role: "Web Development Intern",
    org: "CodeBind Technologies · T. Nagar, Chennai",
    time: "2025",
    icon: Briefcase,
    points: [
      "Learned HTML, CSS and core web development concepts hands-on.",
      "Set up local development environment using XAMPP and MySQL.",
      "Built basic database-driven pages during structured training.",
    ],
    tags: ["HTML", "CSS", "MySQL", "XAMPP"],
  },
  {
    role: "B.E Computer Science Engineering",
    org: "Anna University",
    time: "2022 — 2026 · CGPA 7.7",
    icon: GraduationCap,
    points: [
      "Coursework across DSA, DBMS, Operating Systems, Web Technologies and Software Engineering.",
      "Multiple full-stack academic projects using React, Firebase and MySQL.",
    ],
    tags: ["CSE", "DSA", "Web Tech"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Journey"
          title={
            <>
              Experience & <span className="text-gradient">Education</span>
            </>
          }
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-[#00e5ff] via-[#7b2ff7] to-transparent sm:left-1/2 sm:block" />

          <div className="space-y-10">
            {items.map((it, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={it.role + it.time}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid gap-4 sm:grid-cols-2 sm:gap-10`}
                >
                  <div className={left ? "sm:pr-10 sm:text-right" : "sm:col-start-2 sm:pl-10"}>
                    <div className="glass rounded-2xl p-6 transition hover:-translate-y-1">
                      <div className="flex items-center gap-3 sm:justify-start" style={left ? { justifyContent: "flex-end" } : undefined}>
                        <span className="rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/10 px-3 py-1 text-[11px] font-mono text-[#00e5ff]">
                          {it.time}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold">
                        {it.role}
                      </h3>
                      <div className="text-sm text-white/60">{it.org}</div>
                      <ul className={`mt-4 space-y-2 text-sm text-white/75 ${left ? "sm:text-right" : ""}`}>
                        {it.points.map((p) => (
                          <li key={p} className="flex gap-2 sm:justify-inherit">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00e5ff] to-[#7b2ff7]" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                      {it.tags && (
                        <div className={`mt-4 flex flex-wrap gap-2 ${left ? "sm:justify-end" : ""}`}>
                          {it.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Node */}
                  <div className="absolute left-4 top-6 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#00e5ff] blur-md" />
                      <div className="relative grid h-8 w-8 place-items-center rounded-full border border-white/15 bg-[#0b0f22]">
                        <it.icon className="h-4 w-4 text-[#00e5ff]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
